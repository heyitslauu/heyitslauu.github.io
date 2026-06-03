import { Award, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    issuedDate: "5/27/2026",
    expirationDate: "5/27/2029",
    credentialUrl:
      "https://www.credly.com/earner/earned/badge/dc749d2f-9309-4ab4-9607-d26d90525afa",
    skills: ["Cloud Computing", "Cloud Services", "AWS"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issuedDate: "10/23/2025",
    expirationDate: "",
    credentialUrl:
      "https://www.credly.com/earner/earned/badge/dc749d2f-9309-4ab4-9607-d26d90525afa",
    skills: ["Cybersecurity", "Thread Detection"],
  },
];

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Recent Certifications"
      title="Verified Cloud And Security Credentials"
      description="Recent certifications that reinforce practical AWS, cloud services, and cybersecurity foundations."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <Card key={certification.title}>
            <CardContent className="flex h-full items-start gap-3 p-6">
              <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <div>
                  <h3 className="font-semibold">{certification.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {certification.issuer} · Issued {certification.issuedDate}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Expires{" "}
                    {certification.expirationDate || "No expiration listed"}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {certification.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button asChild variant="ghost" size="sm" className="w-fit px-0">
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Verify ${certification.title}`}
                  >
                    Verify Credential
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
