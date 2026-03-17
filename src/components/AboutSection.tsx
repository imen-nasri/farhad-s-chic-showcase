import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useScrollAnimation";

const StatCounter = ({ value, label, delay, isInView }: { value: string; label: string; delay: number; isInView: boolean }) => {
  const numericValue = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numericValue, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-display text-3xl lg:text-4xl text-foreground">
        {count}{suffix}
      </div>
      <div className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
        {label}
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.05, once: true });

  const stats = [
    { value: "185", label: "cm" },
    { value: "10+", label: "Years" },
    { value: "50+", label: "Campaigns" },
    { value: "3", label: "Continents" },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Content */}
          <div className="lg:pl-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4"
            >
              About
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl lg:text-6xl font-light text-foreground mb-8"
            >
              The Art of
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="block italic text-primary"
              >
                Presence
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-muted-foreground font-body leading-relaxed"
            >
              <p>
                I embody contemporary elegance with a magnetic presence 
                that goes beyond the boundaries of traditional fashion. Based in 
                Dubai, I have built a distinctive style showcased on some of the 
                world's most prestigious runways.
              </p>
              <p>
                With over a decade of experience in the fashion industry, I have 
                collaborated with iconic fashion houses and global platforms—from 
                Vogue editorials to international campaigns.
              </p>
            </motion.div>

            {/* Stats with counter animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 mt-12 pt-12 border-t border-border"
            >
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  delay={0.6 + index * 0.1}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
