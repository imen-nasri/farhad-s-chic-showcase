import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Haute Couture",
      category: "Editorial",
    },
    {
      image: portfolio2,
      title: "Urban Style",
      category: "Street Fashion",
    },
    {
      image: portfolio3,
      title: "Beauty",
      category: "Campaign",
    },
    {
      image: portfolio4,
      title: "Evening Wear",
      category: "Luxury",
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Travaux
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            Portfolio
          </h2>
          <div className="line-elegant w-24 mx-auto mt-8" />
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  } ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-40"
                      : "opacity-100"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Content */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-3xl lg:text-4xl text-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Border Effect */}
              <div
                className={`absolute inset-4 border border-primary/30 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
          >
            <span>Voir Plus</span>
            <span className="w-12 h-px bg-foreground group-hover:bg-primary group-hover:w-20 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
