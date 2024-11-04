/**
 * Rounds a number to 7 decimal places and removes trailing zeros.
 *
 * Adapted from
 * [`tailwind-typography`](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js#L8)
 * @param num The number to round.
 * @returns The rounded number as a string.
 */
export default function round(num: number): string {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
}
