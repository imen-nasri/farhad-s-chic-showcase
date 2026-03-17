import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/4571455677"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958C9.72 30.876 12.742 32 16.004 32 24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.335 22.594c-.39 1.1-1.932 2.014-3.174 2.28-.852.18-1.964.324-5.71-1.228-4.8-1.986-7.886-6.857-8.126-7.174-.23-.318-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.002.908.016.292.016.682-.11 1.068.814.39.94 1.33 3.25 1.446 3.486.118.236.196.512.04.828-.158.316-.236.512-.472.79-.236.276-.496.618-.71.828-.236.236-.482.49-.208.962.276.472 1.224 2.02 2.63 3.272 1.808 1.612 3.332 2.11 3.804 2.348.472.236.748.196 1.024-.118.276-.316 1.184-1.382 1.502-1.858.316-.478.632-.394 1.068-.236.434.158 2.764 1.304 3.236 1.542.472.236.79.354.908.552.116.196.116 1.146-.274 2.246z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
