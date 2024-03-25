import { DocsSidebar } from "@/components/docs-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs-config";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 ">
        <aside className="z-30 hidden md:sticky md:top-0 md:block">
          <ScrollArea className="h-screen pb-8 pr-2">
            <DocsSidebar items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
