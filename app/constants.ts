export type Aggregation =
  | "Actual"
  | "Quarter"
  | "Hour"
  | "Day"
  | "Month"
  | "Year";

interface Period {
  label: string,
  aggregation: Aggregation;
  offset: number,
  default: boolean,
  labelFormatOptions: Intl.DateTimeFormatOptions
}

// For infering key as union type, but explicit value type
const asPeriodTypes = <T>(et: { [K in keyof T]: Period }) => et;


export const periods = asPeriodTypes({
  "12M": {
    label: "12M",
    aggregation: "Month",
    offset: 365 * 24 * 60 * 60 * 1000,
    default: false,
    labelFormatOptions: {
      month: "short",
      year: "numeric"
    }
  },
  "30D": {
    label: "30D",
    aggregation: "Day",
    offset: 30 * 24 * 60 * 60 * 1000,
    default: false,
    labelFormatOptions: {
      day: "numeric",
      month: "short",
    }
  },
  "7D": {
    label: "7D",
    aggregation: "Day",
    offset: 8 * 24 * 60 * 60 * 1000,
    default: false,
    labelFormatOptions: {
      weekday: "short",
      day: "numeric",
      month: "short",
    }
  },
  "24H": {
    label: "24H",
    aggregation: "Hour",
    // TODO: Fix offset
    offset: 2 * 24 * 60 * 60 * 1000,
    default: true,
    labelFormatOptions: {
      timeStyle: "short"
    }
  },
});
