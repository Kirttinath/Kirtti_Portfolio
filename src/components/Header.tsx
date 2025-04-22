import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import KirttiLogo from "@/../public/letterk.png";

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
                    className="text-4xl font-bold relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative h-10 w-10">
                        {/* Original logo - visible when NOT hovered */}
                        <div
                            className={cn(
                                "absolute inset-0 transition-all duration-500",
                                isHovered ? "opacity-0" : "opacity-100"
                            )}
                        >
                            <img
                                src={KirttiLogo}
                                alt="Kirtti Logo"
                                className="w-10 h-10"
                            />
                        </div>

                        {/* Inverted logo - visible when hovered */}
                        <div
                            className={cn(
                                "absolute inset-0 transition-all duration-500",
                                isHovered ? "opacity-100" : "opacity-0",
                                "invert" // This inverts the colors of the logo
                            )}
                        >
                            <img
                                src={KirttiLogo}
                                alt="Kirtti Logo Inverted"
                                className="w-10 h-10"
                            />
                        </div>
                    </div>
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
