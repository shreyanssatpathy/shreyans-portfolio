"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
};

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let nodes: Node[] = [];
    let raf = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      nodes = [];
      const cols = Math.ceil(W / 80);
      const rows = Math.ceil(H / 80);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          nodes.push({
            x: i * 80 + 40,
            y: j * 80 + 40,
            ox: i * 80 + 40,
            oy: j * 80 + 40,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            r: Math.random() * 1.5 + 0.5,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (Math.abs(n.x - n.ox) > 20) n.vx *= -1;
        if (Math.abs(n.y - n.oy) > 20) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(233,168,48,${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const p = Math.sin(t * 0.001 + n.phase) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * (0.6 + p * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(233,168,48,${0.2 + p * 0.3})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      resize();
      initNodes();
    };

    resize();
    initNodes();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas id="hero-canvas" ref={ref} />;
}
