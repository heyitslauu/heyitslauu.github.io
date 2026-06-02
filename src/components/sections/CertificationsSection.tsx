import { Award } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  "AWS certification placeholder",
  "Cloud practitioner or associate credential placeholder",
  "DevOps, security, or infrastructure credential placeholder",
];

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Recent Certifications"
      title="Credentials To Support The Engineering Story"
      description="Add issued dates, verification links, and the certifications most relevant to cloud and DevOps roles."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {certifications.map((certification) => (
          <Card key={certification}>
            <CardContent className="flex items-start gap-3 p-6">
              <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">{certification}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Issuer and date placeholder
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
