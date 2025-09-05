"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TestimonialCard from "../card/testimonialCard";
import LightRays from "../LightRays";
import LogoLoop from "../LogoLoop";

const partnerLogos = [
  { src: "/partners/partner1.png", alt: "Partner 1", href: "#" },
  { src: "/partners/partner2.png", alt: "Partner 2", href: "#" },
  { src: "/partners/partner3.png", alt: "Partner 3", href: "#" },
  { src: "/partners/partner4.png", alt: "Partner 4", href: "#" },
];

const Testimonials = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full px-40 bg-black pb-20">
      <div
        className=" relative  bg-[#080808] py-20 rounded-[8px]"
        style={{
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
              className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg cursor-pointer z-50"
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

          <div className="w-full max-w-4xl mx-auto">
            <div
              style={{
                height: "80px",
                position: "relative",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <LogoLoop
                logos={partnerLogos}
                speed={40}
                direction="left"
                logoHeight={60}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="rgba(0, 0, 0, 0.8)"
                ariaLabel="Partner companies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
