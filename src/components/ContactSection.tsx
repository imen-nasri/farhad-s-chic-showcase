import { Instagram, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@farhad.com",
      href: "mailto:contact@farhad.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@farhad.model",
      href: "https://instagram.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Paris, France",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Collaborons
            </p>
            <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground mb-8">
              Prenons
              <span className="block italic text-primary">Contact</span>
            </h2>

            <p className="font-body text-muted-foreground leading-relaxed max-w-md mb-12">
              Pour les demandes de collaboration, les réservations ou toute autre 
              information, n'hésitez pas à me contacter directement ou via mon agence.
            </p>

            {/* Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Booking Form */}
          <div className="bg-card p-8 lg:p-12 border border-border">
            <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-8">
              Demande de Réservation
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Type de Projet
                </label>
                <select className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer">
                  <option value="" className="bg-card">Sélectionnez une option</option>
                  <option value="editorial" className="bg-card">Editorial</option>
                  <option value="campaign" className="bg-card">Campagne Publicitaire</option>
                  <option value="runway" className="bg-card">Défilé</option>
                  <option value="other" className="bg-card">Autre</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground block mb-3">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Envoyer la Demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
