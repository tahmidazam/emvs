"use client";

import { Box, Flex, TabNav, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppearanceSelect from "./appearance-select";

const NAV_LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/lectures",
    label: "Lectures",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/socials",
    label: "Socials",
  },
  {
    href: "/committee",
    label: "Committee",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <Box className="sticky top-0 z-10 bg-[var(--color-background)]">
      <TabNav.Root justify="center">
        <Flex className="absolute left-0 items-center h-full pl-4" gap="4">
          <Text weight="medium">EMVS</Text>
        </Flex>

        {NAV_LINKS.map(({ href, label }, index) => (
          <TabNav.Link asChild key={index} active={pathname === href}>
            <Link href={href}>{label}</Link>
          </TabNav.Link>
        ))}

        <Flex className="absolute right-0 items-center h-full" pr="4" gap="4">
          <AppearanceSelect />
        </Flex>
      </TabNav.Root>
    </Box>
  );
}
