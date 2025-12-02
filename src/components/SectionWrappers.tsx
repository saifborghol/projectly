/**
 * Section Wrapper Utilities
 * Nubien-inspired section backgrounds and decorative elements
 */

"use client";

import React from "react";

/**
 * Animated rays/light beams effect (like Nubien uses)
 */
export function LightRays({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top-left rays */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] opacity-10"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124, 58, 237, 0.3), transparent 60%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(40px)",
        }}
      />
      
      {/* Center rays */}
      <div
        className="absolute top-1/2 left-1/2 w-[1000px] h-[600px] opacity-5"
        style={{
          background:
            "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(139, 92, 246, 0.4) 90deg, transparent 180deg, rgba(59, 130, 246, 0.4) 270deg, transparent 360deg)",
          transform: "translate(-50%, -50%)",
          filter: "blur(60px)",
        }}
      />
      
      {/* Bottom-right rays */}
      <div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-10"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 60%)",
          transform: "translate(50%, 50%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}

/**
 * Gradient mesh background (subtle grid with gradient)
 */
export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
}

/**
 * Floating particles effect
 */
export function FloatingParticles({ count = 20 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white/10 animate-pulse-slow"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: `-${particle.size}px`,
            animation: `float-up ${particle.duration}s linear ${particle.delay}s infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Spotlight effect that follows cursor
 */
export function Spotlight() {
  const [position, setPosition] = React.useState({ x: 50, y: 50 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-5 transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.6), transparent 70%)",
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}

/**
 * Section wrapper with Nubien-style decorations
 */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withRays?: boolean;
  withMesh?: boolean;
  withParticles?: boolean;
  withSpotlight?: boolean;
}

export function NubienSection({
  children,
  className = "",
  withRays = false,
  withMesh = false,
  withParticles = false,
  withSpotlight = false,
}: SectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {withRays && <LightRays />}
      {withMesh && <GradientMesh />}
      {withParticles && <FloatingParticles />}
      {withSpotlight && <Spotlight />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/**
 * Divider line with gradient
 */
export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.5) 50%, transparent 100%)",
      }}
    />
  );
}

/**
 * Corner accent (decorative element)
 */
export function CornerAccent({
  position = "top-left",
  size = 200,
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      className={`absolute ${positions[position]} pointer-events-none`}
      style={{ width: size, height: size }}
    >
      <div
        className="w-full h-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.4), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
