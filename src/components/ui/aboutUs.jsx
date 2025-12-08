"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import "../../app/globals.css";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";
import TagSections from "./tagSections";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative min-h-150 flex items-center justify-center "
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <TagSections
          img={
            <Image
              src="/icons/finger-print.png"
              alt="Finger Print"
              width={18}
              height={18}
            />
          }
          title="About Us"
          className="mb-5"
        />
        {/* Main Heading with ScrollReveal */}
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          blurStrength={8}
          baseRotation={0}
          animationDuration={2}
          staggerDelay={0.05}
          containerClassName="mb-12"
          textClassName="text-2xl md:text-4xl font-light text-white leading-relaxed max-w-4xl mx-auto text-center px-4"
        >
          Driven by innovation, powered by precision — Projectly is a team of tech visionaries crafting intelligent digital solutions that shape the future
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
