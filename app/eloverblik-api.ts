/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BooleanApiResponse {
  result?: boolean;
}

export interface ChildMeteringPointDto {
  parentMeteringPointId?: string | null;
  meteringPointId?: string | null;
  typeOfMP?: string | null;
  meterReadingOccurrence?: string | null;
  meterNumber?: string | null;
}

export interface ContactAddressDto {
  contactName1?: string | null;
  contactName2?: string | null;
  addressCode?: string | null;
  streetName?: string | null;
  buildingNumber?: string | null;
  floorId?: string | null;
  roomId?: string | null;
  citySubDivisionName?: string | null;
  postcode?: string | null;
  cityName?: string | null;
  countryName?: string | null;
  contactPhoneNumber?: string | null;
  contactMobileNumber?: string | null;
  contactEmailAddress?: string | null;
  contactType?: string | null;
}

export interface EIC {
  codingScheme?: string | null;
  name?: string | null;
}

export interface MarketEvaluationMeteringPoint {
  codingScheme?: string | null;
  name?: string | null;
}

export interface MarketEvaluationPoint {
  mRID?: MarketEvaluationMeteringPoint;
}

export interface MeterDataReadingDto {
  readingDate?: string | null;
  registrationDate?: string | null;
  meterNumber?: string | null;
  meterReading?: string | null;
  measurementUnit?: string | null;
}

export interface MeterDataReadingsDto {
  meteringPointId?: string | null;
  readings?: MeterDataReadingDto[] | null;
}

export interface MeterDataReadingsDtoResponse {
  success?: boolean;

  /** @format int32 */
  errorCode?: number;
  errorText?: string | null;
  id?: string | null;
  stackTrace?: string | null;
  result?: MeterDataReadingsDto;
}

export interface MeterDataReadingsDtoResponseListApiResponse {
  result?: MeterDataReadingsDtoResponse[] | null;
}

export interface MeteringPointApiDto {
  meteringPointId?: string | null;
  typeOfMP?: string | null;
  balanceSupplierName?: string | null;
  postcode?: string | null;
  cityName?: string | null;
  hasRelation?: boolean;
  consumerCVR?: string | null;
  dataAccessCVR?: string | null;
  childMeteringPoints?: ChildMeteringPointDto[] | null;
  streetCode?: string | null;
  streetName?: string | null;
  buildingNumber?: string | null;
  floorId?: string | null;
  roomId?: string | null;
  citySubDivisionName?: string | null;
  municipalityCode?: string | null;
  locationDescription?: string | null;
  settlementMethod?: string | null;
  meterReadingOccurrence?: string | null;
  firstConsumerPartyName?: string | null;
  secondConsumerPartyName?: string | null;
  meterNumber?: string | null;
  consumerStartDate?: string | null;
}

export interface MeteringPointApiDtoListApiResponse {
  result?: MeteringPointApiDto[] | null;
}

export interface MeteringPointDetailsCustomerDto {
  meteringPointId?: string | null;
  parentMeteringPointId?: string | null;
  typeOfMP?: string | null;
  energyTimeSeriesMeasureUnit?: string | null;
  estimatedAnnualVolume?: string | null;
  settlementMethod?: string | null;
  meterNumber?: string | null;
  gridOperatorName?: string | null;
  meteringGridAreaIdentification?: string | null;
  netSettlementGroup?: string | null;
  physicalStatusOfMP?: string | null;
  consumerCategory?: string | null;
  powerLimitKW?: string | null;
  powerLimitA?: string | null;
  subTypeOfMP?: string | null;
  productionObligation?: string | null;
  mpCapacity?: string | null;
  mpConnectionType?: string | null;
  disconnectionType?: string | null;
  product?: string | null;
  consumerCVR?: string | null;
  dataAccessCVR?: string | null;
  consumerStartDate?: string | null;
  meterReadingOccurrence?: string | null;
  mpReadingCharacteristics?: string | null;
  meterCounterDigits?: string | null;
  meterCounterMultiplyFactor?: string | null;
  meterCounterUnit?: string | null;
  meterCounterType?: string | null;
  taxReduction?: string | null;
  taxSettlementDate?: string | null;
  mpRelationType?: string | null;
  firstConsumerPartyName?: string | null;
  secondConsumerPartyName?: string | null;
  streetCode?: string | null;
  streetName?: string | null;
  buildingNumber?: string | null;
  floorId?: string | null;
  roomId?: string | null;
  postcode?: string | null;
  cityName?: string | null;
  citySubDivisionName?: string | null;
  municipalityCode?: string | null;
  locationDescription?: string | null;
  contactAddresses?: ContactAddressDto[] | null;
  childMeteringPoints?: ChildMeteringPointDto[] | null;
  balanceSupplierName?: string | null;
  balanceSupplierStartDate?: string | null;
}

export interface MeteringPointDetailsCustomerDtoResponse {
  success?: boolean;

  /** @format int32 */
  errorCode?: number;
  errorText?: string | null;
  id?: string | null;
  stackTrace?: string | null;
  result?: MeteringPointDetailsCustomerDto;
}

export interface MeteringPointDetailsCustomerDtoResponseListApiResponse {
  result?: MeteringPointDetailsCustomerDtoResponse[] | null;
}

export interface MeteringPointFeeDto {
  feeId?: string | null;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  validFromDate?: string | null;
  validToDate?: string | null;

  /** @format double */
  price?: number;

  /** @format int32 */
  quantity?: number;
}

export interface MeteringPointPriceDataFeeDto {
  meteringPointId?: string | null;
  subscriptions?: MeteringPointSubscriptionDto[] | null;
  tariffs?: MeteringPointTariffDto[] | null;
  fees?: MeteringPointFeeDto[] | null;
}

export interface MeteringPointPriceDataFeeDtoResponse {
  success?: boolean;

  /** @format int32 */
  errorCode?: number;
  errorText?: string | null;
  id?: string | null;
  stackTrace?: string | null;
  result?: MeteringPointPriceDataFeeDto;
}

export interface MeteringPointPriceDataFeeDtoResponseListApiResponse {
  result?: MeteringPointPriceDataFeeDtoResponse[] | null;
}

export interface MeteringPointSubscriptionDto {
  subscriptionId?: string | null;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  validFromDate?: string | null;
  validToDate?: string | null;

  /** @format double */
  price?: number;

  /** @format int32 */
  quantity?: number;
}

export interface MeteringPointTariffDto {
  tariffId?: string | null;
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  periodType?: string | null;
  validFromDate?: string | null;
  validToDate?: string | null;
  prices?: MeteringPointTariffPriceDto[] | null;
}

export interface MeteringPointTariffPriceDto {
  position?: string | null;

  /** @format double */
  price?: number;
}

export interface MeteringPoints {
  meteringPoint?: string[] | null;
}

export interface MeteringPointsRequest {
  meteringPoints?: MeteringPoints;
}

export interface MyEnergyDataMarketDocument {
  mRID?: string | null;
  createdDateTime?: string | null;
  "sender_MarketParticipant.name"?: string | null;
  "sender_MarketParticipant.mRID"?: EIC;
  "period.timeInterval"?: PeriodtimeInterval;
  TimeSeries?: TimeSeries[] | null;
}

export interface MyEnergyDataMarketDocumentResponse {
  success?: boolean;

  /** @format int32 */
  errorCode?: number;
  errorText?: string | null;
  id?: string | null;
  stackTrace?: string | null;
  MyEnergyData_MarketDocument?: MyEnergyDataMarketDocument;
}

export interface MyEnergyDataMarketDocumentResponseListApiResponse {
  result?: MyEnergyDataMarketDocumentResponse[] | null;
}

export interface Period {
  resolution?: string | null;
  timeInterval?: PeriodtimeInterval;
  Point?: Point[] | null;
}

export interface PeriodtimeInterval {
  start?: string | null;
  end?: string | null;
}

export interface Point {
  position?: string | null;
  "out_Quantity.quantity"?: string | null;
  "out_Quantity.quality"?: string | null;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;

  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export interface StringApiResponse {
  result?: string | null;
}

export interface StringResponse {
  success?: boolean;

  /** @format int32 */
  errorCode?: number;
  errorText?: string | null;
  id?: string | null;
  stackTrace?: string | null;
  result?: string | null;
}

export interface StringResponseListApiResponse {
  result?: StringResponse[] | null;
}

export interface TimeSeries {
  mRID?: string | null;
  businessType?: string | null;
  curveType?: string | null;
  "measurement_Unit.name"?: string | null;
  MarketEvaluationPoint?: MarketEvaluationPoint;
  Period?: Period[] | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/customerapi";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    const url = `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`;
    console.log(url)
    return this.customFetch(url, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Eloverblik.Api.CustomerApi
 * @version v1
 * @baseUrl /customerapi
 * @contact Datahub support <datahub@energinet.dk>
 *
 *
 * <p>This API enables you to access your own data.
 * There are two requirements to fullfill in order to get data:
 * 1) You need to be authorized.
 * 2) You need to create a relation to the meteringpoints that you will access.
 *
 * Authorization is handled by using tokens. At first you will need a refresh token. You can generate a refresh token in the portal.
 * Having a refresh token you can then access the /token endpoint and get a short lived access token. Using the access token all the below endpoints are accessable.
 *
 * Releations to meteringspoints. In order to access data from a meteringpoint you need to add a relation to the meteringpoint.
 * Check out the description of the different endpoints below on how to manage these relations.
 *
 * Correlation id. It is possible to set a correlation id in the request header. Using the 'X-User-Correlation-ID' (with an UUID).
 * When provided this id will follow the request and finally end in the response header. This id can be used for tracking the request.
 * Parralel to this id there is another internally id (Also a UUID), wich also is returned in the response header as 'X-Correlation-ID'.</p>
 *
 * <h3>Limitations</h3>
 * <p>At times, we may experience higher loads than our underlying data provider, Datahub, can handle. Therefore we have enforced some limitations on the usage of this API:</p>
 *
 * <ul style="list-style-type:disc;">
 *     <li>Calls to GetToken are restricted to 1 per minute per user.</li>
 *     <li>The total number of calls per user is restricted to 25.</li>
 *     <li>The total number of calls for <b>all</b> users is restricted to 400.</li>
 *     <li>You can request data for a maximum period of 730 days at a time</li>
 * </ul>
 *
 * <p>If you exceed any one of these limits, you will get an http error 429 - Too many requests.</br>
 * If Datahub is not able to keep up with the demand - even if the above limits are not exceeded - you may get an http error 503 - Datahub unavailable.</p>
 *
 * <h3>Usage recommendations</h3>
 * <ul style="list-style-type:disc;">
 *     <li>Bundle requests for 10 metering points at a time.</li>
 *     <li>Spread out multiple requests over a longer period.</li>
 *     <li>Don't request data for periods of several years repeatedly.</li>
 *     <li>If you get an error 429 or 503, wait 1min. before retrying.</li>
 *     <li>The Data Access token is active for 24h and should not need to be refreshed more than once a day.</li>
 * </ul>
 *
 * <h3>Possible system error codes</h3>
 * <p><i>General</i>: NoError = 10000, WrongNumberOfArguments = 10001, NoCprConsent = 10007</p>
 *
 * <p><i>MeteringPoint</i>: WrongMeteringPointIdOrWebAccessCode = 20000, MeteringPointBlocked = 20001, MeteringPointRelationAlreadyExist = 20002, MeteringPointIdNot18CharsLong = 20003
 * MeteringPointAliasTooLong = 20005, WebAccessCodeNot8CharsLong = 20006, WebAccessCodeContainsIllegalChars = 20007, MeteringPointNotFound = 20008, MeteringPointIsChild = 20009,
 * RelationNotFound = 20010, UnknownError = 20011, Unauthorized = 20012</p>
 *
 * <p><i>MeterData</i>: FromDateIsGreaterThanToday = 30000, FromDateIsGreaterThanToDate = 30001, ToDateCantBeEqualToFromDate = 30002, ToDateIsGreaterThanToday = 30003,
 * InvalidDateFormat = 30004, InvalidRequestParameters = 30005, AccessToMeterPointDenied = 30006, NoMeterPointDataAviliable = 30007, RequestedAggregationUnavaliable = 30008,
 * MaximumMeterPointsExceeded = 30009, InvalidMeterpointID = 30010, InternalServerError = 30011, DateNotCoveredByPowerOfAttorney = 30012</p>
 *
 * <p><i>Token</i>: WrongTokenType = 50000, TokenNotValid = 50001, ErrorCreatingToken = 50002, TokenRegistrationFailed = 50003, TokenAlreadyActive = 50004,
 * TokenAlreadyDeactivaed = 50005</p>
 *
 * <p><i>ThirdParty</i>: ThirdPartyNotFound = 60000</p>
 */
export class EloverblikApi<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags MeterData
     * @name MeterdataGettimeseriesCreate
     * @summary Returns a timeserie for each metering point metering point in list.
     * @request POST:/api/meterdata/gettimeseries/{dateFrom}/{dateTo}/{aggregation}
     * @secure
     */
    meterdataGettimeseriesCreate: (
      dateFrom: string,
      dateTo: string,
      aggregation: string,
      data: MeteringPointsRequest,
      params: RequestParams = {},
    ) =>
      this.request<MyEnergyDataMarketDocumentResponseListApiResponse, ProblemDetails>({
        path: `/api/meterdata/gettimeseries/${dateFrom}/${dateTo}/${aggregation}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeterData
     * @name MeterdataGetmeterreadingsCreate
     * @summary Returns a meterreading for at given date for each metering point metering point in list.
     * @request POST:/api/meterdata/getmeterreadings/{dateFrom}/{dateTo}
     * @secure
     */
    meterdataGetmeterreadingsCreate: (
      dateFrom: string,
      dateTo: string,
      data: MeteringPointsRequest,
      params: RequestParams = {},
    ) =>
      this.request<MeterDataReadingsDtoResponseListApiResponse, ProblemDetails>({
        path: `/api/meterdata/getmeterreadings/${dateFrom}/${dateTo}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Sample request:
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointsList
     * @summary Returns a list of metering points.
     * @request GET:/api/meteringpoints/meteringpoints
     * @secure
     */
    meteringpointsMeteringpointsList: (query?: { includeAll?: boolean }, params: RequestParams = {}) =>
      this.request<MeteringPointApiDtoListApiResponse, ProblemDetails>({
        path: `/api/meteringpoints/meteringpoints`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointRelationAddCreate
     * @summary Creates relations to the meteringpoints in the request for which there already exist a CPR/CVR relation.
     * @request POST:/api/meteringpoints/meteringpoint/relation/add
     * @secure
     */
    meteringpointsMeteringpointRelationAddCreate: (data: MeteringPointsRequest, params: RequestParams = {}) =>
      this.request<StringResponseListApiResponse, ProblemDetails>({
        path: `/api/meteringpoints/meteringpoint/relation/add`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointRelationAddUpdate
     * @summary Creates a relation to the meteringPointId in the request.
     * @request PUT:/api/meteringpoints/meteringpoint/relation/add/{meteringPointId}/{webAccessCode}
     * @secure
     */
    meteringpointsMeteringpointRelationAddUpdate: (
      meteringPointId: string,
      webAccessCode: string,
      params: RequestParams = {},
    ) =>
      this.request<StringApiResponse, ProblemDetails>({
        path: `/api/meteringpoints/meteringpoint/relation/add/${meteringPointId}/${webAccessCode}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointGetdetailsCreate
     * @summary Returns a list of metering points with details.
     * @request POST:/api/meteringpoints/meteringpoint/getdetails
     * @secure
     */
    meteringpointsMeteringpointGetdetailsCreate: (data: MeteringPointsRequest, params: RequestParams = {}) =>
      this.request<MeteringPointDetailsCustomerDtoResponseListApiResponse, ProblemDetails>({
        path: `/api/meteringpoints/meteringpoint/getdetails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointGetchargesCreate
     * @summary Returns pricedata for a list of metering points.
     * @request POST:/api/meteringpoints/meteringpoint/getcharges
     * @secure
     */
    meteringpointsMeteringpointGetchargesCreate: (data: MeteringPointsRequest, params: RequestParams = {}) =>
      this.request<MeteringPointPriceDataFeeDtoResponseListApiResponse, void | ProblemDetails>({
        path: `/api/meteringpoints/meteringpoint/getcharges`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MeteringPoints
     * @name MeteringpointsMeteringpointRelationDelete
     * @summary Removes a relation to the meteringPointId in the request.
     * @request DELETE:/api/meteringpoints/meteringpoint/relation/{meteringPointId}
     * @secure
     */
    meteringpointsMeteringpointRelationDelete: (meteringPointId: string, params: RequestParams = {}) =>
      this.request<BooleanApiResponse, void | ProblemDetails>({
        path: `/api/meteringpoints/meteringpoint/relation/${meteringPointId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description In order to get an access token you will need a valid refresh token. This token can be fetched from the portal. The token is a JWT token. There are tools that can read the content eg: https://jwt.io/ The token must be submittet in the request header like "Authorization: Bearer eyJhbGciOi..."
     *
     * @tags Token
     * @name TokenList
     * @summary Returns a data access token.
     * @request GET:/api/token
     * @secure
     */
    tokenList: (params: RequestParams = {}) =>
      this.request<StringApiResponse, ProblemDetails>({
        path: `/api/token`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
