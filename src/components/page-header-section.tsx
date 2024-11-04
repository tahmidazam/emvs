import { Section, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Logo from "./../../public/images/logo.png";

export default function PageHeaderSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Section>
      <Container size="2" px="4">
        <Flex direction="column" gap="2">
          <Image
            src={Logo}
            alt={"EMVS logo"}
            className="w-24 h-24 mx-auto"
            priority
          />

          <Heading weight="medium" align="center" size="8">
            {title}
          </Heading>

          <Text align="center" size="5">
            {subtitle}
          </Text>
        </Flex>
      </Container>
    </Section>
  );
}
