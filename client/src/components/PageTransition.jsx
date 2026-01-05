import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1.5 }}
      exit={{ opacity: 0.5 }}
      transition={{
        duration: 0.50,        // slow but smooth
        ease: [0.23, 1, 0.68, 1], // soft cubic bezier
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
