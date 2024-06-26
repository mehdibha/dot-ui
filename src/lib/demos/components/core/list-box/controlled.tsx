"use client";

import React from "react";
import type { Selection } from "react-aria-components";
import { ListBox, ListBoxItem } from "@/lib/components/core/default/list-box";

export default function Demo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["nextjs", "remix", "astro"]));
  return (
    <div className="flex flex-col items-center gap-6">
      <ListBox
        aria-label="Framework"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ListBoxItem id="nextjs">Next.js</ListBoxItem>
        <ListBoxItem id="remix">Remix</ListBoxItem>
        <ListBoxItem id="astro">Astro</ListBoxItem>
        <ListBoxItem id="gatsby">Gatsby</ListBoxItem>
      </ListBox>
      <p className="text-sm text-fg-muted">
        Selected items:{" "}
        <span className="font-semibold">
          {selected === "all" ? "all" : [...selected].join(", ")}
        </span>
      </p>
    </div>
  );
}
