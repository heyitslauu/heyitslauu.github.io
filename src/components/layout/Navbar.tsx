import { Code2, FileText, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmailCopyButton } from "@/components/EmailCopyButton";

const portfolioNavItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const automationNavItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  variant?: "portfolio" | "automation";
};

export function Navbar({ variant = "portfolio" }: NavbarProps) {
  const isAutomation = variant === "automation";
  const navItems = isAutomation ? automationNavItems : portfolioNavItems;
  const scrollToSection = (href: string) => {
    const section = document.getElementById(href.replace("#", ""));

    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="container flex min-h-16 items-center justify-between gap-4">
        <button
          type="button"
          className="flex items-center gap-2 font-semibold"
          onClick={() => scrollToSection("#home")}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            <img
              src="/favicon_io/favicon-32x32.png"
              alt=""
              className="h-5 w-5"
              aria-hidden="true"
            />
          </span>
          <span className="hidden sm:inline">Laurence Cadag</span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="GitHub"
            onClick={() => scrollToSection("#social-links")}
          >
            <Code2 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="LinkedIn"
            onClick={() => scrollToSection("#social-links")}
          >
            <UserRound className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Email"
            onClick={() => scrollToSection("#contact")}
          >
            <Mail className="h-4 w-4" />
          </Button>
          {isAutomation ? (
            <Button asChild variant="outline" size="sm">
              <a href="/#/">Developer Profile</a>
            </Button>
          ) : (
            <>
              <Button asChild variant="outline" size="sm">
                <a href="/#/ai-automations">AI Automation</a>
              </Button>
              <EmailCopyButton
                label=""
                showIcon={false}
                variant="ghost"
                size="icon"
                aria-label="Resume"
              >
                <FileText className="h-4 w-4" />
              </EmailCopyButton>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
