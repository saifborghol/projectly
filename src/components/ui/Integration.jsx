"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoLoop from "../LogoLoop";

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.2, 1],
    borderRadius: ["50%", "50%", "50%"],
    boxShadow: [
      "0 0 0 0 rgba(79, 26, 214, 0.7)",
      "0 0 0 20px rgba(79, 26, 214, 0)",
      "0 0 0 0 rgba(79, 26, 214, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const integrationLogos = [
  { src: "/integration/Container-1.png", alt: "Integration 1", href: "#" },
  { src: "/integration/Container-2.png", alt: "Integration 2", href: "#" },
  { src: "/integration/Container-4.png", alt: "Integration 4", href: "#" },
  { src: "/integration/Container-5.png", alt: "Integration 5", href: "#" },
  { src: "/integration/Container-6.png", alt: "Integration 6", href: "#" },
  { src: "/integration/Container-7.png", alt: "Integration 7", href: "#" },
  { src: "/integration/Container-8.png", alt: "Integration 8", href: "#" },
  { src: "/integration/Container-9.png", alt: "Integration 9", href: "#" },
  { src: "/integration/Container-10.png", alt: "Integration 10", href: "#" },
  { src: "/integration/Container-11.png", alt: "Integration 11", href: "#" },
];

const Integration = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-40 bg-black py-20">
      <div
        className="min-h-screen bg-black text-white p-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/background/portfolio_bg.png')",
        }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="dots_border"></div>
            <motion.div
              className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Image
                src="/icons/fin.svg"
                alt="Finger Print"
                width={12}
                height={12}
              />
            </motion.div>
            <span className="text_button">Integrations</span>
          </motion.button>
        </motion.div>

        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <motion.h1
            className="font-base mb-6 leading-[50px] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="block text-white text-[54px] mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Here When You
            </motion.span>
            <motion.span
              className="block text-[#FFFFFF99] text-[54px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Need Us Most Important
            </motion.span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p className="text-[#FFFFFF99] text-[16px] mb-2 max-w-2xl mx-auto">
              Projecly comes with dedicated support to help you launch and
              maintain
            </p>
            <p className="text-[#FFFFFF99] text-[16px] mb-8 max-w-2xl mx-auto">
              your site without friction.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View About Reboot
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-16 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ">
              <motion.div variants={pulseVariants} animate="pulse">
                <Image
                  src="/integration/main.png"
                  alt="main container"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#4F1AD6]"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.div>
            </div>

            <div
              className="mt-30"
              style={{
                height: "100px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "60px",
              }}
            >
              <LogoLoop
                logos={integrationLogos}
                speed={30}
                direction="right"
                logoHeight={50}
                gap={80}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={false}
                ariaLabel="Integration partner companies"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integration;
