import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Big Name */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 md:mb-6"
            >
              Model & Actor
            </motion.p>
            <h1 className="font-display text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-light leading-[0.85] tracking-wide text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="block"
              >
                FAR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="block"
              >
                HAD
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="block italic text-primary text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] mt-1 md:mt-2"
              >
                Saeed
              </motion.span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="line-elegant w-28 md:w-40 mt-4 md:mt-8 origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="font-body text-sm text-muted-foreground tracking-widest uppercase mt-6"
            >
              Dubai · Copenhagen · International
            </motion.p>
          </motion.div>

          {/* Right - Presentation Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full"
          >
            <div className="aspect-video w-full overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/BXRvOZPtPbk"
                title="Presentation Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-4 text-center">
              Presentation Video · December 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
