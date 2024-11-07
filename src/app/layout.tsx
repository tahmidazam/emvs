import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import Nav from "@/components/nav";
import { AnalyticsProvider } from "@/analytics/analytics-provider";
import AnalyticsPageView from "@/analytics/analytics-page-view";

export const metadata: Metadata = {
  title: "EMVS",
  description: "Emmanuel MedVet Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AnalyticsProvider>
        <body>
          <ThemeProvider attribute="class">
            <Theme>
              <Nav />

              <AnalyticsPageView />

              {children}
            </Theme>
          </ThemeProvider>
        </body>
      </AnalyticsProvider>
    </html>
  );
}
