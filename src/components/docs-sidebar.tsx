"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/utils/classes";
import type { Category as TCategory, SidebarNavItems } from "@/types/nav";

export interface DocsSidebarProps {
  items: SidebarNavItems;
}

export function DocsSidebar({ items }: DocsSidebarProps) {
  const pathname = usePathname();

  return items.length > 0 ? (
    <div className="w-full space-y-4 pb-10 pt-6 text-sm">
      {items.map((item, index) => (
        <Category
          key={index}
          title={item.title}
          items={item.items}
          slug={item.slug}
          pathname={pathname}
        />
      ))}
    </div>
  ) : null;
}

interface CategoryProps extends TCategory {
  pathname: string;
}

const Category = ({ title, slug, items, pathname }: CategoryProps) => {
  const [open, setOpen] = React.useState(pathname.startsWith(`/${slug}`));

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center space-x-2 [&[data-state=open]>svg]:rotate-90">
        <ChevronRightIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
        <h4 className="rounded-md text-sm font-semibold">{title}</h4>
      </CollapsibleTrigger>
      <CollapsibleContent asChild className="space-y-2 pt-2">
        <ul>
          {items.map((item, index) => {
            if ("href" in item && item.href) {
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group ml-2 block border-l border-muted pl-4 text-muted-foreground",
                      {
                        "border-foreground font-medium text-foreground":
                          pathname === item.href,
                      }
                    )}
                  >
                    <span className="block duration-100 group-hover:translate-x-0.5">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            }
            if ("items" in item && item.items.length > 0) {
              return (
                <li key={index} className="ml-2 space-y-2">
                  <h3 className="category pl-4 font-mono text-xs tracking-widest text-muted-foreground">
                    {item.title}
                  </h3>
                  <ul className="list-none">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "group block border-l border-muted py-1 pl-4 text-muted-foreground transition-colors hover:text-foreground",
                            {
                              "border-foreground font-medium text-foreground":
                                pathname === subItem.href,
                            }
                          )}
                        >
                          <span className="block transition-transform duration-100 group-hover:translate-x-0.5">
                            {subItem.title}
                            {subItem.label && (
                              <span className="ml-2 rounded-md bg-gradient px-1.5 py-0.5 text-xs leading-none text-black">
                                {subItem.label}
                              </span>
                            )}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};
