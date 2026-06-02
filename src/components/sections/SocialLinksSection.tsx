import { Code2, Mail, SquareArrowOutUpRight, UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const links = [
  { label: "GitHub", icon: Code2, href: "#" },
  { label: "LinkedIn", icon: UserRound, href: "#" },
  { label: "Email", icon: Mail, href: "#contact" },
  { label: "Portfolio Source", icon: SquareArrowOutUpRight, href: "#" },
];

export function SocialLinksSection() {
  return (
    <Section
      id="social-links"
      eyebrow="Social Links"
      title="Profiles Ready For Your Real URLs"
      description="Icons are wired with lucide-react and can be replaced with real social, resume, or project links."
    >
      <Card>
        <CardContent className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map(({ label, icon: Icon, href }) => (
            <Button key={label} asChild variant="outline" className="justify-start">
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
