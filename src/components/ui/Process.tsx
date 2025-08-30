"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const Process = () => {
  const processSteps = [
    {
      icon: "/icons/chat.svg",
      title: "Discover Insights",
      description:
        "We analyze your goals, challenges, and vision to craft a tailored AI strategy.",
    },
    {
      icon: "/icons/calendar.svg",
      title: "Develop Solutions",
      description:
        "Our experts design and build cutting-edge AI solutions that drive results.",
    },
    {
      icon: "/icons/elipse.svg",
      title: "Deploy Success",
      description:
        "We implement, optimize, and scale your AI-powered success for long-term impact.",
    },
  ];

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
            className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center shadow-lg shadow-purple-500/25"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="/icons/cpu.svg"
              alt="Finger Print"
              width={12}
              height={12}
              className="drop-shadow-md"
            />
          </motion.div>
          <span className="text_button">Our Process</span>
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
            Our Proven Process
          </motion.span>
          <motion.span
            className="block text-[#FFFFFF99] text-[54px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            For AI-Driven Sucess
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <p className="text-[#FFFFFF99] text-[16px] mb-2 max-w-2xl mx-auto">
            With a focus on innovation and efficiency, we help you stay ahead in
            an
          </p>
          <p className="text-[#FFFFFF99] text-[16px] mb-8 max-w-2xl mx-auto">
            ever-evolving digital landscape.
          </p>
        </motion.div>
      </motion.div>

      <div className="bg-[#080808] border border-[#191919] border-2 p-4 rounded-[16px] border-t-0 relative">
        <div className="flex flex-wrap justify-center gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="w-80 bg-[#080808] border border-[#191919] border-2 p-6 rounded-[16px] border-t-0 relative"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
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
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              />
              <motion.div
                className="z-10 w-15 h-15 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-500/30"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src={step.icon}
                  alt={`${step.title} icon`}
                  width={30}
                  height={30}
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
              <p className="font-medium text-center text-[20px] mb-3">
                {step.title}
              </p>
              <p className="text-[#FFFFFF99] text-center text-[14px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
