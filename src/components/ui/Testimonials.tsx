"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TestimonialCard from "../card/testimonialCard";

const Testimonials = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      <div
        className="w-full bg-[#080808] py-20"
        style={{
          backgroundImage:
            "url('./background/bg-services.png'), url('./background/bg-service-2.png')",
          backgroundSize: "cover,70%",
          backgroundPosition: "center, top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center px-4">
          <button className="button mb-6">
            <div className="dots_border"></div>
            <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
              <Image
                src="/icons/user.svg"
                alt="settings"
                width={14}
                height={14}
                className="mr-0.2"
              />
            </div>
            <span className="text_button">Testimonials</span>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-medium text-white mb-6 tracking-tight text-center pointer-events-none">
              What Our Clients Say
            </h1>
            <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 tracking-tight text-center pointer-events-none">
              About Projecly's Excellence
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-l text-gray-400 mb-12 text-center max-w-lg leading-relaxed pointer-events-none"
          >
            Hear from our happy clients! See how we've helped them achieve
            <br />
            their goals and create lasting impact.
          </motion.p>

          <motion.div
            className="mt-8 mb-12 flex justify-center"
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

          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <TestimonialCard index={0} />
              <TestimonialCard index={1} />
              <TestimonialCard index={2} />
            </motion.div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 justify-items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <TestimonialCard index={3} />
              <TestimonialCard index={4} />
              <TestimonialCard index={5} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-[450px] mx-auto overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)",
            }}
          >
            <div className="flex animate-slide py-8">
              <div className="flex min-w-full justify-around items-center gap-8 opacity-60">
                <Image
                  src="/partners/partner1.png"
                  alt="Partner 1"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner2.png"
                  alt="Partner 2"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner3.png"
                  alt="Partner 3"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner4.png"
                  alt="Partner 4"
                  width={150}
                  height={40}
                  className=" object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex min-w-full justify-around items-center gap-8 opacity-60">
                <Image
                  src="/partners/partner1.png"
                  alt="Partner 1"
                  width={150}
                  height={40}
                  className="pl-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner2.png"
                  alt="Partner 2"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner3.png"
                  alt="Partner 3"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <Image
                  src="/partners/partner4.png"
                  alt="Partner 4"
                  width={150}
                  height={40}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
