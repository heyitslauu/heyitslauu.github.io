import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase text-primary">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-normal sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {children}
      <Separator className="mt-16 bg-border/70" />
    </section>
  );
}
