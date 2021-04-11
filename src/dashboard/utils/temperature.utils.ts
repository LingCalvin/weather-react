/**
 * Returns a formatted temperature string.
 *
 * @param value - The temperature sans unit
 * @param unit - The unit
 * @returns The temperature formatted as a string
 */
export function format(value: number, unit: string): string {
  switch (unit) {
    case "F":
      return `${value}℉`;
    case "C":
      return `${value}℃`;
    case "K":
      return `${value}K`;
    default:
      return `${value}`;
  }
}
