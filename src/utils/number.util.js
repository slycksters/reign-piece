// Helper: 0.25 -> 25%, 10 -> 10
export const formatPercentageOrNumber = (val) =>
  val % 1 !== 0 ? `${Math.round(val * 100)}%` : val;
