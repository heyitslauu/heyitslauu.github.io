import {
  ArrowRight,
  Bot,
  Cable,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmailCopyButton } from "@/components/EmailCopyButton";

const strengths = [
  { icon: Workflow, label: "AI Workflow Design" },
  { icon: Bot, label: "Assistants And Agents" },
  { icon: Cable, label: "Automation Integrations" },
];

export function AiAutomationHeroSection() {
  return (
    <section id="home" className="container scroll-mt-24 py-20 sm:py-28">
      <div className="max-w-4xl">
        <Badge
          variant="outline"
          className="mb-6 border-primary/40 text-primary"
        >
          AI Workflows / Automation Systems / n8n / OpenAI Integrations
        </Badge>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-normal text-foreground sm:text-5xl lg:text-6xl">
          AI & Automation Specialist
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Building practical AI workflows, automation systems, and integrations
          using n8n, OpenAI, webhooks, and modern automation tools.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">
              Connect With Me
              <MessageSquareText className="h-4 w-4" />
            </a>
          </Button>
          <EmailCopyButton
            label="Copy Email"
            variant="ghost"
            size="lg"
            showIcon={false}
          />
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
