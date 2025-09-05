"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LightRays from "../LightRays";

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

const Join = () => {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden w-full px-40 bg-black">
      <div
        className="w-full bg-[#080808] py-18 "
        style={{
          backgroundImage:
            "url('./background/bg-services.png'), url('./background/bg-service-2.png')",
          backgroundSize: "cover,70%",
          backgroundPosition: "center, top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#7323a9"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center px-4">
          <button className="button mb-6">
            <div className="dots_border"></div>
            <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
              <Image
                src="/icons/verify.svg"
                alt="settings"
                width={14}
                height={14}
                className="mr-0.2"
              />
            </div>
            <span className="text_button">Join Us</span>
          </button>

          <motion.div className="text-left" variants={itemVariants}>
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
                Ready to Elevate Your Brand
              </motion.span>
              <motion.span
                className="block text-[#FFFFFF99] text-[54px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                with Next-Gen Innovation?{" "}
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-[#FFFFFF99] text-[16px] mb-2">
                Ready to take the next step? Join us now and start transforming
                your
              </p>
              <p className="text-[#FFFFFF99] text-[16px] mb-8">
                vision into reality with expert support.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 mb-12 flex justify-center z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg cursor-pointer"
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
        </div>
      </div>
    </section>
  );
};

export default Join;
