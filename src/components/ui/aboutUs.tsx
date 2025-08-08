"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "../../app/Button.module.css";

export default function AboutUs() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-900 via-black to-gray-800 px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative group">
            <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-full bg-black z-10">
              <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

              <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-full inset-0.5 bg-black">
                <button
                  name="text"
                  className="input font-light text-lg h-full opacity-90 w-full px-16 py-3 rounded-full bg-black"
                >
                  About Us
                </button>
              </div>
              <div className="absolute animate-spin [animation-duration:3s] w-full h-[100px] bg-gradient-to-r from-[rgba(79,26,214,0.3)] via-[#4F1AD6] to-[rgba(79,26,214,0.3)] blur-[30px]"></div>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl font-light text-white mb-12 leading-relaxed max-w-4xl mx-auto text-justify"
        >
          Driven by innovation, powered by precision —{" "}
          <span className="block">
            <strong className="font-bold">Projectly</strong> is a team of tech
            visionaries crafting
          </span>
          <span className="block">
            intelligent digital solutions that shape the future...
          </span>
        </motion.h2>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
