"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoLoop from "../LogoLoop";
import { GradientOrbs } from "../Background";
import TagSections from "./tagSections";

// Partner logos configuration
const partnerLogos = [
  { src: "/partners/partner2.png", alt: "Europe commission", href: "#" },
  { src: "/partners/natoOtan.png", alt: "NATO OTAN", href: "#" },
  { src: "/partners/orange.png", alt: "Orange", href: "#" },
];

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        style={{
          backgroundImage: "url('/background/bg-hero.png')",
          backgroundPosition: "center 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "90%",
        }}
      >
        {/* Gradient overlay for smooth fade at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.8) 85%, rgb(0, 0, 0) 100%)",
          }}
        />

        {/* Animated gradient orbs */}
        <GradientOrbs />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <TagSections
            img={
              <span
                className="text-white px-4 py-1 rounded-full text-sm font-bold flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, #4F1AD6 0%, #8059E3 100%)",
                  border: "2px ",
                }}
              >
                2025
              </span>
            }
            title=" Next-Gen IT Agency"
            className="mt-10 mb-8"
          />

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 leading-tight"
          >
            We turn complexity into
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              intelligent growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <p className="text-gray-400 text-lg md:text-xl mb-2">
              AI Integration, Automation, Data Governance,
            </p>
            <p className="text-gray-400 text-lg md:text-xl">
              Chatbot, agent & Cloud Infrastructure.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* First Button: White background, borderRadius 8px */}
            <Link
              href="/contact"
              className="text-black px-8 py-3 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
              }}
            >
              Connect With Us
            </Link>

            {/* Second Button: Glassmorphism, borderRadius 8px */}
            <Link
              href="/about"
              className="text-white px-8 py-3 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
              }}
            >
              What is Projectly?
            </Link>
          </motion.div>

          {/* Partner Logos - LogoLoop Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-[480px] mx-auto"
          >
            {/* Top border line */}
            <div
              className="border-b border-gray-300/20 mb-15"
              style={{
                height: "1px",
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
              }}
            />

            {/* LogoLoop Container */}
            <div
              style={{
                height: "100px",
                position: "relative",
                overflow: "hidden",
                opacity: 0.4,
              }}
            >
              <LogoLoop
                logos={partnerLogos}
                speed={50}
                direction="left"
                logoHeight={60}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(0, 0, 0, 0.8)"
                ariaLabel="Partner companies"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
