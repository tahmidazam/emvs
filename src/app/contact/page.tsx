import AnalyticsClient from "@/analytics/analytics-client";
import PageHeaderSection from "@/components/page-header-section";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Container, Flex, Section, Table, Text } from "@radix-ui/themes";
import Link from "next/link";

const contactLabelledHrefs = [
  {
    href: "https://www.facebook.com/groups/603448576461452/",
    label: "Facebook Group",
    handle: "Emmanuel College MedVetSoc 2023/24",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeaderSection title={"Contact"} subtitle={"TBC"} />

      <Section>
        <Container size="2" px="4">
          <Table.Root>
            <Table.Body>
              {contactLabelledHrefs.map(({ href, label, handle }, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Link href={href} key={index}>
                      <Flex align="center" justify="between">
                        <Flex direction="column">
                          <Text>{label}</Text>
                          <Text color="gray">{handle}</Text>
                        </Flex>

                        <ExternalLinkIcon color="gray" />
                      </Flex>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Container>
      </Section>
    </>
  );
}
