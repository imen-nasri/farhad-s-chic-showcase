import { motion } from "framer-motion";

const actingVideos = [
  {
    title: "Zodiac Documentary",
    url: "https://www.youtube.com/embed/LXPSCdN18Zo",
  },
  {
    title: "Pichen – Short Movie",
    url: "https://www.youtube.com/embed/8W1eb2KJ_e4",
  },
];

const ActingSection = () => {
  return (
    <section id="acting" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Showreel
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-light text-foreground">
            Acting
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="line-elegant w-24 mx-auto mt-8 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {actingVideos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="aspect-video overflow-hidden border border-border">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="font-display text-xl text-foreground mt-4 text-center">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActingSection;
