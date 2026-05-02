// Helper: 0.25 -> 25%, 10 -> 10
export const formatPercentageOrNumber = (value) =>
  value % 1 !== 0 ? `${Math.round(value * 100)}%` : value;

// Add commas to values: 1000 -> 1,000
export const formatNumberWithCommas = (value) => {
  if (value === null || value === undefined) return '';

  // If pure number → format directly
  if (typeof value === 'number') {
    return new Intl.NumberFormat('en-US').format(value);
  }

  if (typeof value === 'string') {
    // Match: number (int/decimal) at the start + anything after
    const match = value.match(/^(-?\d+(\.\d+)?)(.*)$/);

    if (!match) return value;

    const [, numberPart, , suffix] = match;

    const num = Number(numberPart);
    if (Number.isNaN(num)) return value;

    const formatted = new Intl.NumberFormat('en-US').format(num);

    return `${formatted}${suffix}`;
  }

  return value;
};