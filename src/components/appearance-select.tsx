"use client";

import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Select } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const THEME_SELECT_ITEMS = {
  light: {
    icon: <SunIcon />,
    label: "Light",
  },
  dark: {
    icon: <MoonIcon />,
    label: "Dark",
  },
  system: {
    icon: <DesktopIcon />,
    label: "System",
  },
} as const;

export default function AppearanceSelect() {
  const { theme: selectedTheme, setTheme, themes } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !selectedTheme) return null;

  return (
    <Select.Root value={selectedTheme} onValueChange={setTheme}>
      <Select.Trigger variant="ghost" className="absolute">
        {
          THEME_SELECT_ITEMS[selectedTheme as keyof typeof THEME_SELECT_ITEMS]
            .icon
        }
      </Select.Trigger>

      <Select.Content>
        {themes.map((theme) => (
          <Select.Item key={theme} value={theme}>
            {THEME_SELECT_ITEMS[theme as keyof typeof THEME_SELECT_ITEMS].label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
