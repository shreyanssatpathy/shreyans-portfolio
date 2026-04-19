"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
