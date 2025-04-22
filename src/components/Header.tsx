import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-4xl font-bold relative group perspective-1000 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={cn(
            "inline-block transition-all duration-700 transform origin-center",
            isHovered ? "rotate-y-180 scale-110" : "",
            "font-serif font-extrabold tracking-wider italic",
            "bg-gradient-to-r from-[#6E59A5] via-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent",
            "font-['Playfair_Display'] text-[2.5rem] leading-none"
          )}>
            K
          </span>
          <div className={cn(
            "absolute inset-0 transition-all duration-500",
            isHovered ? "opacity-100" : "opacity-0",
            "font-serif font-extrabold tracking-wider italic",
            "bg-gradient-to-r from-[#D6BCFA] via-[#E5DEFF] to-[#D3E4FD]",
            "bg-clip-text text-transparent animate-pulse",
            "font-['Playfair_Display'] text-[2.5rem] leading-none"
          )}>
            K
          </div>
          <span className={cn(
            "absolute bottom-0 left-0 w-full h-1 transform origin-left transition-all duration-500",
            "bg-gradient-to-r from-[#6E59A5] via-[#9b87f5] to-[#7E69AB]",
            isHovered ? "scale-x-100" : "scale-x-0"
          )}></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md p-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
