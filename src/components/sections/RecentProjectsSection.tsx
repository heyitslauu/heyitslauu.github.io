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
    name: "EMPOWERX HRIS",
    tags: ["Vue.js", "Laravel", "MySQL"],
    summary:
      "Full stack Human Resource Information System built to support core HR workflows through a structured backend, role-based operations, and production-ready deployment.",
    link: "https://empowerex.dswd5.com/",
    linkLabel: "Live System",
  },
  {
    name: "EMPOWERX Jobs",
    tags: ["API Gateway", "AWS Lambda", "DynamoDB"],
    summary:
      "AWS-native serverless job board that reduced application processing time from 11 days to 2 days through automated submission flows, scalable APIs, and a back-office review interface.",
    link: "https://jobs.dswd5.com/",
    linkLabel: "Live System",
  },
  {
    name: "Infrastructure Automation",
    tags: ["Jenkins", "YAML", "CloudFormation"],
    summary:
      "Infrastructure automation case study covering repeatable AWS provisioning, CI/CD orchestration, deployment reliability, and operational alerting for multi-service systems.",
    link: "/#/case-study/infrastructure-automation",
    linkLabel: "View Case Study",
  },
];

export function RecentProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Recent Projects"
      title="Production Systems And Infrastructure Work"
      description="Recent work spanning HR platforms, serverless job workflows, and AWS infrastructure automation."
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.linkLabel} for ${project.name}`}
                >
                  {project.linkLabel}
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
