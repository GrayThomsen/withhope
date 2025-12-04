import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { MantineProvider, createTheme } from "@mantine/core";

export const metadata: Metadata = {
  title: "With Hope",
  description: "TTRPG toolset for character & encounter management",
};

const theme = createTheme({
  colors: {
    primary: [
      "#e5f2ff",
      "#cde0ff",
      "#9abdff",
      "#6398ff",
      "#2e74ff",
      "#1865ff",
      "#005bff",
      "#004ce5",
      "#0043ce",
      "#0039b6",
    ],

    secondary: [
      "#e7f8fe",
      "#dfeaee",
      "#c5d0d4",
      "#a8b6bb",
      "#9aa8ad",
      "#7f9197",
      "#768a92",
      "#63787f",
      "#546b73",
      "#415d66",
    ],

    tertiary: [
      "#ffe9f6",
      "#ffd1e6",
      "#faa1c9",
      "#f66eab",
      "#f24391",
      "#f02981",
      "#f01879",
      "#d60867",
      "#c0005c",
      "#a9004f",
    ],

    accent: [
      "#fffbe0",
      "#fff5ca",
      "#ffea99",
      "#ffde63",
      "#ffd22e",
      "#ffcd18",
      "#ffca01",
      "#e3b200",
      "#ca9e00",
      "#af8800",
    ],
  },

  primaryColor: "primary",
  defaultRadius: "md",

  // Use a modern, minimal UI look
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Inter, sans-serif" },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
