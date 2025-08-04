"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800  pt-24">
      {/* Background gradient effects */}
      {/* <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
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
              height: '40px',
              paddingTop: '6px',
              paddingRight: '16px',
              paddingBottom: '6px',
              paddingLeft: '6px',
              gap: '14px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(0px)',
              border: '2px solid rgba(104, 104, 104, 0.15)'
            }}
          >
            <span 
              className="text-white px-4 py-1 rounded-full text-sm font-bold flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #4F1AD6 0%, #8059E3 100%)',
                border: '2px '
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Link
            href="/contact"
            className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Connect With Us
          </Link>
          <Link
            href="/about"
            className="text-white px-8 py-3 rounded-lg text-text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{
              background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))'
            }}
          >
            What is Projectly?
          </Link>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
        >
          {/* Placeholder logos - you can replace these with actual partner logos */}
          <div className="text-gray-400 text-2xl font-bold">LOGO</div>
          <div className="text-gray-400 text-xl">
            <span className="font-bold">NATO</span>
            <br />
            <span className="text-sm">OTAN</span>
          </div>
          <div className="text-gray-400 text-xl font-bold">
            European
            <br />
            Commission
          </div>
          <div className="text-gray-400 text-xl font-bold">
            GAME
            <br />
            TO LIVE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
