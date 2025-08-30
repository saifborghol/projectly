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

const Launch = () => {
  return (
    <div className="flex justify-center items-center py-8 sm:py-12 lg:py-20 w-full bg-black px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl border-2 border-[#202020] rounded-[16px] sm:rounded-[20px] overflow-hidden">
        {/* Background Image Section */}
        <div
          className="w-full lg:flex-1 h-64 sm:h-80 lg:min-h-[400px] order-1 lg:order-1"
          style={{
            backgroundImage: "url('./background/launch_bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden lg:block w-[2px] bg-[#0e0918]"></div>

        {/* Content Section */}
        <div
          className="w-full lg:flex-1 bg-[#080808] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-start order-2 lg:order-2"
          style={{
            backgroundImage:
              "url('./background/bg-services.png'), url('./background/bg-service-2.png')",
            backgroundSize: "cover, 70%",
            backgroundPosition: "center, top",
            backgroundRepeat: "no-repeat, no-repeat",
          }}
        >
          <motion.div
            className="mb-4 sm:mb-6 flex justify-start"
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
                className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center shadow-lg shadow-purple-500/25"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src="/icons/cpu.svg"
                  alt="Launch Icon"
                  width={12}
                  height={12}
                  className="drop-shadow-md"
                />
              </motion.div>
              <span className="text_button">Launch</span>
            </motion.button>
          </motion.div>

          <motion.div
            className="mb-6 sm:mb-8 text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="font-base mb-3 sm:mb-4 leading-tight tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                className="block text-white text-2xl sm:text-3xl lg:text-[32px] mb-1 sm:mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Launch Your Business with Projecly
              </motion.span>
              <motion.span
                className="block text-[#FFFFFF99] text-2xl sm:text-3xl lg:text-[32px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                In Minutes of Time!
              </motion.span>
            </motion.h1>

            <div
              style={{
                borderBottom: "1px solid transparent",
                borderImage:
                  "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
              }}
              className="mb-3 sm:mb-4"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-[#FFFFFF99] text-sm sm:text-[14px] mb-1 leading-relaxed">
                Build your site effortlessly and showcase your work with
                confidence.
              </p>
              <p className="text-[#FFFFFF99] text-sm sm:text-[14px] mb-4 sm:mb-6 leading-relaxed">
                Ready to stand out? Get started today!
              </p>
            </motion.div>

            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
              <motion.div
                className="order-1 sm:order-1"
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

              {/* Divider - Horizontal on mobile, Vertical on desktop */}
              <div className="order-2 sm:order-2 w-full sm:w-auto">
                <div
                  className="h-[1px] w-full sm:h-16 sm:w-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%)",
                    backgroundImage:
                      "linear-gradient(180deg, transparent 0%, #232026 50%, transparent 100%)",
                  }}
                />
              </div>

              <motion.div
                className="flex flex-col items-start order-3 sm:order-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <motion.svg
                      key={index}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current"
                      viewBox="0 0 24 24"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 1.3 + index * 0.1,
                      }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </div>
                <motion.p
                  className="text-[#FFFFFF99] text-sm sm:text-[14px] mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  200+ Agencies Rated
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
