import { Navbar } from "@/components/layout/Navbar";
import { AiAutomationHeroSection } from "@/components/sections/AiAutomationHeroSection";
import { AiAutomationProjectsSection } from "@/components/sections/AiAutomationProjectsSection";
import { AiAutomationToolsSection } from "@/components/sections/AiAutomationToolsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialLinksSection } from "@/components/sections/SocialLinksSection";

export function AiAutomationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar variant="automation" />
      <main>
        <AiAutomationHeroSection />
        <AiAutomationProjectsSection />
        <AiAutomationToolsSection />
        <SocialLinksSection />
        <ContactSection
          title="Interested In AI Workflows Or Automation Ideas?"
          description="Let's connect around practical automations, AI assistants, workflow integrations, and productivity systems."
          body="Send a quick note about the workflow, tool, or automation idea you have in mind. I can help think through useful next steps and implementation paths."
        />
      </main>
    </div>
  );
}
