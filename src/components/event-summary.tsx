import getEvents from "@/parsing/get-events";
import { Box, Container, Heading, Section } from "@radix-ui/themes";
import EventTable from "./event-table";

export default async function EventSummary({
  calendarUrl,
  upcomingEventsLabel: upcomingLabel,
  pastEventsLabel: pastLabel,
}: {
  calendarUrl?: string;
  upcomingEventsLabel: string;
  pastEventsLabel: string;
}) {
  if (!calendarUrl) return null;

  const events = await getEvents(calendarUrl);

  if (!events) return null;

  const { past, future } = events;

  return (
    <>
      {future.length > 0 && (
        <Section>
          <Container size="2">
            <Box px="3" pb="4">
              <Heading size="4" weight="medium">
                {upcomingLabel}
              </Heading>
            </Box>

            <EventTable events={future} />
          </Container>
        </Section>
      )}

      {past.length > 0 && (
        <Section>
          <Container size="2">
            <Box px="3" pb="4">
              <Heading size="4" weight="medium">
                {pastLabel}
              </Heading>
            </Box>

            <EventTable events={past} />
          </Container>
        </Section>
      )}
    </>
  );
}
