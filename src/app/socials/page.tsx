import PageHeaderSection from "@/components/page-header-section";
import EventSummary from "../../components/event-summary";
import AnalyticsClient from "@/analytics/analytics-client";

export default async function SocialsPage() {
  const analyticsClient = AnalyticsClient();

  return (
    <>
      <PageHeaderSection title={"Socials"} subtitle={"TBC"} />

      <EventSummary
        calendarUrl={process.env.SOCIALS_ICS}
        upcomingEventsLabel="Upcoming Socials"
        pastEventsLabel="Past Socials"
      />
    </>
  );
}
