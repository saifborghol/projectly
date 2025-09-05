"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "../../app/globals.css";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function AboutUs() {
  return (
    <section className="relative min-h-150 flex items-center justify-center bg-gradient-to-tr from-gray-900 via-black to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-center"
        >
          <div className="relative group">
            <button className="button">
              <div className="dots_border"></div>
              <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
                <Image
                  src="/icons/finger-print.png"
                  alt="Finger Print"
                  width={18}
                  height={18}
                />
              </div>
              <span className="text_button">About Us</span>
            </button>
          </div>
        </motion.div>

        {/* Main Heading with ScrollReveal */}
        <ScrollReveal
          baseOpacity={0.15}
          enableBlur={true}
          blurStrength={3}
          baseRotation={2}
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
          containerClassName="mb-12"
          textClassName="text-2xl md:text-4xl font-light text-white leading-relaxed max-w-4xl mx-auto text-justify mr-10 ml-10"
        >
          Driven by innovation, powered by precision — Projectly is a team of
          tech visionaries crafting intelligent digital solutions that shape the
          future...
        </ScrollReveal>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
