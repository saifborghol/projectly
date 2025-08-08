"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* // */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24">
        {/* Background gradient effects */}
        {/* <div className="absolute bottom-0 left-0 right-0 z-0 h-[300px] pointer-events-none ">
          <Image
            src="/background/purple-ring.png"
            alt="Purple Ring"
            fill
            priority
            className="object-contain w-full h-full"
          />
        </div> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div
              className="inline-flex items-center rounded-[40px]"
              style={{
                //   width: '225px',
                height: "40px",
                paddingTop: "6px",
                paddingRight: "16px",
                paddingBottom: "6px",
                paddingLeft: "6px",
                gap: "14px",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)",
                backdropFilter: "blur(0px)",
                border: "2px solid rgba(104, 104, 104, 0.15)",
              }}
            >
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
              <span className="text-gray-300 text-sm font-light">
                Next-Gen IT Agency
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 leading-tight"
          >
            Driving Digital Growth
            <br />
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Redefining the Future.
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
              Creating latest solutions that redefine innovation.
            </p>
            <p className="text-gray-400 text-lg md:text-xl">
              Stay ahead with AI-powered technology for the future.
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
                backgroundColor: "rgba(238, 244, 255, 0.30)",
                borderRadius: "8px",
                // border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              What is Projectly?
            </Link>
          </motion.div>

          {/* Partner Logos - Auto Animated Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-[450px] mx-auto overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <div
              className="border-b border-gray-300/20"
              style={{
                height: "1px",
                background:
                  "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)",
              }}
            ></div>
            <div className="flex animate-slide py-4">
              <div className="flex min-w-full justify-around items-center gap-8 opacity-60">
                <Image
                  src="/partners/partner1.png"
                  alt="Partner 1"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner2.png"
                  alt="Partner 2"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner3.png"
                  alt="Partner 3"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner4.png"
                  alt="Partner 4"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex min-w-full justify-around items-center gap-8 opacity-60">
                <Image
                  src="/partners/partner1.png"
                  alt="Partner 1"
                  width={150}
                  height={40}
                  className="pl-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner2.png"
                  alt="Partner 2"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner3.png"
                  alt="Partner 3"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner4.png"
                  alt="Partner 4"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
