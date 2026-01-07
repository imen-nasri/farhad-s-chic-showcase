import aboutImage from "@/assets/about-farhad.jpg";

const AboutSection = () => {
  const stats = [
    { value: "185", label: "cm" },
    { value: "10+", label: "Années" },
    { value: "50+", label: "Campagnes" },
    { value: "3", label: "Continents" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="overflow-hidden">
              <img
                src={aboutImage}
                alt="Farhad - Portrait"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              À Propos
            </p>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-foreground mb-8">
              L'Art de la
              <span className="block italic text-primary">Présence</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Farhad incarne l'élégance contemporaine avec une présence magnétique 
                qui transcende les frontières de la mode traditionnelle. Originaire 
                de Paris, il a su imposer son style unique sur les podiums les plus 
                prestigieux du monde.
              </p>
              <p>
                Avec plus d'une décennie d'expérience, il a collaboré avec les 
                maisons de couture les plus iconiques, des éditoriaux de Vogue aux 
                campagnes internationales pour Dior, Gucci et Armani.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-12 pt-12 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl lg:text-4xl text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
