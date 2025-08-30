"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
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

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tagVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(79, 26, 214, 0.3)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const portfolioData = [
    {
      features: [
        "Modern Typography",
        "User Friendly",
        "Flexible CMS",
        "SEO Optimized",
      ],
      tags: ["Business", "Agency"],
      images: [1, 2],
    },
    {
      features: [
        "AI Integration",
        "Responsive Design",
        "Custom Layouts",
        "Fast Loading",
      ],
      tags: ["E-commerce", "Portfolio"],
      images: [3, 4],
    },
    {
      features: [
        "Easy Customization",
        "Interactive Elements",
        "Retina Ready",
        "High Performance",
      ],
      tags: ["Business", "Agency"],
      images: [5, 6],
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white p-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/background/portfolio_bg.png')",
      }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
                src="/icons/stack.svg"
                alt="Finger Print"
                width={18}
                height={18}
              />
            </motion.div>
            <span className="text_button">Portfolio</span>
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
              Showcasing Your Best
            </motion.span>
            <motion.span
              className="block text-[#FFFFFF99] text-[54px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Work With Pure Precision
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p className="text-[#FFFFFF99] text-[16px] mb-2 max-w-2xl mx-auto">
              A portfolio is more than just projects it's your story, vision,
              and
            </p>
            <p className="text-[#FFFFFF99] text-[16px] mb-8 max-w-2xl mx-auto">
              expertise. Reboot ensures your work stands out with a rank.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Link href="/portfolio">
              <motion.div
                className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View More Works
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {portfolioData.map((card, index) => (
          <motion.div
            key={index}
            className="mb-10 grid md:grid-cols-3 gap-6 border-2 border-[#191919] rounded-xl bg-black p-6"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="rounded-lg p-6 shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
              style={{
                background: "radial-gradient(circle, #0F091226, #0C0912)",
              }}
              whileHover={{
                boxShadow:
                  "0 15px 30px rgba(79, 26, 214, 0.2), inset 0 0 30px rgba(79, 26, 214, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex gap-5 items-center mb-6 pb-4 relative"
                style={{
                  borderBottom: "1px solid transparent",
                  borderImage:
                    "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.span
                  className="text-gray-400 text-[16px] border border-[#4F1AD626] p-2 rounded-[4px] text-[#FFFFFF99] font-bold shadow-[0_10px_5px_-1px_#FFFFFF14] shadow-[inset_0_0_18px_0_#4F1AD62E]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  2025
                </motion.span>
                <h3 className="text-white font-semibold">Projecly Project</h3>
              </motion.div>

              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {card.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    variants={featureVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src="/icons/verify_purple.svg"
                        alt="Check"
                        width={20}
                        height={20}
                      />
                    </motion.div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {card.tags.map((tag, tagIndex) => (
                  <motion.button
                    key={tag}
                    className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm hover:border-white/40 transition-all duration-300"
                    style={{
                      boxShadow:
                        "0 0 10px rgba(79, 26, 214, 0.1), inset 0 0 10px rgba(79, 26, 214, 0.2)",
                    }}
                    variants={tagVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className="relative z-10 text-xs font-medium text-white"
                      style={{
                        textShadow: "0 0 8px rgba(79, 26, 214, 0.5)",
                      }}
                    >
                      {tag}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {card.images.map((imgIndex) => (
              <motion.div
                key={imgIndex}
                className="relative group overflow-hidden rounded-lg cursor-pointer h-90"
                whileHover="hover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + (imgIndex - card.images[0]) * 0.1,
                }}
              >
                <motion.div variants={imageVariants} className="h-full">
                  <Image
                    src={`/portfolio/portfolio${imgIndex}.jpg`}
                    alt={`Portfolio Project ${imgIndex}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] rounded-full text-xs"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  View Project
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
