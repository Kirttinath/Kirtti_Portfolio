
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="bg-muted py-8 border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background/0 dark:from-primary/10 dark:to-background/0 opacity-40 transition-colors duration-500"></div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground transition-colors duration-300">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#home"
              className="p-2 rounded-full bg-background border flex items-center justify-center transition-all duration-300 hover:bg-muted hover:border-primary/20 relative overflow-hidden group"
              aria-label="Back to top"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-background opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <ArrowUp className="h-4 w-4 relative z-10" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
