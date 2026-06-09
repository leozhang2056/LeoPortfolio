import Link from "next/link";
import { ExternalLink, Link2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/leozhang2056"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/leo-zhang-305626280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Link2 className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:leozhang2056@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Leo Zhang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
