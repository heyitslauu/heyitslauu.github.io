import {
  CalendarClock,
  Database,
  MailCheck,
  MessagesSquare,
  Tags,
  Trash2,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "RAG Knowledge Base System",
    icon: Database,
    status: "Built",
    description:
      "A retrieval-based assistant that lets admins upload source materials, such as hotel information, and gives users grounded answers from the approved knowledge base.",
    tools: ["n8n", "OpenAI", "Pinecone", "Vector Search"],
    image: "/ai_automation/rag_workflow.png",
  },
  {
    title: "Meta/Facebook Messenger AI Assistant",
    icon: MessagesSquare,
    status: "Built",
    description:
      "A Messenger-based gym assistant that responds to customer FAQs with answers shaped around the client's actual services, policies, and business details.",
    tools: ["Messenger", "OpenAI", "Webhooks", "n8n"],
    image: "/ai_automation/messenger.png",
  },
  {
    title: "Credit Card Due Reminder",
    icon: CalendarClock,
    status: "Built",
    description:
      "A finance reminder workflow that finds credit card statement emails, logs due dates in Google Sheets, and creates calendar reminders three days early.",
    tools: ["Gmail", "Google Sheets", "Google Calendar", "n8n"],
    image: "/ai_automation/cc_due.png",
  },
  {
    title: "Email Labeler And Summarizer",
    icon: Tags,
    status: "Built",
    description:
      "An inbox assistant that watches new email, labels priority categories, summarizes useful messages, and sends quick alerts through Telegram or Discord.",
    tools: ["Gmail", "OpenAI", "Telegram", "Discord"],
    image: "/ai_automation/email_summary.png",
  },
  {
    title: "CRON Spam Email Cleanup",
    icon: Trash2,
    status: "Built",
    description:
      "A scheduled cleanup workflow that runs at midnight to remove recurring spam and noisy sender patterns, keeping the inbox easier to scan each morning.",
    tools: ["CRON", "Gmail", "n8n", "Automation"],
    image: "/ai_automation/cron_spam_delete.png",
  },
];

export function AiAutomationProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="AI Workflows And Automation Systems"
      description="Practical automations for knowledge retrieval, customer messaging, email operations, reminders, and recurring cleanup workflows."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(
          ({ title, icon: Icon, status, description, tools, image }) => (
          <Card key={title} className="flex flex-col">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="group aspect-video overflow-hidden rounded-t-lg border-b border-border bg-muted/30 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`View ${title} workflow image`}
                >
                  <img
                    src={image}
                    alt={`${title} workflow preview`}
                    className="h-full w-full object-contain p-2 transition duration-200 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-5xl">
                <AlertDialogHeader>
                  <AlertDialogTitle>{title}</AlertDialogTitle>
                  <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <div className="max-h-[70vh] overflow-auto rounded-lg border border-border bg-muted/20 p-2">
                  <img
                    src={image}
                    alt={`${title} workflow diagram`}
                    className="mx-auto h-auto w-full object-contain"
                  />
                </div>
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <CardHeader>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <CardTitle>{title}</CardTitle>
                <Badge variant="outline">{status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm leading-6 text-muted-foreground">
                {description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          ),
        )}
      </div>
    </Section>
  );
}
