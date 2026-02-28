import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlowOrbProps {
  size?: number;
  color?: string;
  x?: string;
  y?: string;
  blur?: number;
  opacity?: number;
  duration?: number;
  className?: string;
}

const GlowOrb = ({
  size = 300,
  color = "hsl(42, 78%, 55%)",
  x = "50%",
  y = "50%",
  blur = 100,
  opacity = 0.15,
  duration = 8,
  className = "",
}: GlowOrbProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (!isClient || prefersReducedMotion) {
    return (
      <div
        className={`absolute rounded-full pointer-events-none ${className}`}
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
          filter: `blur(${blur}px)`,
          opacity,
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [opacity, opacity * 1.3, opacity],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowOrb;
