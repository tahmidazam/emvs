"use client";

import {
  Copyright,
  FolderGit2,
  Handshake,
  Home,
  Instagram,
  LucideProps,
  Presentation,
  Scale,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ThemeControl } from "./theme-control";

type MenuItem = {
  title: string;
  url: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

// Menu items.
const INTERNAL_NAVIGATION_ITEMS: MenuItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Lectures",
    url: "/lectures",
    icon: Presentation,
  },
  {
    title: "Committee",
    url: "/committee",
    icon: Users,
  },
  {
    title: "Sponsors",
    url: "/sponsors",
    icon: Handshake,
  },
];

const EXTERNAL_NAVIGATION_ITEMS: MenuItem[] = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/emma_medvetsoc/",
    icon: Instagram,
  },
  {
    title: "Repository",
    url: "https://github.com/tahmidazam/emvs",
    icon: FolderGit2,
  },
  {
    title: "Licence",
    url: "https://github.com/tahmidazam/emvs/blob/main/LICENSE.txt",
    icon: Scale,
  },
  {
    title: "Tahmid Azam",
    url: "https://github.com/tahmidazam/",
    icon: Copyright,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="transition-all">EMVS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {INTERNAL_NAVIGATION_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname == item.url}
                    onClick={isMobile ? toggleSidebar : undefined}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>Theme</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <ThemeControl />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Links</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {EXTERNAL_NAVIGATION_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
