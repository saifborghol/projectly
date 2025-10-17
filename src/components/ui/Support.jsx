"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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

const cardVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Support = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const supportCards = [
    {
      title: "Fast Responses",
      description: "Get timely answers to your questions.",
      icon: "/icons/drop_phone.svg",
    },
    {
      title: "Expert Guidance",
      description: "Our team understands both design and tech.",
      icon: "/icons/star.svg",
    },
    {
      title: "Continuous Help",
      description: "Support doesn't stop after launch.",
      icon: "/icons/headset.svg",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-40 bg-black pb-20">
      <div
        className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/background/portfolio_bg.png')",
        }}
      >
        <motion.div
          className="mb-6 sm:mb-8 flex justify-center"
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
                src="/icons/headset.svg"
                alt="Finger Print"
                width={12}
                height={12}
              />
            </motion.div>
            <span className="text_button">24/7 Support</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mb-8 sm:mb-12 text-center px-4"
          variants={itemVariants}
        >
          <motion.h1
            className="font-base mb-4 sm:mb-6 leading-tight sm:leading-[50px] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="block text-white text-3xl sm:text-4xl lg:text-[54px] mb-2 sm:mb-5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Here When You
            </motion.span>
            <motion.span
              className="block text-[#FFFFFF99] text-3xl sm:text-4xl lg:text-[54px]"
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
            <p className="text-[#FFFFFF99] text-sm sm:text-base mb-2 max-w-2xl mx-auto px-4">
              Projecly comes with dedicated support to help you launch and
              maintain
            </p>
            <p className="text-[#FFFFFF99] text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              your site without friction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Link href="/about">
              <motion.div
                className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg mb-8 sm:mb-12"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View About Projecly
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            className="relative flex flex-wrap justify-center items-center max-w-6xl mx-auto mt-6 sm:mt-10 gap-2 sm:gap-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div className="relative z-10">
              <Image
                src="/support/support1.jpg"
                alt="Support 1"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-lg sm:w-[180px] sm:h-[180px]"
              />
            </motion.div>

            <motion.div
              className="relative z-20 sm:-ml-12 sm:-mt-6"
              onMouseEnter={() => setHoveredImage("support2")}
              onMouseLeave={() => setHoveredImage(null)}
              style={{ transform: "rotate(-5deg)" }}
            >
              <Image
                src="/support/support2.jpg"
                alt="Support 2"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-xl cursor-pointer sm:w-[180px] sm:h-[180px]"
              />
              <AnimatePresence>
                {hoveredImage === "support2" && (
                  <motion.div
                    className="absolute z-50 px-3 py-2 text-white text-sm rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                    style={{
                      backgroundColor: "#0080FF",
                      top: "-65px",
                      left: "50%",
                      transform: "translateX(-50%) rotate(5deg)",
                    }}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    Hey, It's me!
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid #0080FF",
                      }}
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div className="relative z-15 sm:-ml-10 sm:mt-4">
              <Image
                src="/support/support3.jpg"
                alt="Support 3"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-lg sm:w-[180px] sm:h-[180px]"
              />
            </motion.div>

            <motion.div className="relative z-25 sm:-ml-12 sm:-mt-8">
              <Image
                src="/support/support4.jpg"
                alt="Support 4"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-xl sm:w-[180px] sm:h-[180px]"
              />
            </motion.div>

            <motion.div className="relative z-20 sm:-ml-10 sm:mt-6">
              <Image
                src="/support/support5.jpg"
                alt="Support 5"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-lg sm:w-[180px] sm:h-[180px]"
              />
            </motion.div>

            <motion.div className="relative z-30 sm:-ml-12 sm:-mt-10">
              <Image
                src="/support/support6.jpg"
                alt="Support 6"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-xl sm:w-[180px] sm:h-[180px]"
              />
            </motion.div>

            <motion.div
              className="relative z-25 sm:-ml-10 sm:mt-4"
              onMouseEnter={() => setHoveredImage("support7")}
              onMouseLeave={() => setHoveredImage(null)}
              style={{ transform: "rotate(8deg)" }}
            >
              <Image
                src="/support/support7.jpg"
                alt="Support 7"
                width={140}
                height={140}
                className="rounded-[23px] drop-shadow-lg cursor-pointer sm:w-[180px] sm:h-[180px]"
              />
              <AnimatePresence>
                {hoveredImage === "support7" && (
                  <motion.div
                    className="absolute z-50 px-3 py-2 text-white text-sm rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                    style={{
                      backgroundColor: "#4F1AD6",
                      top: "-65px",
                      left: "50%",
                      transform: "translateX(-50%) rotate(-8deg)",
                    }}
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    Problem Solved
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "5px solid transparent",
                        borderRight: "5px solid transparent",
                        borderTop: "5px solid #4F1AD6",
                      }}
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 my-6 sm:my-10 w-full max-w-6xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {supportCards.map((card, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-80 bg-[#080808] border border-[#191919] border p-4 rounded-[16px] border-t-0 relative"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F1AD6] to-transparent rounded-t-[16px]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              />

              <motion.div
                className="flex gap-4 mb-5 mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
              >
                <motion.div
                  className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={card.icon}
                    alt={`${card.title} Icon`}
                    width={12}
                    height={12}
                  />
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.6 + index * 0.1 }}
                >
                  {card.title}
                </motion.p>
              </motion.div>

              <motion.p
                className="text-[#FFFFFF80] text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.8 + index * 0.1 }}
              >
                {card.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Support;
