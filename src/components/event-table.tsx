import formatTiming from "@/utils/format-timing";
import { Table, DataList } from "@radix-ui/themes";
import ICAL from "ical.js";
import Markdown from "./markdown";

export default function EventTable({ events }: { events: ICAL.Event[] }) {
  return (
    <Table.Root>
      <Table.Body>
        {events.map((event: ICAL.Event) => (
          <Table.Row key={event.uid}>
            <Table.Cell>
              <DataList.Root>
                {event.summary && (
                  <DataList.Item>
                    <DataList.Label>Summary</DataList.Label>
                    <DataList.Value>
                      <Markdown source={event.summary} />
                    </DataList.Value>
                  </DataList.Item>
                )}

                <DataList.Item>
                  <DataList.Label>Timing</DataList.Label>
                  <DataList.Value>
                    {formatTiming(
                      event.startDate.toJSDate(),
                      event.endDate.toJSDate()
                    )}
                  </DataList.Value>
                </DataList.Item>

                {event.location && (
                  <DataList.Item>
                    <DataList.Label>Location</DataList.Label>
                    <DataList.Value>{event.location}</DataList.Value>
                  </DataList.Item>
                )}

                {event.description && (
                  <DataList.Item>
                    <DataList.Label>Description</DataList.Label>
                    <DataList.Value>{event.description}</DataList.Value>
                  </DataList.Item>
                )}
              </DataList.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
