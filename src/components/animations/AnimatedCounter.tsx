import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  const roundedValue = useTransform(springValue, (latest) => {
    if (suffix === "%") {
      return Math.round(latest);
    }
    return Math.round(latest);
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = roundedValue.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [roundedValue, prefersReducedMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
