"use client";

import { useMemo } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface KibbleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  delay: number;
  layer: "back" | "front";
}

function generateParticles(count: number): KibbleParticle[] {
  const particles: KibbleParticle[] = [];
  for (let i = 0; i < count; i++) {
    const layer: "back" | "front" = Math.random() > 0.55 ? "front" : "back";
    particles.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 120 - 10,
      size:
        layer === "back"
          ? 16 + Math.random() * 20
          : 24 + Math.random() * 28,
      rotation: Math.random() * 360,
      speed: layer === "back" ? 0.15 + Math.random() * 0.25 : 0.4 + Math.random() * 0.5,
      delay: Math.random() * 2,
      layer,
    });
  }
  return particles;
}

function KibbleParticleItem({ particle }: { particle: KibbleParticle }) {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, particle.speed * 600]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [particle.rotation, particle.rotation + particle.speed * 180]
  );

  const opacity = particle.layer === "back" ? 0.35 : 0.7;

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
        y,
        rotate,
        opacity,
        zIndex: particle.layer === "back" ? 0 : 1,
        filter: particle.layer === "back" ? "blur(2px)" : "none",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: particle.delay,
        ease: "easeOut",
      }}
    >
      <img
        alt=""
        className="w-full h-full object-contain select-none"
        loading="lazy"
        src="/croqueta.png"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
        }}
      />
    </motion.div>
  );
}

export default function KibbleScrollBackground() {
  const particles = useMemo(() => generateParticles(36), []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-amber-50/60" />
      {particles.map((p) => (
        <KibbleParticleItem key={p.id} particle={p} />
      ))}
    </div>
  );
}
