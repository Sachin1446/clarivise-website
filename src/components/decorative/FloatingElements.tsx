import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingShape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: "circle" | "ring" | "dot";
  duration: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 8, className = "" }: FloatingElementsProps) => {
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

  const shapes: FloatingShape[] = useMemo(() => {
    const types: FloatingShape["type"][] = ["circle", "ring", "dot"];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 60 + 20,
      type: types[Math.floor(Math.random() * types.length)],
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, [count]);

  if (!isClient || prefersReducedMotion) {
    return null;
  }

  const renderShape = (shape: FloatingShape) => {
    const baseClasses = "border-primary/20";
    
    switch (shape.type) {
      case "circle":
        return (
          <div
            className={`rounded-full ${baseClasses} bg-primary/5`}
            style={{
              width: shape.size,
              height: shape.size,
            }}
          />
        );
      case "ring":
        return (
          <div
            className={`rounded-full ${baseClasses} border-2`}
            style={{
              width: shape.size,
              height: shape.size,
            }}
          />
        );
      case "dot":
        return (
          <div
            className="rounded-full bg-primary/30"
            style={{
              width: shape.size / 4,
              height: shape.size / 4,
            }}
          />
        );
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <AnimatePresence>
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {renderShape(shape)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingElements;
