import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Lightbox from "@/components/Lightbox";

// Gallery imports - Formal
import formal1 from "@/assets/gallery/formal-1.jpg";
import formal2 from "@/assets/gallery/formal-2.jpg";
import formal3 from "@/assets/gallery/formal-3.jpg";

// Gallery imports - Portfolio (existing)
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";

// Gallery imports - Portraits
import portrait1 from "@/assets/gallery/portrait-1.jpg";
import portrait2 from "@/assets/gallery/portrait-2.jpg";

// Gallery imports - Lifestyle
import lifestyle1 from "@/assets/gallery/lifestyle-1.jpg";
import lifestyle2 from "@/assets/gallery/lifestyle-2.jpg";
import lifestyle3 from "@/assets/gallery/lifestyle-3.jpg";
import lifestyle4 from "@/assets/gallery/lifestyle-4.jpg";

// Gallery imports - Professional
import professional1 from "@/assets/gallery/professional-1.jpg";

type Category = "all" | "formal" | "lifestyle" | "portrait" | "professional";

interface GalleryItem {
  image: string;
  title: string;
  category: Category;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: true });

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "Tout" },
    { value: "formal", label: "Formel" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "portrait", label: "Portrait" },
    { value: "professional", label: "Professionnel" },
  ];

  const galleryItems: GalleryItem[] = [
    // Formal
    { image: portfolio1, title: "Soirée Élégante", category: "formal" },
    { image: portfolio2, title: "Bordeaux Classic", category: "formal" },
    { image: portfolio3, title: "Three Piece", category: "formal" },
    { image: portfolio4, title: "Editorial", category: "formal" },
    { image: portfolio5, title: "Casual Chic", category: "formal" },
    { image: portfolio6, title: "Urban Formal", category: "formal" },
    { image: portfolio7, title: "Détails", category: "formal" },
    { image: formal1, title: "Burgundy Style", category: "formal" },
    { image: formal2, title: "Dark Elegance", category: "formal" },
    { image: formal3, title: "Grey Sophistication", category: "formal" },
    // Portraits
    { image: portrait1, title: "Sourire Naturel", category: "portrait" },
    { image: portrait2, title: "Confiance", category: "portrait" },
    // Lifestyle
    { image: lifestyle1, title: "Moment Complice", category: "lifestyle" },
    { image: lifestyle2, title: "Urban Explorer", category: "lifestyle" },
    { image: lifestyle3, title: "Team Spirit", category: "lifestyle" },
    { image: lifestyle4, title: "Street Style", category: "lifestyle" },
    // Professional
    { image: professional1, title: "Leadership", category: "professional" },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image,
    title: item.title,
    category: item.category,
  }));

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <main ref={sectionRef} className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
          <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-body text-sm tracking-widest uppercase">Retour</span>
            </Link>
            <span className="font-display text-2xl tracking-wider">FARHAD</span>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
            >
              Collection Complète
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl lg:text-7xl font-light text-foreground mb-8"
            >
              Galerie
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="line-elegant w-24 mx-auto origin-center"
            />
          </div>
        </section>

        {/* Filters */}
        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`font-body text-sm tracking-widest uppercase px-6 py-3 border transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.image}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => openLightbox(index)}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
                    />

                    {/* Title */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredIndex === index ? 0 : 20,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-4 lg:p-6"
                    >
                      <h3 className="font-display text-lg lg:text-xl text-foreground">
                        {item.title}
                      </h3>
                    </motion.div>

                    {/* Click indicator */}
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-4 right-4 w-10 h-10 border border-primary flex items-center justify-center bg-background/50 backdrop-blur-sm"
                    >
                      <span className="font-body text-xs text-primary">+</span>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl lg:text-5xl font-light text-foreground mb-8"
            >
              Intéressé par une collaboration?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/#contact"
                className="inline-flex items-center gap-4 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
              >
                <span>Me Contacter</span>
                <motion.span
                  className="w-12 h-px bg-foreground group-hover:bg-primary"
                  whileHover={{ width: 80 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

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

export default Gallery;
