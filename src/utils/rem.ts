import round from "./round";

/**
 * Convert pixel to rem.
 *
 * Adapted from
 * [`tailwind-typography`](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js#L8)
 * @param px The pixel value.
 * @returns The rem value.
 */
export default function rem(px: number): string {
  return `${round(px / 16)}rem`;
}
