import { Bot, Braces, Cable, Database, MessagesSquare } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const toolGroups = [
  {
    title: "AI Platforms",
    icon: Bot,
    items: ["OpenAI", "ChatGPT", "Pinecone"],
  },
  {
    title: "Automation",
    icon: Cable,
    items: ["n8n", "Webhooks", "REST APIs", "Postman"],
  },
  {
    title: "Channels",
    icon: MessagesSquare,
    items: ["Telegram", "Discord", "Gmail", "Google Calendar", "Messenger"],
  },
  {
    title: "Data And Runtime",
    icon: Database,
    items: ["Google Sheets", "JSON", "JavaScript", "Docker"],
  },
  {
    title: "Integration Patterns",
    icon: Braces,
    items: ["API Triggers", "CRON Jobs", "Data Mapping", "Prompt Workflows"],
  },
];

export function AiAutomationToolsSection() {
  return (
    <Section
      id="tools"
      eyebrow="Tools"
      title="Practical Automation Tooling"
      description="AI, workflow, API, and integration tools used to prototype useful automations and business productivity systems."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {toolGroups.map(({ title, icon: Icon, items }) => (
          <Card key={title}>
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
