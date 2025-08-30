"use client";

import { motion } from "framer-motion";
import ContactForm from "../form/contactForm";

const Collaborate = () => {
  return (
    <div className="pt-15 pb-40 flex flex-col items-center text-center bg-black">
      <hr
        className="w-full border-0 h-px mb-8"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #FFFFFF1A , transparent 100%)",
        }}
      />
      <button className="button mb-6">
        <div className="dots_border"></div>
        <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
          <p className="font-bold text-[10px]">24/7</p>
        </div>
        <span className="text_button">Collaborate</span>
      </button>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <h1
          className="text-6xl md:text-7xl font-medium mb-6 tracking-tight text-center pointer-events-none"
          style={{
            background: "linear-gradient(to right, #FFFFFF, #FFFFFF4D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Have Any Doubts? We
        </h1>
        <h2
          className="text-3xl md:text-6xl font-medium mb-6 tracking-tight text-center pointer-events-none"
          style={{
            background: "linear-gradient(to right, #FFFFFF, #FFFFFF4D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          are Ready to Help.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-l text-gray-400 mb-12 text-center max-w-lg leading-relaxed pointer-events-none"
      >
        Whether you need guidance, support,
        <br />
        or a fresh start, our team is ready to assist you.
      </motion.p>

      <motion.div
        className="mt-8 mb-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <motion.div
          className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg cursor-pointer"
          style={{
            boxShadow: `
              0 -60px 300px rgba(79, 26, 214, 0.8),
              0 -40px 250px rgba(79, 26, 214, 0.6),
              0 40px 200px rgba(79, 26, 214, 0.4),
              0 60px 280px rgba(79, 26, 214, 0.3),
              -120px 0 250px rgba(79, 26, 214, 0.5),
              120px 0 250px rgba(79, 26, 214, 0.5)
            `,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Fill The Form Out!
        </motion.div>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default Collaborate;
