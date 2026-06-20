import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(10px)" }
      }
      animate={
        reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      exit={
        reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(8px)" }
      }
      transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

