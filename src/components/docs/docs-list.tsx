import Link from "next/link";
import { getDocTypeFromSlug } from "@/utils/docs";
import { Button } from "@/lib/components/core/default/button";
import { cn } from "@/lib/utils/classes";
import { getDocs } from "@/server/docs";
import { DocCard } from "./doc-card";

export interface DocsListProps {
  name: string;
  limit?: number;
  href?: string;
  className?: string;
}

export const DocsList = ({ name, href, limit, className }: DocsListProps) => {
  const docs = getDocs(name);

  const type = getDocTypeFromSlug(name);
  const hasMore = limit ? docs.length > limit : false;

  return (
    <div>
      <div
        className={cn(
          "grid grid-cols-4 gap-4",
          {
            "grid-cols-3": type === "component" || type === "hook",
            "grid-cols-4": type === "block" || type === "template",
          },
          className
        )}
      >
        {docs.slice(0, limit).map((doc, index) => (
          <DocCard key={index} doc={doc} />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-end">
          <Button size="sm" variant="link" className="mt-4 block">
            <Link href={href ?? `/${name}`}>Explore more</Link>
          </Button>
        </div>
      )}
    </div>
  );
};
