"use client";

import { useEffect, useRef, useState } from "react";

const POSTS = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7414035193327489024?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7402109010587324416?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7376895590602969088?collapsed=1",
];

const INTERVAL_MS = 3000;

export default function BlogCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Only auto-advance on viewports where the carousel is active.
  const isCarouselViewport = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 960px)").matches;

  // Scroll to a card by index. Subtracts the track's left padding so the
  // card lands with equal gutter on both sides (same as scroll-snap does
  // after a swipe — these must agree or the position jumps on auto-advance).
  const scrollToIndex = (i: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    track.scrollTo({ left: card.offsetLeft - padLeft, behavior });
  };

  // Auto-advance.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      if (!isCarouselViewport()) return;
      setIndex((i) => (i + 1) % POSTS.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  // React to index changes.
  useEffect(() => {
    if (isCarouselViewport()) scrollToIndex(index);
  }, [index]);

  // Keep `index` in sync when the user swipes manually, and pause briefly.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pauseTimer: number | undefined;

    const pauseThenResume = () => {
      setPaused(true);
      window.clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => setPaused(false), 5000);
    };

    let scrollTimer: number | undefined;
    const onScroll = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const cards = track.children;
        if (cards.length < 2) return;
        const first = cards[0] as HTMLElement;
        const second = cards[1] as HTMLElement;
        const step = second.offsetLeft - first.offsetLeft;
        if (step <= 0) return;
        const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        const nearest = Math.round(
          (track.scrollLeft - (first.offsetLeft - padLeft)) / step
        );
        const clamped = Math.max(0, Math.min(POSTS.length - 1, nearest));
        setIndex((cur) => (cur === clamped ? cur : clamped));
      }, 120);
    };

    track.addEventListener("pointerdown", pauseThenResume);
    track.addEventListener("wheel", pauseThenResume, { passive: true });
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("pointerdown", pauseThenResume);
      track.removeEventListener("wheel", pauseThenResume);
      track.removeEventListener("scroll", onScroll);
      window.clearTimeout(pauseTimer);
      window.clearTimeout(scrollTimer);
    };
  }, []);

  const onDotClick = (i: number) => {
    setPaused(true);
    setIndex(i);
    window.setTimeout(() => setPaused(false), 5000);
  };

  return (
    <>
      <div className="blog-grid" ref={trackRef}>
        {POSTS.map((src, i) => (
          <div
            key={src}
            className={`blog-card reveal${
              i === 1 ? " reveal-delay-1" : i === 2 ? " reveal-delay-2" : ""
            }`}
          >
            <div className="blog-card-header">
              <span className="blog-card-dot" />
              <span className="blog-card-label">
                LinkedIn · Shreyans Satpathy
              </span>
            </div>
            <div className="blog-card-body">
              <iframe
                src={src}
                allowFullScreen
                scrolling="no"
                title="Embedded LinkedIn post"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="blog-dots" aria-hidden="true">
        {POSTS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`blog-dot${i === index ? " active" : ""}`}
            onClick={() => onDotClick(i)}
            aria-label={`Go to post ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
