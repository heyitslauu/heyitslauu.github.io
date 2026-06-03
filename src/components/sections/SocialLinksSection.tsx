import { Code2, Mail, SquareArrowOutUpRight, UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const links = [
  { label: "GitHub", icon: Code2, href: "https://github.com/heyitslauu" },
  {
    label: "LinkedIn",
    icon: UserRound,
    href: "https://www.linkedin.com/in/laurencecadag/",
  },
  { label: "Email", icon: Mail, href: "#contact" },
];

export function SocialLinksSection() {
  return (
    <Section
      id="social-links"
      eyebrow="Social Links"
      title="Connect And Review My Work"
      description="Find my code, professional profile, and contact path for collaboration or opportunities."
    >
      <Card>
        <CardContent className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ label, icon: Icon, href }) => (
            <Button
              key={label}
              asChild
              variant="outline"
              className="justify-start"
            >
              <a href={href}>
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </Button>
          ))}
        </CardContent>
      </Card>
    </Section>
  );
}
