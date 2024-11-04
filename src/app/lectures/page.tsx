import PageHeaderSection from "@/components/page-header-section";
import EventSummary from "../../components/event-summary";

export default async function LecturesPage() {
  return (
    <>
      <PageHeaderSection title={"Medicine and Beyond"} subtitle={"TBC"} />

      <EventSummary
        calendarUrl={process.env.LECTURES_ICS}
        upcomingEventsLabel="Upcoming Lectures"
        pastEventsLabel="Past Lectures"
      />
    </>
  );
}
