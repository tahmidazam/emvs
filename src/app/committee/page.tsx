import AnalyticsClient from "@/analytics/analytics-client";
import PageHeaderSection from "@/components/page-header-section";
import { Role } from "@/interfaces/role";
import getRoles from "@/parsing/get-members";
import {
  Container,
  Flex,
  Grid,
  Heading,
  Link as RadixLink,
  Section,
  Text,
} from "@radix-ui/themes";
import Link from "next/link";

export default async function CommitteePage() {
  const members: Role[] = await getRoles();

  return (
    <>
      <PageHeaderSection
        title={"Committee"}
        subtitle={"Your 2024–25 EMVS committee members"}
      />

      <Section>
        <Container
          size={{
            initial: "2",
            lg: "4",
          }}
          px="4"
        >
          <Grid
            gap="8"
            columns={{
              initial: "1",
              lg: "2",
            }}
          >
            {members.map((role) => (
              <Flex key={role.title} direction="column" gap="4">
                <Heading weight="medium">{role.title}</Heading>

                <Text wrap="pretty">{role.description}</Text>

                <Flex gap="4" wrap="wrap">
                  {role.members.map(({ name, email }) => (
                    <Flex key={name} direction="column">
                      <Text weight="medium">{name}</Text>

                      <RadixLink asChild size="2">
                        <Link href={`mailto:${email}`}>{email}</Link>
                      </RadixLink>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
