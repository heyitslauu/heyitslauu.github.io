import { Code2, Container, Database, GitBranch, Settings } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stackGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    icon: Database,
    items: ["Node.js", "NestJS", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "Cloud",
    icon: Settings,
    items: ["AWS", "IAM", "S3", "ECS", "CloudWatch"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    items: ["CI/CD", "GitHub Actions", "Docker", "IaC", "Linux"],
  },
  {
    title: "Containers",
    icon: Container,
    items: ["Docker Compose", "Images", "Registries", "Runtime Config"],
  },
];

export function TechStackSection() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Tech Stack"
      title="Tools For Shipping Maintainable Systems"
      description="Swap these placeholder technologies for your strongest production tools."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {stackGroups.map(({ title, icon: Icon, items }) => (
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
