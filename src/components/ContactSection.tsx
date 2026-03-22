import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "farhadfarhadsaeed@gmail.com",
      href: "mailto:farhadfarhadsaeed@gmail.com",
    },
    {
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" className={props.className} fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.136.672 4.116 1.816 5.74L2.06 22l4.344-1.708A9.944 9.944 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm5.196 14.11c-.22.617-1.29 1.18-1.778 1.254-.488.076-1.11.108-1.79-.112-.412-.132-.94-.308-1.618-.604-2.842-1.242-4.698-4.12-4.838-4.312-.14-.192-1.144-1.524-1.144-2.908s.724-2.064.98-2.346c.258-.282.562-.352.748-.352.188 0 .374 0 .538.01.172.008.404-.066.632.482.232.558.788 1.926.858 2.066.07.14.116.302.024.49-.094.186-.14.302-.28.466-.14.164-.294.366-.42.49-.14.14-.286.29-.124.57.164.28.726 1.198 1.558 1.94 1.072.954 1.974 1.25 2.254 1.39.28.14.444.116.608-.07.164-.188.702-.82.89-1.102.188-.282.374-.234.632-.14.258.094 1.638.774 1.918.914.28.14.466.21.538.326.07.116.07.676-.15 1.294z"/>
        </svg>
      ),
      label2: "Instagram",
      value2: "@farhad.model93",
      href2: "https://instagram.com/farhad.model93",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            Contact
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="line-elegant w-24 mx-auto mt-8 origin-center"
          />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Email */}
            <motion.a
              href="mailto:farhadfarhadsaeed@gmail.com"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors">farhadfarhadsaeed@gmail.com</p>
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/farhad.model93"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Instagram</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors">@farhad.model93</p>
              </div>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://facebook.com/farhad.saeed"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Facebook</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors">Farhad Saeed</p>
              </div>
            </motion.a>

            {/* Denmark Phone */}
            <motion.a
              href="https://wa.me/4571455677"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Denmark / WhatsApp</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors">+45 71 45 56 77</p>
              </div>
            </motion.a>

            {/* UAE Phone */}
            <motion.a
              href="https://wa.me/971569446090"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-6 group"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">UAE / WhatsApp</p>
                <p className="font-body text-foreground group-hover:text-primary transition-colors">+971 56 944 6090</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Location</p>
                <p className="font-body text-foreground">Dubai Marina, UAE</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
