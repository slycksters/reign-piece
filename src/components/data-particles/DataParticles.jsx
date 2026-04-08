import { motion } from "framer-motion";

const particles = Array.from({ length: 60 });

export const DataParticles = () => (
  <>
    {particles.map((_, i) => (
      <motion.div
        key={i}
        className="particle"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 20,
          opacity: 0,
        }}
        animate={{
          y: -20,
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          delay: Math.random() * 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </>
);