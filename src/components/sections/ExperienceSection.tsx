import { Section } from "@/components/layout/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Full Stack Engineering",
    description:
      "Placeholder role summary for building production web apps with React, TypeScript, APIs, and scalable backend services.",
  },
  {
    title: "Cloud Engineering",
    description:
      "Placeholder role summary for AWS services, cloud architecture, observability, and secure deployment foundations.",
  },
  {
    title: "DevOps Engineering",
    description:
      "Placeholder role summary for CI/CD pipelines, Docker workflows, infrastructure as code, and release automation.",
  },
];

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Engineering Across Product, Platform, And Delivery"
      description="Replace these placeholders with role-specific highlights, measurable outcomes, and responsibilities."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {experiences.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>Placeholder timeline or company</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
