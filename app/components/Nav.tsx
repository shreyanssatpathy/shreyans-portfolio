"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <div className="nav-logo">
        <span className="nav-logo-full">SS — Portfolio</span>
        <span className="nav-logo-short">SS</span>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#stack">Stack</a>
        <a href="#blog">Writing</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
