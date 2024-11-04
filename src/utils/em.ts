import round from "./round";

/**
 * Convert pixel to em.
 *
 * Adapted from
 * [`tailwind-typography`](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js#L8)
 * @param px The pixel value.
 * @param base The base font size.
 * @returns The em value.
 */
export default function em(px: number, base: number): string {
  return `${round(px / base)}em`;
}
