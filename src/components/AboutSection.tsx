import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.05, once: true });

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            About
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            About Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="line-elegant w-24 mx-auto mt-8 origin-center"
          />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-16">
          {/* Main About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 font-body text-muted-foreground leading-relaxed text-center"
          >
            <p>
              I've been working as a model and actor since 2021 in Denmark and have completed over 40 projects. I feel confident and natural in front of the camera.
            </p>
            <p>
              My experience includes commercial ads, short movies, lifestyle campaigns, fashion shoots, and magazine features, as well as promotional work for brands across various industries — including skincare and face products, sunglasses, eyewear, clothing, vehicles, apps, tourist attractions, hotels, and much more.
            </p>
          </motion.div>

          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-display text-3xl text-foreground mb-6">
              My Background
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              I'm originally Kurdish from Syria, but from 2010 to 2024 I lived in Denmark, where I obtained Danish citizenship. I'm currently based in the United Arab Emirates, Dubai Marina.
            </p>
          </motion.div>

          {/* Languages, Sports, Music Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl text-foreground mb-4">Languages</h3>
              <div className="line-elegant w-16 mx-auto mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Arabic, English, Danish and Kurdish.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl text-foreground mb-4">Sports</h3>
              <div className="line-elegant w-16 mx-auto mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                I'm a tennis and padel coach, and I also enjoy playing football, swimming, and going to the gym to stay in great shape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="font-display text-2xl text-foreground mb-4">Music</h3>
              <div className="line-elegant w-16 mx-auto mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                I play a bit of piano and ney (a Middle Eastern flute).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
