"use client";

import { AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(true);
  const pathname = usePathname();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      styles={{
        main: {
          backgroundColor: "var(--mantine-color-secondary-9)", // FIX: no more black
          padding: "24px",
        },
      }}
    >
      {/* HEADER */}
      <AppShell.Header
        style={{
          backgroundColor: "var(--mantine-color-primary-6)",
          borderBottom: "1px solid var(--mantine-color-primary-8)",
          color: "white",
        }}
      >
        <Group h="100%" px="md" justify="space-between">
          <Group align="center">
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color="white"
            />
            <span style={{ fontWeight: 600, fontSize: 20 }}>With Hope</span>
          </Group>
        </Group>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar
        style={{
          backgroundColor: "var(--mantine-color-secondary-8)",
          paddingTop: 20,
          borderRight: "1px solid var(--mantine-color-secondary-7)",
        }}
      >
        <NavLink
          component={Link}
          href="/dashboard"
          label="Dashboard"
          active={pathname === "/dashboard"}
          style={{ color: "white", fontWeight: 500 }}
        />
        <NavLink
          component={Link}
          href="/characters"
          label="Characters"
          active={pathname.startsWith("/characters")}
          style={{ color: "white", fontWeight: 500 }}
        />
        <NavLink
          component={Link}
          href="/encounters"
          label="Encounters"
          active={pathname.startsWith("/encounters")}
          style={{ color: "white", fontWeight: 500 }}
        />
      </AppShell.Navbar>

      {/* MAIN CONTENT */}
      <AppShell.Main>
        <div
          style={{
            backgroundColor: "var(--mantine-color-dark-6)",
            padding: "24px",
            borderRadius: "12px",
            minHeight: "calc(100vh - 120px)",
            boxShadow: "0 0 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
}
