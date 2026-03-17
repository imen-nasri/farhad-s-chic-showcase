import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a
            href="#home"
            className="font-display text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
          >
            FARHAD SAEED
          </a>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/farhad.model93"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com/farhad.saeed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <p className="font-body text-xs tracking-widest text-muted-foreground">
            © 2026 Farhad Saeed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
