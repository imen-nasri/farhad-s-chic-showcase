import { motion } from "framer-motion";

const adVideos = [
  { title: "Meny", url: "https://www.youtube.com/embed/24JW-LhtO_c" },
  { title: "Balder", url: "https://www.youtube.com/embed/t6CgJ95-6yg" },
  { title: "Pelican Self Storage", url: "https://www.youtube.com/embed/k8-M5Gllcn8" },
  { title: "Green Mobility", url: "https://www.youtube.com/embed/-C50sanFDE8" },
  { title: "Regional Election", url: "https://www.youtube.com/embed/BXRvOZPtPbk" },
  { title: "Epos Headset", url: "https://www.youtube.com/embed/J90wQA3B02Y" },
  { title: "Influenzavaccination", url: "https://www.youtube.com/embed/6bOlCsoygNo" },
  { title: "Molslinjen", url: "https://www.youtube.com/embed/cMM6qNANRt8" },
];

const AdvertisementsSection = () => {
  return (
    <section id="advertisements" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Campaigns
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            Advertisements
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="line-elegant w-24 mx-auto mt-8 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {adVideos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              <h3 className="font-display text-lg text-foreground mt-3 text-center">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvertisementsSection;
