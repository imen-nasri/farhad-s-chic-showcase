import { useEffect, useRef, useState } from "react";
import { useInView, useScroll, useTransform, MotionValue } from "framer-motion";

export const useScrollReveal = (threshold = 0.1, once = true) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });
  
  return { ref, isInView };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useScrollProgress = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  return { ref, scrollYProgress };
};

export const useCounter = (end: number, duration: number = 2000, trigger: boolean = true) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!trigger) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, trigger]);
  
  return count;
};
