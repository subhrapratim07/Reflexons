import { motion, useMotionValue } from "framer-motion";

export default function Magnetic({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const move = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
