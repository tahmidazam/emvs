import { compareAsc, isBefore } from "date-fns";
import ICAL from "ical.js";

export default async function getEvents(url: string | undefined): Promise<{
  past: ICAL.Event[];
  future: ICAL.Event[];
} | null> {
  if (!url) return null;

  try {
    const res = await fetch(url);
    const content = await res.text();
    const jcalData = ICAL.parse(content);
    const component = new ICAL.Component(jcalData);
    const subcomponents = component.getAllSubcomponents("vevent");

    const past: ICAL.Event[] = [];
    const future: ICAL.Event[] = [];

    subcomponents.forEach((subcomponent: ICAL.Component) => {
      const event = new ICAL.Event(subcomponent);

      if (isBefore(event.endDate.toJSDate(), new Date())) {
        past.push(event);
      } else {
        future.push(event);
      }
    });

    past.sort((a: ICAL.Event, b: ICAL.Event) =>
      compareAsc(a.startDate.toJSDate(), b.startDate.toJSDate())
    );

    future.sort((a: ICAL.Event, b: ICAL.Event) =>
      compareAsc(a.startDate.toJSDate(), b.startDate.toJSDate())
    );

    return { past, future };
  } catch (error) {
    console.error(error);

    return null;
  }
}
