export type Aggregation =
  | "Actual"
  | "Quarter"
  | "Hour"
  | "Day"
  | "Month"
  | "Year";

export const periods: Record<string, {
  label: string,
  aggregation: Aggregation;
  offset: number,
  default: boolean
}> = {
  "30D": {
    label: "30D",
    aggregation: "Day",
    offset: 30 * 24 * 60 * 60 * 1000,
    default: false,
  },
  "14D": {
    label: "14D",
    aggregation: "Day",
    offset: 14 * 24 * 60 * 60 * 1000,
    default: false,
  },
  "7D": {
    label: "7D",
    aggregation: "Day",
    offset: 7 * 24 * 60 * 60 * 1000,
    default: false,
  },
  "24H": {
    label: "24H",
    aggregation: "Hour",
    offset: 1 * 24 * 60 * 60 * 1000,
    default: true,
  },
};
