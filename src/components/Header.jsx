
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
    boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
    padding: isScrolled ? '0.75rem 0' : '1.5rem 0'
  };

  return (
    <header style={headerStyle}>
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#home" className="fs-4 fw-bold text-decoration-none">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex align-items-center">
          <ul className="d-flex align-items-center list-unstyled mb-0 gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-secondary text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.color = '#000'}
                  onMouseOut={(e) => e.target.style.color = ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="d-flex d-md-none align-items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="btn btn-link p-1 text-dark border-0"
          >
            {mobileMenuOpen ? (
              <span className="fs-4">✕</span>
            ) : (
              <span className="fs-4">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="d-md-none bg-white shadow-sm p-3">
          <ul className="list-unstyled mb-0">
            {navItems.map((item) => (
              <li key={item.href} className="mb-2">
                <a
                  href={item.href}
                  className="d-block py-2 text-secondary text-decoration-none"
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
