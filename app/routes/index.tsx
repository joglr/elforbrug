import { useLoaderData } from "@remix-run/react";
import type { RequestParams} from "~/eloverblik-api";
import {
  EloverblikApi
  // MeteringPointApiDtoListApiResponse,
  // MeteringPointDetailsCustomerDtoResponseListApiResponse,
} from "~/eloverblik-api";
import invariant from "tiny-invariant";
import { useDimensions } from "~/hooks";
import { useRef } from "react";
import { Cache } from "~/cache.server";

// Create a new cache that expires after 24 hours
const tokenCache = new Cache<string>("token", 24 * 60 * 60 * 1000);
// Create a new cache that never expires
const dataCache = new Cache<Awaited<ReturnType<typeof getData>>>("data", null)

async function getData() {
  const baseAPI = "https://api.eloverblik.dk/customerapi/";
  const refreshToken = process.env.EL_TOKEN;

  invariant(refreshToken, "Missing refresh token, specify it as EL_TOKEN environment variable");

  const api = new EloverblikApi({
    baseUrl: baseAPI,
    // customFetch: cachedFetch,
  });

  const accessToken = await tokenCache.getOrFetchItem(async () => await getAccessToken(baseAPI, refreshToken))

  const authorizedRequestArgs: RequestParams = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  };

  // console.log(accessToken)
  invariant(accessToken, "No access token");

  console.log("Fetching list of metering points");
  const meteringEndpointsResult =
    await api.api.meteringpointsMeteringpointsList({}, authorizedRequestArgs);
  // console.log(meteringEndpoints.data)
  const meteringEndpoints = meteringEndpointsResult.data.result!;
  // console.log(meteringEndpoints);

  const meteringPointIDs = meteringEndpoints.map((mp) => mp.meteringPointId!);
  const meteringPointsRequest = {
    meteringPoints: {
      meteringPoint: meteringPointIDs,
    },
  };

  const now = new Date();
  const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  console.log("Fetching meterdata timeseries of metering points");
  const meteringPointTimeSeries = await api.api.meterdataGettimeseriesCreate(
    formatDate(oneMonthAgo),
    formatDate(now),
    "Day",
    meteringPointsRequest,
    authorizedRequestArgs
  );

  return {
    meteringPointTimeSeriesData: meteringPointTimeSeries.data.result!,
  };
}

export const loader = async ({}) => {
  const data: Awaited<ReturnType<typeof getData>> =
    await getData()
    // await dataCache.getOrFetchItem(getData)

  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const svgRef = useRef<SVGSVGElement>(null);
  const { width: svgWidth } = useDimensions(svgRef);
  const energyData =
    data.meteringPointTimeSeriesData[0].MyEnergyData_MarketDocument!;
  const barWidth = svgWidth / energyData.TimeSeries![0].Period!.length;
  const chartHeight = 200
  const barMargin = 1;
  const barMax = Math.max(
    ...energyData.TimeSeries![0].Period!.map((p) =>
      Number(p.Point![0]["out_Quantity.quantity"])
    )
  );
  const period = energyData.TimeSeries![0].Period!;
  const labelMarginLeft = 15;

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        whiteSpace: "pre",
      }}
    >
      <svg
        ref={svgRef}
        width={`calc(100vw)`}
        height={400}
        viewBox={`0 0 ${svgWidth} 200`}
      >
        {period.map((point, index) => {
          const quantity = Number(point.Point![0]["out_Quantity.quantity"]);
          const label = `${point.Point![0]["out_Quantity.quantity"]} ${
            energyData.TimeSeries![0]["measurement_Unit.name"]
          }`;
          const height = (quantity / barMax) * 200;
          return (
            <g
              key={point.timeInterval?.start!}
              transform={`translate(${index * barWidth}, 0)`}
            >
              <rect
                x={barMargin}
                y={chartHeight - height}
                width={barWidth - 2 * barMargin}
                height={height}
                fill="#8cd9bf"
              >
                <title>{label}</title>
              </rect>
              <text x={chartHeight + labelMarginLeft} y={-barWidth / 2}
              transform="rotate(90)"
              textAnchor="start"
              alignmentBaseline="middle"
              fontSize="16px">
                {/* {index} */}
                {/* {formatDateRelative(new Date(point.timeInterval?.start!))} */}
                {formatDate(new Date(point.timeInterval?.end!))}
              </text>
            </g>
          );
        })}
      </svg>
      {/* {JSON.stringify(data, null, 2)} */}
    </div>
  );
}

async function getAccessToken(baseAPI: string, refreshToken: string) {
  console.log(" ⚠️ Token expired or not found, fetching new token");

  const response = await fetch(baseAPI + "api/token", {
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

function formatDate(date: Date) {
  return date.toISOString().split("T")[0].split("-").reverse().join("-");
}

function formatDateRelative(date: Date) {
  const formatter = new Intl.RelativeTimeFormat("en-US", {
    numeric: "auto",
    style: "long",
  });
  const days = Math.floor(
    (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );
  return formatter.format(days, "days");
}

async function asyncHelper<T>(promise: Promise<T>) {
  try {
    return await promise;
  } catch (e) {
    console.error(e);
    return null;
  }
}
