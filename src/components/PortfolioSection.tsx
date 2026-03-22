import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import lifestyle5 from "@/assets/gallery/lifestyle-5.jpg";
import lifestyle6 from "@/assets/gallery/lifestyle-6.jpg";
import lifestyle7 from "@/assets/gallery/lifestyle-7.jpg";
import epos3 from "@/assets/gallery/epos-3.jpg";
import Lightbox from "./Lightbox";

type FilterCategory = "all" | "formal" | "lifestyle" | "advertisement";

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  filter: FilterCategory;
}

const portfolioItems: PortfolioItem[] = [
  { image: portfolio1, title: "Soirée Élégante", category: "Black Tie", filter: "formal" },
  { image: portfolio2, title: "Bordeaux Classic", category: "Business Style", filter: "formal" },
  { image: portfolio4, title: "Editorial", category: "Fashion Week", filter: "formal" },
  { image: portfolio5, title: "Casual Chic", category: "Lifestyle", filter: "lifestyle" },
  { image: portfolio6, title: "Urban Formal", category: "City Style", filter: "formal" },
  { image: portfolio7, title: "Détails", category: "Artisanat", filter: "formal" },
  { image: lifestyle5, title: "Vintage Style", category: "Lifestyle", filter: "lifestyle" },
  { image: lifestyle7, title: "Urban Edge", category: "Lifestyle", filter: "lifestyle" },
  { image: epos3, title: "Epos Headset", category: "Advertisement", filter: "advertisement" },
  { image: lifestyle6, title: "Golden Hour", category: "Lifestyle", filter: "lifestyle" },
];

const filters: { value: FilterCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "formal", label: "Formal" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "advertisement", label: "Ads" },
];

// Mobile swipeable carousel — cute modern version
const MobileCarousel = ({
  items,
  onOpenLightbox,
}: {
  items: PortfolioItem[];
  onOpenLightbox: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      setDirection(clamped > currentIndex ? 1 : -1);
      setCurrentIndex(clamped);
    },
    [items.length, currentIndex]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

  const paginate = (newDirection: number) => {
    const next = currentIndex + newDirection;
    if (next >= 0 && next < items.length) {
      setDirection(newDirection);
      setCurrentIndex(next);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
  };

  return (
    <div className="space-y-4">
      {/* Main image card */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-card">
        <div
          className="relative aspect-[3/4] overflow-hidden cursor-pointer"
          onClick={() => onOpenLightbox(currentIndex)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={items[currentIndex]?.image}
              src={items[currentIndex]?.image}
              alt={items[currentIndex]?.title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 w-full h-full object-cover"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
            />
          </AnimatePresence>

          {/* Soft gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/10 pointer-events-none" />

          {/* Title overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
            >
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary/90 mb-1.5">
                {items[currentIndex]?.category}
              </p>
              <h3 className="font-display text-xl text-foreground">
                {items[currentIndex]?.title}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Cute pill counter */}
          <div className="absolute top-3 right-3 bg-background/70 backdrop-blur-md rounded-full px-3 py-1 shadow-sm">
            <span className="font-body text-[11px] text-foreground/80 font-medium">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          {/* Soft round nav arrows */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md shadow-sm flex items-center justify-center active:scale-90 transition-transform"
            >
              <ChevronLeft className="w-4 h-4 text-foreground/80" />
            </button>
          )}
          {currentIndex < items.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 backdrop-blur-md shadow-sm flex items-center justify-center active:scale-90 transition-transform"
            >
              <ChevronRight className="w-4 h-4 text-foreground/80" />
            </button>
          )}
        </div>
      </div>

      {/* Thumbnail strip — rounded & cute */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide px-1">
        {items.map((item, index) => (
          <motion.button
            key={item.image}
            onClick={() => goTo(index)}
            whileTap={{ scale: 0.92 }}
            className={`flex-shrink-0 w-14 h-[70px] rounded-xl overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2 ring-offset-card opacity-100 shadow-md"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>

      {/* Dot indicators — cute pills */}
      <div className="flex justify-center gap-1.5">
        {items.map((_, index) => (
          <button key={index} onClick={() => goTo(index)}>
            <motion.div
              animate={{
                width: index === currentIndex ? 20 : 6,
                backgroundColor: index === currentIndex
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted-foreground) / 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="h-1.5 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const sectionRef = useRef<HTMLElement>(null);

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.filter === activeFilter);

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
      <section ref={sectionRef} id="portfolio" className="py-16 md:py-24 lg:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-8 md:mb-16 lg:mb-24"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-foreground">
              Portfolio
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="line-elegant w-24 mx-auto mt-6 md:mt-8 origin-center"
            />
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                whileTap={{ scale: 0.95 }}
                className={`font-body text-[11px] md:text-xs tracking-widest uppercase px-4 md:px-6 py-2.5 md:py-3 rounded-full md:rounded-none transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 md:bg-transparent text-muted-foreground md:border md:border-border hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile: Carousel | Desktop: Grid */}
          <div className="md:hidden">
            <MobileCarousel items={filteredItems} onOpenLightbox={openLightbox} />
          </div>

          <motion.div
            layout
            className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8"
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

                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                  />

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

                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-4 border border-primary/30"
                  />

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
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-4 font-body text-sm tracking-widest uppercase text-foreground hover:text-primary transition-colors group"
            >
              <span>View Full Gallery</span>
              <motion.span
                className="w-12 h-px bg-foreground group-hover:bg-primary"
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>

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
