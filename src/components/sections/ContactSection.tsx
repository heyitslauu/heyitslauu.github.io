import { Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact Me"
      title="Open To Full Stack, Cloud, And DevOps Opportunities"
      description="Replace this placeholder call-to-action with a direct message for recruiters, collaborators, or clients."
    >
      <Card className="bg-card/80">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Placeholder contact copy for availability, preferred roles, and
              the best way to start a conversation.
            </p>
          </div>
          <Button asChild size="lg" className="w-full md:w-auto">
            <a href="mailto:hello@example.com">
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
