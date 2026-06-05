import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import { EmailCopyButton } from "@/components/EmailCopyButton";

type ContactSectionProps = {
  title?: string;
  description?: string;
  body?: string;
};

export function ContactSection({
  title = "Open To Full Stack, Cloud, And DevOps Opportunities",
  description = "Have a role, project, or technical challenge in mind? I am open to conversations around full stack engineering, cloud infrastructure, DevOps automation, and practical AI workflows.",
  body = "Send a quick note about what you are building, the kind of help you need, or the role you are hiring for. I will respond with next steps and availability.",
}: ContactSectionProps) {
  return (
    <Section
      id="contact"
      eyebrow="Contact Me"
      title={title}
      description={description}
    >
      <Card className="bg-card/80">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {body}
            </p>
          </div>
          <EmailCopyButton
            size="lg"
            className="w-full md:w-auto"
            wrapperClassName="w-full md:w-auto"
          />
        </CardContent>
      </Card>
    </Section>
  );
}
