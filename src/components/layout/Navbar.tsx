import { Code2, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <nav className="container flex min-h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
            <img
              src="/favicon_io/favicon-32x32.png"
              alt=""
              className="h-5 w-5"
              aria-hidden="true"
            />
          </span>
          <span className="hidden sm:inline">Laurence Cadag</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub">
            <a href="#social-links">
              <Code2 className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
            <a href="#social-links">
              <UserRound className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Email">
            <a href="#contact">
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
