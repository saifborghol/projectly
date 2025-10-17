"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

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
  hidden: { scale: 0.8, opacity: 0, y: 30 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};
const content = [
  {
    card: (
      <>
        <div
          className="flex flex-col w-full  lg:pr-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
          // onWheel={onWheelPassThrough}
        >
          <motion.div
            className="mb-6 sm:mb-8 flex justify-start"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
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
                  src="/icons/finger-print.png"
                  alt="Finger Print"
                  width={18}
                  height={18}
                />
              </motion.div>
              <span className="text_button">Projecly</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mb-8 sm:mb-12 text-left"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-base mb-4 sm:mb-6 leading-tight sm:leading-[50px] tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="block text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] mb-2 sm:mb-5"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                AI Meets Design,
              </motion.span>
              <motion.span
                className="block text-[#FFFFFF99] text-3xl sm:text-4xl lg:text-5xl xl:text-[54px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Purpose Into Ideas!
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-[#FFFFFF99] text-sm sm:text-base mb-2 max-w-2xl">
                Projecly is a premium IT agency crafted for teams pushing the
              </p>
              <p className="text-[#FFFFFF99] text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl">
                boundaries of technology.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          ></motion.div>
        </div>
        <motion.div
          className="w-full mb-6 lg:w-130 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
          style={{
            background: "radial-gradient(circle, #0F091226, #0C0912)",
          }}
          variants={cardVariants}
          whileHover={{
            boxShadow:
              "0 15px 30px rgba(79, 26, 214, 0.2), inset 0 0 30px rgba(79, 26, 214, 0.3)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex justify-between items-center mb-4 sm:mb-6 pb-3 sm:pb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/icons/three_block.svg"
              alt="bg"
              width={32}
              height={32}
              className="sm:w-[40px] sm:h-[40px] border border-[#4F1AD626] p-2 rounded-[4px] text-[#FFFFFF99] font-bold shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
            />
            <motion.span
              className="text-sm sm:text-[16px] px-3 sm:px-5 border-2 border-[#242129] p-2 rounded-[4px] font-medium rounded-full bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent bg-[#16141c]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              Assist
            </motion.span>
          </motion.div>

          <motion.p
            className="w-fit font-medium text-base sm:text-[18px] mb-3 sm:mb-5 pb-2 sm:pb-3"
            style={{
              borderBottom: "1px solid transparent",
              borderImage:
                "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Advanced AI, Streamlined Design
          </motion.p>

          <motion.p
            className="text-[#FFFFFF80] font-base text-sm sm:text-[14px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Projecly blends cutting-edge AI capabilities with sleek, modern
            design. It's built for agencies that need to showcase sophisticated
            technology in a user-friendly and visually compelling way.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 my-4 sm:my-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="px-3 sm:px-4 py-2 rounded-full border border-white/5 bg-gradient-to-t from-[#4F1AD633] to-[#9999991A]">
              <p className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-sm">
                AI Design
              </p>
            </div>
            <div className="px-3 sm:px-4 py-2 rounded-full border border-white/5 bg-gradient-to-t from-[#4F1AD633] to-[#9999991A]">
              <p className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-sm">
                Tech Innovation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </>
    ),
    content: (
      <motion.div
        className="mb-8 sm:mb-12 mt-8 lg:mt-0 flex justify-center lg:justify-start w-full lg:w-1/2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ width: "528px" }}
      >
        <Image
          src="/background/projecly_bg.jpg"
          alt="bg"
          width={528}
          height={320}
          className="sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] border-2 sm:border-4 border-[#080808] rounded-xl sm:rounded-2xl"
        />
      </motion.div>
    ),
  },
  {
    card: (
      <motion.div
        className="w-full mb-6 lg:w-130 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
        style={{
          background: "radial-gradient(circle, #0F091226, #0C0912)",
        }}
        variants={cardVariants}
        whileHover={{
          boxShadow:
            "0 15px 30px rgba(79, 26, 214, 0.2), inset 0 0 30px rgba(79, 26, 214, 0.3)",
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex justify-between items-center mb-4 sm:mb-6 pb-3 sm:pb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/icons/cursor.svg"
            alt="bg"
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px] border border-[#4F1AD626] p-2 rounded-[4px] text-[#FFFFFF99] font-bold shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
          />
          <motion.span
            className="text-sm sm:text-[16px] px-3 sm:px-5 border-2 border-[#242129] p-2 rounded-[4px] font-medium rounded-full bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent bg-[#16141c]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            Guide
          </motion.span>
        </motion.div>

        <motion.p
          className="w-fit font-medium text-base sm:text-[18px] mb-3 sm:mb-5 pb-2 sm:pb-3"
          style={{
            borderBottom: "1px solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Effortless Customization for Your Brand
        </motion.p>

        <motion.p
          className="text-[#FFFFFF80] font-base text-sm sm:text-[14px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Projecly comes with flexible design options that adapt to your unique
          vision. With easy to use customization tools, you can fine-tune every
          detail to fit your brand's style and messaging.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 sm:gap-3 my-4 sm:my-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="px-3 sm:px-4 py-2 rounded-full border border-white/5 bg-gradient-to-t from-[#4F1AD633] to-[#9999991A]">
            <p className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-sm">
              Easy Customization
            </p>
          </div>
          <div className="px-3 sm:px-4 py-2 rounded-full border border-white/5 bg-gradient-to-t from-[#4F1AD633] to-[#9999991A]">
            <p className="bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent text-sm">
              Brand Identity
            </p>
          </div>
        </motion.div>
      </motion.div>
    ),
    content: (
      <motion.div
        className="mb-8 sm:mb-12 mt-8 lg:mt-0 flex justify-center lg:justify-start w-full lg:w-1/2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ width: "528px" }}
      >
        <Image
          src="/background/projecly_bg.jpg"
          alt="bg"
          width={320}
          height={320}
          className="sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] border-2 sm:border-4 border-[#080808] rounded-xl sm:rounded-2xl"
        />
      </motion.div>
    ),
  },
  {
    card: (
      <motion.div
        className="w-full lg:w-130 rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
        style={{
          background: "radial-gradient(circle, #0F091226, #0C0912)",
        }}
        variants={cardVariants}
        whileHover={{
          boxShadow:
            "0 15px 30px rgba(79, 26, 214, 0.2), inset 0 0 30px rgba(79, 26, 214, 0.3)",
          scale: 1.02,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="flex justify-between items-center mb-4 sm:mb-6 pb-3 sm:pb-4 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src="/icons/triple.svg"
            alt="bg"
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px] border border-[#4F1AD626] p-2 rounded-[4px] text-[#FFFFFF99] font-bold shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
          />
          <motion.span
            className="text-sm sm:text-[16px] px-3 sm:px-5 border-2 border-[#242129] p-2 rounded-[4px] font-medium rounded-full bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent bg-[#16141c]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            Resolve
          </motion.span>
        </motion.div>

        <motion.p
          className="w-fit font-medium text-base sm:text-[18px] mb-3 sm:mb-5 pb-2 sm:pb-3"
          style={{
            borderBottom: "1px solid transparent",
            borderImage:
              "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Future-Proof and Scalable Solutions
        </motion.p>

        <motion.p
          className="text-[#FFFFFF80] font-base text-sm sm:text-[14px] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Projecly is built to grow with your agency. Whether you're adding new
          services, expanding your team, or scaling up your product line.
        </motion.p>

        <motion.div
          className="mt-6 sm:mt-8 mb-2 sm:mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Book An Appointment
          </motion.div>
        </motion.div>
      </motion.div>
    ),
    content: (
      <motion.div
        className="mb-8 sm:mb-12 mt-8 lg:mt-0 flex justify-center lg:justify-start w-full lg:w-1/2"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ width: "528px" }}
      >
        <Image
          src="/background/projecly_bg.jpg"
          alt="bg"
          width={320}
          height={320}
          className="sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] border-2 sm:border-4 border-[#080808] rounded-xl sm:rounded-2xl"
        />
      </motion.div>
    ),
  },
];
const Projecly = () => {
  return (
    <div style={{ backgroundColor:"black" }}>
      <StickyScroll content={content} />
    </div>
  );
};

export default Projecly;
