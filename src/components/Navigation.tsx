import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Photos" },
    { href: "#acting", label: "Acting" },
    { href: "#advertisements", label: "Ads" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl lg:text-3xl tracking-widest text-foreground hover:text-primary transition-colors"
        >
          FARHAD
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-body text-xs tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/gallery"
            className="nav-link font-body text-xs tracking-wider uppercase"
          >
            Gallery
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/gallery"
            className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
