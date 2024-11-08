import AnalyticsClient from "@/analytics/analytics-client";
import Markdown from "@/components/markdown";
import PageHeaderSection from "@/components/page-header-section";
import { Container, Section } from "@radix-ui/themes";

export default function Home() {
  const analyticsClient = AnalyticsClient();

  return (
    <>
      <PageHeaderSection title={"TBC"} subtitle={"TBC"} />

      <Section>
        <Container size="2" px="4">
          <Markdown publicPath="articles/home.mdx" />
        </Container>
      </Section>
    </>
  );
}
