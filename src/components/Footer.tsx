import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
          >
            FARHAD
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-xs tracking-widest text-muted-foreground">
            © 2026 FARHAD. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
