import type { RouteObject } from "react-router-dom";
import { InfrastructureAutomationCaseStudy } from "@/app/InfrastructureAutomationCaseStudy";
import { Navbar } from "@/components/layout/Navbar";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { RecentProjectsSection } from "@/components/sections/RecentProjectsSection";
import { SocialLinksSection } from "@/components/sections/SocialLinksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <RecentProjectsSection />
        <TechStackSection />
        <CertificationsSection />
        <SocialLinksSection />
        <ContactSection />
      </main>
    </div>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PortfolioPage />,
  },
  {
    path: "/case-study/infrastructure-automation",
    element: <InfrastructureAutomationCaseStudy />,
  },
];
