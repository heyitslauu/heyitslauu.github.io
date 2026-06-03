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
    title: "DevOps Engineer",
    timeline: "June 2025 – Present",
    description:
      "Build and maintain AWS infrastructure for multi-service deployments. Design CI/CD pipelines with Jenkins, manage ECS clusters, and implement CloudFormation stacks for scalable cloud architecture.",
  },
  {
    title: "Full Stack Engineer",
    timeline: "April 2022 – June 2025",
    description:
      "Develop production-ready backend APIs and full stack applications using Laravel and VueJS. Built EMPOWERX HRIS and Jobs platforms serving real-world users with focus on reliability and maintainability.",
  },
  {
    title: "Technical Instructor (Computer Science)",
    timeline: "April 2022 – May 2023",
    description:
      "Taught programming, web development, and database courses to undergraduate students. Mentored capstone projects while simultaneously building production software systems.",
  },
];

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Engineering Across Product, Platform, And Delivery"
      description="Hands-on experience building AWS infrastructure, production web platforms, and technical learning programs."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {experiences.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="opacity-80">
                {item.timeline}
              </CardDescription>
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
