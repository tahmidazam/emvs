import { format, isSameDay } from "date-fns";

/**
 * Formats a string summarising the timing of an event.
 * @param start The start date of the event.
 * @param end The end date of the event.
 * @returns A string summarising the timing of the event.
 */
export default function formatTiming(start: Date, end?: Date): string {
  const formatStr: string = "d MMM yy, HH:mm";

  if (!end) return format(start, formatStr);

  const sameDayEvent: boolean = end ? isSameDay(start, end) : false;

  if (!sameDayEvent)
    return `${format(start, formatStr)}–${format(end, formatStr)}`;

  return `${format(start, formatStr)}–${format(end, "HH:mm")}`;
}
