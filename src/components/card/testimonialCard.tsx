import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({ index = 0 }) => {
  return (
    <motion.div
      className="relative bg-[#080808] border border-[#191919] rounded-[16px] p-6 overflow-hidden w-full max-w-sm"
      style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, #141414 1px, transparent 0)
        `,
        backgroundSize: "12px 12px",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4F1AD6] to-transparent rounded-t-[16px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
      />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Image
            src="/default_test.png"
            alt="John Smith"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <Image
          src="/icons/x_icon.svg"
          alt="X (Twitter)"
          width={14}
          height={14}
          className="opacity-60"
        />
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
              fill="#FFFFFF"
            />
          </svg>
        ))}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        "They not only delivered a top-notch website but also provided strategic
        insights that helped us improve our overall digital presence."
      </p>

      <div
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(90deg, transparent 0%, #232026 50%, transparent 100%) 1",
        }}
        className="mb-4"
      />

      <div className="text-white">
        <p className="font-medium text-sm mb-1">John Smith • CEO</p>
        <p className="text-gray-400 text-sm">Innovative Solutions</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
