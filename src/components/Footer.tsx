
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-8 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#home"
              className="p-2 rounded-full bg-background border flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
