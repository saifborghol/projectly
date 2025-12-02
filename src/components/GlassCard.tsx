/**
 * Glass Card Component - Nubien-inspired Glassmorphism
 * 
 * This component provides a reusable glass effect card similar to Nubien.framer.website
 * with multiple variants for different use cases.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated" | "tinted";
  hover?: boolean;
  blur?: "sm" | "md" | "lg";
  as?: "div" | "section" | "article";
}

export default function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = true,
  blur = "md",
  as = "div",
}: GlassCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = motion[as] as any;

  const blurValues = {
    sm: "blur(8px)",
    md: "blur(16px)",
    lg: "blur(24px)",
  };

  const variants = {
    default: {
      background: "rgba(255, 255, 255, 0.02)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      backdropFilter: `${blurValues[blur]} saturate(180%)`,
    },
    bordered: {
      background: "rgba(255, 255, 255, 0.03)",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: `${blurValues[blur]} saturate(180%)`,
    },
    elevated: {
      background: "rgba(255, 255, 255, 0.04)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      backdropFilter: `${blurValues[blur]} saturate(180%)`,
      boxShadow: "0 8px 32px 0 rgba(124, 58, 237, 0.1)",
    },
    tinted: {
      background: "rgba(124, 58, 237, 0.05)",
      border: "1px solid rgba(124, 58, 237, 0.15)",
      backdropFilter: `${blurValues[blur]} saturate(180%)`,
    },
  };

  const hoverEffects = hover
    ? {
        whileHover: {
          scale: 1.02,
          borderColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 12px 40px 0 rgba(124, 58, 237, 0.15)",
        },
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }
    : {};

  return (
    <Component
      className={`rounded-2xl ${className}`}
      style={{
        ...variants[variant],
        WebkitBackdropFilter: variants[variant].backdropFilter,
      }}
      {...hoverEffects}
    >
      {children}
    </Component>
  );
}

/**
 * Glass Button Component - Nubien-inspired button with glass effect
 */
interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function GlassButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  href,
}: GlassButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: undefined,
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px) saturate(180%)",
    },
    ghost: {
      background: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(8px)",
    },
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      className={`${sizeClasses[size]} rounded-lg font-medium text-white transition-all duration-300 ${className}`}
      style={{
        ...variantStyles[variant],
        WebkitBackdropFilter: variantStyles[variant].backdropFilter,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 32px 0 rgba(124, 58, 237, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Glass Badge Component - Nubien-inspired badge
 */
interface GlassBadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function GlassBadge({ children, className = "", icon }: GlassBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {icon && <span className="text-white">{icon}</span>}
      <span className="text-gray-300 text-sm font-light">{children}</span>
    </div>
  );
}
