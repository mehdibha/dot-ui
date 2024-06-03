import React from "react";
import Link from "next/link";
import { getGitHubStars } from "@/utils/github";
import { cn } from "@/lib/utils/classes";
import { siteConfig } from "@/config";
import { GitHubIcon } from "../icons";

interface CallToActionProps {
  className?: string;
}

export const CallToAction = async (props: CallToActionProps) => {
  const { className } = props;
  const stars = (await getGitHubStars()) ?? 99999;

  return (
    <section className={cn("mx-auto max-w-2xl px-6 text-center", className)}>
      <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-bold tracking-tighter lg:text-5xl">
        Proudly open-source
      </h2>
      <p className="mt-4 text-lg text-fg-muted">
        Our source code is available on GitHub - feel free to read, review, or contribute
        to it however you want!
      </p>
      <div className="mt-10 flex justify-center space-x-2">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="group flex"
        >
          <div className="text-secondary-foreground flex h-10 items-center justify-center space-x-2 rounded-md bg-bg-muted px-4 group-hover:bg-bg-muted/80">
            <GitHubIcon size={18} />
            <span>Star us on GitHub</span>
          </div>
          <div className="flex items-center">
            <div className="border-secondary group-hover:border-secondary/80 h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-y-transparent group-hover:border-y-transparent" />
            <div className="text-secondary-foreground flex h-10 items-center rounded-md bg-bg-muted px-4 font-medium group-hover:bg-bg-muted/80">
              {stars}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
