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
    tags: ["VueJS", "Laravel", "MySQL"],
    summary:
      "A full stack Human Resource Information System designed to manage core HR workflows through a structured backend and production-ready deployment setup. ",
    link: "https://empowerex.dswd5.com/",
  },
  {
    name: "EMPOWERX Jobs",
    tags: ["API Gateway", "AWS Lambda", "AWS DynamoDB"],
    summary:
      "Serverless job board that reduces application processing time from 11 days to 2 days. Features job posting, mass application submissions, and a back-office interface for candidate evaluation.",
    link: "https://jobs.dswd5.com/",
  },
  {
    name: "Infrastructure Automation",
    tags: ["Jenkins", "YAML", "Cloudformation"],
    summary:
      "Placeholder for repeatable infrastructure, alerts, and reliability improvements.",
    link: "",
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open project link for ${project.name}`}
                >
                  Project Link:
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
