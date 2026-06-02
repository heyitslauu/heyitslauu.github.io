import { ArrowRight, Server, ShieldCheck, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const strengths = [
  { icon: Server, label: "Full Stack Systems" },
  { icon: Workflow, label: "CI/CD Automation" },
  { icon: ShieldCheck, label: "Cloud Reliability" },
];

export function HeroSection() {
  return (
    <section id="home" className="container scroll-mt-24 py-20 sm:py-28">
      <div className="max-w-4xl">
        <Badge
          variant="outline"
          className="mb-6 border-primary/40 text-primary"
        >
          Full Stack Software Engineer / Cloud Engineer / DevOps Engineer
        </Badge>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
          Backend-focused software engineer building scalable applications and
          cloud infrastructure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          I build reliable digital products with a backend-first mindset,
          combining application development with practical cloud infrastructure.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {strengths.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border bg-card/70 p-4"
            >
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
