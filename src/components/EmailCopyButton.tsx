import { useState } from "react";
import { Download, Mail } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

const emailAddress = "laurencecadag1@gmail.com";
const resumeHref = "/favicon_io/DevOps%20Resume.pdf";

type EmailCopyButtonProps = {
  label?: string;
  showIcon?: boolean;
  wrapperClassName?: string;
} & Omit<ButtonProps, "asChild" | "onClick" | "type">;

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

export function EmailCopyButton({
  label = "Email Me",
  showIcon = true,
  wrapperClassName,
  className,
  children,
  ...props
}: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyTextToClipboard(emailAddress);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <AlertDialog>
      <span className={cn("inline-flex", wrapperClassName)}>
        <AlertDialogTrigger asChild>
          <Button
            type="button"
            className={className}
            aria-label={`Open contact options for ${emailAddress}`}
            {...props}
          >
            {children ?? (
              <>
                {showIcon ? <Mail className="h-4 w-4" /> : null}
                {label}
              </>
            )}
          </Button>
        </AlertDialogTrigger>
      </span>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Download my resume</AlertDialogTitle>
          <AlertDialogDescription>
            Grab my resume or copy my email to start a conversation.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-3 rounded-lg border border-border bg-card/70 p-4 text-sm">
          <a
            href={resumeHref}
            download
            className="inline-flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 font-medium text-foreground transition-colors hover:bg-muted"
          >
            <span>Download Resume</span>
            <Download className="h-4 w-4 text-primary" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-between gap-3 rounded-md border border-border px-3 py-2 text-left font-medium text-foreground transition-colors hover:bg-muted"
            onClick={handleCopy}
          >
            <span className="truncate">{emailAddress}</span>
            <span className="shrink-0 text-xs text-primary">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction asChild>
            <a href={resumeHref} download>
              <Download className="h-4 w-4" />
              Download
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
