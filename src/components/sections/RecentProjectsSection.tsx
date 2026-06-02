import { ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    name: "Cloud-Native Web Platform",
    tags: ["React", "NestJS", "AWS"],
    summary:
      "Placeholder for a deployed full stack system with authentication, APIs, and cloud hosting.",
  },
  {
    name: "CI/CD Delivery Pipeline",
    tags: ["GitHub Actions", "Docker", "IaC"],
    summary:
      "Placeholder for automated builds, tests, containerization, and environment promotion.",
  },
  {
    name: "Infrastructure Automation",
    tags: ["AWS", "Terraform", "Monitoring"],
    summary:
      "Placeholder for repeatable infrastructure, alerts, and reliability improvements.",
  },
];

export function RecentProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Recent Projects"
      title="Selected Work Ready For Real Case Studies"
      description="Use these cards as a scaffold for project outcomes, technical decisions, and links."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost" size="sm">
                <a href="#social-links">
                  Project Link
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
