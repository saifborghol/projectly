"use client";

import React from "react";

/**
 * Nubien-inspired background component with radial gradients and animated elements
 * This creates a sophisticated dark background with purple/blue gradient accents
 */
export default function Background() {
  return (
    <>
      {/* Main gradient background layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black" />

        {/* Top gradient - Purple glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] opacity-[0.15]"
          style={{
            background:
              "radial-gradient(ellipse closest-side, rgba(124, 58, 237, 0.4), transparent)",
            filter: "blur(80px)",
          }}
        />

        {/* Left gradient - Blue accent */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[40%] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse closest-side, rgba(59, 130, 246, 0.5), transparent)",
            filter: "blur(80px)",
          }}
        />

        {/* Right gradient - Purple accent */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[40%] opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse closest-side, rgba(139, 92, 246, 0.5), transparent)",
            filter: "blur(80px)",
          }}
        />

        {/* Bottom gradient - Purple glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] opacity-[0.1]"
          style={{
            background:
              "radial-gradient(ellipse closest-side, rgba(124, 58, 237, 0.4), transparent)",
            filter: "blur(100px)",
          }}
        />

        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        {/* Grid overlay - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </>
  );
}

/**
 * Section background component for individual sections
 * Provides glassmorphism effect for content sections
 */
export function SectionBackground({
  children,
  className = "",
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
}) {
  const variants = {
    default: "bg-transparent",
    glass: "bg-white/[0.02] backdrop-blur-sm border border-white/[0.05]",
    gradient:
      "bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05]",
  };

  return (
    <div className={`${variants[variant]} ${className}`}>{children}</div>
  );
}

/**
 * Animated gradient orbs for hero sections
 */
export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated orb 1 */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.4), transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "4s",
        }}
      />

      {/* Animated orb 2 */}
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "5s",
          animationDelay: "1s",
        }}
      />

      {/* Animated orb 3 */}
      <div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-20 animate-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "6s",
          animationDelay: "2s",
        }}
      />
    </div>
  );
}
