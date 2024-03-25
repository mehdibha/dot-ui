import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRightIcon, SearchIcon } from "lucide-react";
import { Mdx } from "@/components/mdx/mdx-remote";
import { TableOfContents } from "@/components/toc";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/utils/classes";
import { type Item, getDocFromSlug, getAllDocs } from "@/utils/docs";
import { truncateOnWord } from "@/utils/string";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const doc = await getDocFromSlug(params.slug);

  if (!doc) {
    return {};
  }

  return {
    title: doc.metadata.title,
    description: doc.metadata.description,
    // TODO add openGraph and twitter
  };
}
export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const allDocs = getAllDocs();
  return allDocs.map((doc) => ({ slug: doc.href.split("/").slice(1) }));
}

export default async function Page({ params }: PageProps) {
  const doc = await getDocFromSlug(params.slug);

  if (!doc) {
    notFound();
  }

  const { rawContent, metadata, categories, items } = doc;

  return (
    <main
      className={cn("relative pb-20 lg:gap-10", {
        "xl:grid xl:grid-cols-[1fr_220px]": !!doc.toc.items, // !!doc.toc
      })}
    >
      <div className="mx-auto w-full min-w-0 pt-6">
        {metadata.breadcrumbs.length > 1 && (
          <Breadcrumb className="mb-2">
            <BreadcrumbList>
              {metadata.breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  {index === metadata.breadcrumbs.length - 1 ? (
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )}
                  {index < metadata.breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRightIcon />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <h1 className="text-4xl font-bold">{metadata.title}</h1>
        <p className="mt-2 text-muted-foreground">{metadata.description}</p>
        {categories && categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <Button key={index} size="sm" variant="secondary" asChild>
                <Link href={category.href}>{category.label}</Link>
              </Button>
            ))}
          </div>
        )}
        <div className="mt-10 text-sm md:text-base">
          <Mdx source={rawContent} />
          {items && items.length > 0 && <DataGrid items={items} type={metadata.type} />}
        </div>
      </div>
      {doc.toc.items && ( // doc.toc
        <div className="hidden text-sm xl:block">
          <div className="sticky top-0">
            <ScrollArea className="h-screen pb-8">
              <div className="pb-16 pt-6">
                <TableOfContents toc={doc.toc} />
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  );
}

const DataGrid = ({ type, items }: { type: string; items: Item[] }) => {
  return (
    <div className="mt-6">
      <div className="relative">
        <Input className="full-w pl-12" placeholder={`Search ${items.length} ${type}`} />
        <SearchIcon
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transform text-muted-foreground"
        />
      </div>
      <div
        className={cn("mt-4 grid gap-4", {
          "grid-cols-3": type === "components" || type === "hooks",
          "grid-cols-4": type === "templates" || type === "blocks",
          "grid-cols-8": type === "icons",
        })}
      >
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.metadata.externalLink ?? item.href}
            target={item.metadata.externalLink ? "_blank" : undefined}
            className="group flex cursor-pointer flex-col rounded-md border border-border/20 bg-card/70 transition-colors duration-150 hover:border-border hover:bg-card"
          >
            {type !== "hooks" && (
              <div className="flex items-center justify-center rounded-sm border border-border/20 bg-background duration-150 group-hover:border-border/50">
                {item.metadata.video ? (
                  <video
                    src={item.metadata.video}
                    muted
                    loop
                    autoPlay
                    className="opacity-90 duration-150 group-hover:opacity-100"
                  />
                ) : item.metadata.thumbnail ? (
                  <ScrollArea
                    className={cn({
                      "aspect-video": type === "components",
                      "aspect-[9/11]": type === "templates" || type === "blocks",
                    })}
                  >
                    <img
                      src={item.metadata.thumbnail}
                      alt={item.metadata.title}
                      className="opacity-90 duration-150 group-hover:opacity-100"
                    />
                  </ScrollArea>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-card/50">
                    <p className="text-muted-foreground">No thumbnail</p>
                  </div>
                )}
              </div>
            )}
            <div className={cn("flex flex-1 flex-col p-4", {})}>
              <div className="flex-1">
                <p className="text-lg font-semibold">{item.metadata.title}</p>
                {item.metadata.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {truncateOnWord(item.metadata.description, 70)}
                  </p>
                )}
              </div>
              {item.metadata.keywords && (
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.metadata.keywords
                    .slice(0, item.metadata.keywords.length > 3 ? 2 : 3)
                    .map((keyword, index) => (
                      <Badge key={index} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  {item.metadata.keywords.length > 3 && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Badge variant="outline" className="text-muted-foreground">
                          +{item.metadata.keywords.length - 2} more
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="pl-6">
                        <ul className="list-disc">
                          {item.metadata.keywords.slice(2).map((keyword, index) => (
                            <li key={index}>{keyword}</li>
                          ))}
                        </ul>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
