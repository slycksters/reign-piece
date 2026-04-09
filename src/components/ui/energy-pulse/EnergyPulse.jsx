import { motion } from "framer-motion";

export const EnergyPulse = () => (
  <motion.div
    className="energy-pulse"
    animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.12, 0.05] }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);