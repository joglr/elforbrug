import { Link, useLoaderData } from "@remix-run/react";
import type { MyEnergyDataMarketDocument } from "~/eloverblik-api";
import { EloverblikApi } from "~/eloverblik-api";
import invariant from "tiny-invariant";
import { useDimensions } from "~/hooks";
import { useRef } from "react";
import { Cache } from "~/cache.server";
import type { DataFunctionArgs } from "@remix-run/node";
import { periods } from "~/constants";

async function getData(
  periodPath: keyof typeof periods
): Promise<MyEnergyDataMarketDocument> {
  const tokenCache = new Cache<string>("token", 24 * 60 * 60 * 1000);
  const baseAPI = "https://api.eloverblik.dk/customerapi";
  const refreshToken = process.env.EL_TOKEN;

  invariant(
    refreshToken,
    "Missing refresh token, specify it as EL_TOKEN environment variable"
  );

  const accessToken = await tokenCache.getOrFetchItem(
    async () => await getAccessToken(baseAPI, refreshToken)
  );

  const headers: HeadersInit = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const api = new EloverblikApi({
    baseUrl: baseAPI,
    baseApiParams: {
      headers,
      format: undefined,
    },
  });

  invariant(accessToken, "No access token");

  const meteringPointsIDCache = new Cache<string[]>(
    "meteringPointsID",
    24 * 60 * 60 * 1000
  );

  const meteringPointIDs = await meteringPointsIDCache.getOrFetchItem(
    async () => {
      console.log("Fetching list of metering points");
      const meteringEndpointsResult =
        await api.api.meteringpointsMeteringpointsList({});
      const meteringEndpoints = meteringEndpointsResult.data.result!;

      console.log(
        "Done fetching list of metering points. Metering points:",
        meteringEndpoints.length
      );

      const meteringPointIDs = meteringEndpoints.map(
        (mp) => mp.meteringPointId!
      );
      return meteringPointIDs;
    }
  );
  const meteringPointsRequest = {
    meteringPoints: {
      meteringPoint: meteringPointIDs,
    },
  };

  const period = periods[periodPath];

  // TODO: Improve date calculation logic
  // For some reason, the API does not return data if the interval is from yesterday to today
  // For example, the last 12 months should show the previous 11 months + the current month

  const now = new Date();
  const toDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const fromDate = new Date(toDate.getTime() - period.offset);

  const aggregation = period.aggregation;
  const key = `${formatDateISO(fromDate)}-${formatDateISO(
    toDate
  )}-${aggregation}`;

  const timeSeriesCache = new Cache<
    NonNullable<
      NonNullable<
        Awaited<
          ReturnType<typeof api.api.meterdataGettimeseriesCreate>
        >["data"]["result"]
      >[0]["MyEnergyData_MarketDocument"]
    >
  >(key, 60 * 60 * 1000);

  const meteringPointTimeSeries = await timeSeriesCache.getOrFetchItem(
    async () => {
      console.log("Fetching meterdata timeseries of metering points");
      const result = await api.api.meterdataGettimeseriesCreate(
        formatDateISO(fromDate),
        formatDateISO(toDate),
        aggregation,
        meteringPointsRequest
      );

      only200(result);
      return result.data.result![0].MyEnergyData_MarketDocument!;
    }
  );

  console.log("Done fetching meterdata timeseries of metering points");

  return meteringPointTimeSeries;
}

export const loader = async ({ params }: DataFunctionArgs) => {
  // TODO: Verify that is is a valid period
  const period = params.period as keyof typeof periods;

  invariant(period, "Missing period");

  return {
    period,
    data: await getData(period),
  };
};

export default function Index() {
  const svgRef = useRef<SVGSVGElement>(null);
  const loaderData = useLoaderData<typeof loader>();
  const { period: periodPath, data: electricityUsageData } = loaderData;
  const period = electricityUsageData.TimeSeries![0].Period!;
  const { width: svgWidth } = useDimensions(svgRef);

  const barWidth =
    svgWidth / electricityUsageData.TimeSeries![0].Period!.length;
  const chartHeight = 100;
  const barMargin = 1;
  const barMax = Math.max(
    ...electricityUsageData.TimeSeries![0].Period!.map((p) =>
      Number(p.Point![0]["out_Quantity.quantity"])
    )
  );
  const labelMarginLeft = 15;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        whiteSpace: "pre-wrap",
      }}
    >
      <svg
        ref={svgRef}
        width="calc(100vw)"
        height={500}
        viewBox={`0 0 ${svgWidth} 200`}
      >
        {period.map((point, index) => {
          const quantity = Number(point.Point![0]["out_Quantity.quantity"]);
          const label = `${point.Point![0]["out_Quantity.quantity"]} ${
            electricityUsageData.TimeSeries![0]["measurement_Unit.name"]
          }`;
          const height = (quantity / barMax) * 200;
          const startDate = new Date(point.timeInterval?.start!);
          return (
            <g key={index} transform={`translate(${index * barWidth}, 0)`}>
              <rect
                x={barMargin}
                y={chartHeight - height}
                width={barWidth - 2 * barMargin}
                height={height}
                fill="#8cd9bf"
              >
                <title>{label}</title>
              </rect>
              <text
                x={chartHeight + labelMarginLeft}
                y={-barWidth / 2}
                transform="rotate(90)"
                textAnchor="start"
                alignmentBaseline="middle"
                fontSize="16px"
              >
                {/* <title> */}
                {startDate.toLocaleString(
                  "da-DK",
                  periods[periodPath].labelFormatOptions
                )}
                {/* </title> */}
              </text>
            </g>
          );
        })}
      </svg>
      <p>
        {Object.entries(periods).map(([path, p], i) => (
          <label key={p.label}>
            <Link to={`/${path}`}>{p.label}</Link>
          </label>
        ))}
      </p>
      <p>
        <button type="submit">Update</button>
      </p>
    </div>
  );
}

function only200(response: Response) {
  invariant(
    response.status === 200,
    `HTTP Status: ${response.status} ${response.statusText}, ${response.url}`
  );
}

async function getAccessToken(baseAPI: string, refreshToken: string) {
  console.log(" ⚠️ Token expired or not found, fetching new token");

  const response = await fetch(baseAPI + "/api/token", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  invariant(
    response.status === 200,
    `HTTP Status: ${response.status} ${response.statusText}, ${response.url}`
  );

  const { result: accessToken } = await response.json();
  return accessToken;
}

function formatDateISO(date: Date) {
  return date.toISOString().split("T")[0];
}

// function formatDateRelative(date: Date) {
//   const formatter = new Intl.RelativeTimeFormat("en-US", {
//     numeric: "auto",
//     style: "long",
//   });
//   const days = Math.floor(
//     (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
//   );
//   return formatter.format(days, "days");
// }
