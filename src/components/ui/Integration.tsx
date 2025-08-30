"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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

const Integration = () => {
  return (
    <div
      className="min-h-screen bg-black text-white p-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/background/portfolio_bg.png')",
      }}
    >
      <motion.div className="mb-8 flex justify-center" variants={itemVariants}>
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
          className="mt-8 mb-3"
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
        <div className="flex gap-10 mt-30 items-center justify-center relative">
          <Image
            src="/integration/Container-1.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-2.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-4.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-5.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-6.png"
            alt="container"
            width={50}
            height={50}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            variants={pulseVariants}
            animate="pulse"
          >
            <Image
              src="/integration/main.png"
              alt="main container"
              width={80}
              height={80}
              className="rounded-full"
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#4F1AD6] rounded-full"
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
          <Image
            src="/integration/Container-7.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-8.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-9.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-10.png"
            alt="container"
            width={50}
            height={50}
          />
          <Image
            src="/integration/Container-11.png"
            alt="container"
            width={50}
            height={50}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Integration;
