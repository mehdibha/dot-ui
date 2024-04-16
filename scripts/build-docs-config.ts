import fs from "fs";
import path from "path";
import { rimraf } from "rimraf";
import type { DocsConfig } from "@/types/docs";
import { getDocs } from "@/server/docs";

const getCategoryDocs = (category: string) => {
  return getDocs(category).map((category) => ({
    title: category.title,
    href: category.href,
    label: category.label,
  }));
};

const docsConfig: DocsConfig = {
  nav: [
    {
      title: "Getting Started",
      slug: "docs",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Installation",
          href: "/docs/installation",
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
        },
        {
          title: "Design",
          items: [
            {
              title: "Overview",
              href: "/docs/design/overview",
            },
            {
              title: "Colors",
              href: "/docs/design/colors",
            },
            {
              title: "Tokens",
              href: "/docs/design/tokens",
            },
          ],
        },
      ],
    },
    {
      title: "Components",
      slug: "components",
      items: [
        {
          title: "Overview",
          href: "/components",
        },
        {
          title: "Inputs",
          items: getCategoryDocs("components/inputs"),
        },
        {
          title: "Feedback",
          items: getCategoryDocs("components/feedback"),
        },
        {
          title: "Layout",
          items: getCategoryDocs("components/layout"),
        },
        {
          title: "Data display",
          items: getCategoryDocs("components/data-display"),
        },
        {
          title: "Navigation",
          items: getCategoryDocs("components/navigation"),
        },
        {
          title: "Overlay",
          items: getCategoryDocs("components/overlay"),
        },
        {
          title: "Utils",
          items: getCategoryDocs("components/utils"),
        },
        {
          title: "Animations",
          items: getCategoryDocs("components/animations"),
        },
      ],
    },
    {
      title: "Blocks",
      slug: "blocks",
      items: [
        {
          title: "Overview",
          href: "/blocks",
        },
        {
          title: "Marketing",
          items: getCategoryDocs("blocks/marketing"),
        },
        {
          title: "Application UI",
          items: getCategoryDocs("blocks/application-ui"),
        },
        {
          title: "E-commerce",
          items: getCategoryDocs("blocks/e-commerce"),
        },
      ],
    },
    {
      title: "Hooks",
      slug: "hooks",
      items: [
        {
          title: "Overview",
          href: "/hooks",
        },
        {
          title: "Browser",
          items: getCategoryDocs("hooks/browser"),
        },
        {
          title: "Elements",
          items: getCategoryDocs("hooks/elements"),
        },
        {
          title: "Sensors",
          items: getCategoryDocs("hooks/sensors"),
        },
        {
          title: "State",
          items: getCategoryDocs("hooks/state"),
        },
        {
          title: "Utilities",
          items: getCategoryDocs("hooks/utils"),
        },
      ],
    },
    {
      title: "Icons",
      slug: "icons",
      items: [
        {
          title: "Overview",
          href: "/icons",
        },
        ...getCategoryDocs("icons"),
      ],
    },
    {
      title: "Templates",
      slug: "templates",
      items: [
        {
          title: "Overview",
          href: "/templates",
        },
      ],
    },
  ],
};

const index = `
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import type { DocsConfig } from "@/types/docs";

export const docsConfig: DocsConfig = ${JSON.stringify(docsConfig)};
`;

rimraf.sync(path.join(process.cwd(), "src", "config", "docs-config.ts"));
fs.writeFileSync(path.join(process.cwd(), "src", "config", "docs-config.ts"), index);

console.log("\x1b[32m✓\x1b[0m Created docs-config file.");
