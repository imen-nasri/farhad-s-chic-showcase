import { motion } from "framer-motion";

const measurements = [
  { label: "Height", value: "184 cm" },
  { label: "Weight", value: "87 kg" },
  { label: "Hair Color", value: "Gray" },
  { label: "Eye Color", value: "Brown" },
  { label: "Shoe Size", value: "EU 45" },
  { label: "T-Shirt Size", value: "XL" },
  { label: "Pants Size", value: "EU 36/32" },
];

const MeasurementsSection = () => {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Stats
          </p>
          <h2 className="font-display text-5xl lg:text-7xl font-light text-foreground">
            Measurements
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="line-elegant w-24 mx-auto mt-8 origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="space-y-0">
            {measurements.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex justify-between items-center py-4 border-b border-border"
              >
                <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
                  {item.label}
                </span>
                <span className="font-display text-xl text-foreground">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeasurementsSection;
