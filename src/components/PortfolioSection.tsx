import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import Lightbox from "./Lightbox";

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.05, once: true });

  const portfolioItems = [
    {
      image: portfolio1,
      title: "Soirée Élégante",
      category: "Black Tie",
    },
    {
      image: portfolio2,
      title: "Bordeaux Classic",
      category: "Business Style",
    },
    {
      image: portfolio4,
      title: "Editorial",
      category: "Fashion Week",
    },
    {
      image: portfolio5,
      title: "Casual Chic",
      category: "Lifestyle",
    },
    {
      image: portfolio6,
      title: "Urban Formal",
      category: "City Style",
    },
    {
      image: portfolio7,
      title: "Détails",
      category: "Artisanat",
    },
  ];

  const lightboxImages = portfolioItems.map((item) => ({
    src: item.image,
    title: item.title,
    category: item.category,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <section ref={sectionRef} id="portfolio" className="py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 lg:mb-24"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Travaux
            </p>
            <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
              Portfolio
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="line-elegant w-24 mx-auto mt-8 origin-center"
            />
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.4 : 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                </div>

                {/* Overlay */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                />

                {/* Content */}
                <motion.div
                  animate={{
                    y: hoveredIndex === index ? 0 : 20,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground">
                    {item.title}
                  </h3>
                </motion.div>

                {/* Border Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-4 border border-primary/30"
                />

                {/* Click indicator */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-8 right-8 w-12 h-12 border border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm"
                >
                  <span className="font-body text-xs text-primary">+</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-4 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              <span>Voir Galerie Complète</span>
              <motion.span
                className="w-12 h-px bg-foreground group-hover:bg-primary"
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </>
  );
};

export default PortfolioSection;
