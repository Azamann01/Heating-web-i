import { useState, useEffect } from "react";
 
/**
 * useScrolled
 * Returns true once the window has scrolled past `threshold` pixels.
 * Used by Nav to apply backdrop-blur and border on scroll.
 */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);
 
  return scrolled;
};