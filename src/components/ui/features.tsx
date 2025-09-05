"use client";
import React, { useEffect, useState, useRef } from "react";
import "../../app/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface AppIcon {
  id: number;
  name: string;
  imageUrl: string;
  bgColor: string;
}

interface FloatingText {
  id: number;
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
}

const RadialSwiper: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const texts = [
      "Data Analytics",
      "ChatOps",
      "Intelligence",
      "Cloud Infrastructure",
      "Cognitive AI",
      "Smart Automation",
      "ML Pipeline",
      "Neural Networks",
      "Deep Learning",
      "Microservices",
      "DevOps",
    ];

    const cardWidth = 280;
    const lineHeight = 45;
    const startY = 30;
    const textsPerLine = 3;

    const initialTexts: FloatingText[] = texts.map((text, index) => {
      const lineIndex = Math.floor(index / textsPerLine);
      const positionInLine = index % textsPerLine;
      const speed = 1.0 + Math.random() * 1.5;
      const direction = Math.random() < 0.5 ? -1 : 1;

      const lineSpacing = (cardWidth - 140) / (textsPerLine - 1);
      const startX = 20 + positionInLine * lineSpacing;

      return {
        id: index,
        text,
        x: startX + Math.random() * 60,
        y: startY + lineIndex * lineHeight,
        vx: direction * speed,
        vy: 0,
        speed: speed,
      };
    });

    setFloatingTexts(initialTexts);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const cardWidth = 280;
    const textPadding = 120;

    const animateTexts = () => {
      setFloatingTexts((prev) =>
        prev.map((text) => {
          let newX = text.x + text.vx;
          let newVx = text.vx;

          if (newX <= 0 || newX >= cardWidth - textPadding) {
            newVx = -newVx;
            newX = newX <= 0 ? 0 : cardWidth - textPadding;
          }

          return {
            ...text,
            x: newX,
            vx: newVx,
          };
        })
      );
    };

    const interval = setInterval(animateTexts, 50);
    return () => clearInterval(interval);
  }, [mounted]);

  const appIcons: AppIcon[] = [
    {
      id: 3,
      name: "SaaS Dashboard",
      imageUrl: "/gallery/gallery1.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      name: "Food Delivery",
      imageUrl: "/gallery/gallery2.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 5,
      name: "Media Hub",
      imageUrl: "/gallery/gallery3.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 6,
      name: "File Manager",
      imageUrl: "/gallery/gallery4.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 7,
      name: "Analytics",
      imageUrl: "/gallery/gallery5.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 8,
      name: "Link Manager",
      imageUrl: "/gallery/gallery6.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 9,
      name: "Design Studio",
      imageUrl: "/gallery/gallery7.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 10,
      name: "WWF App",
      imageUrl: "/gallery/gallery8.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 11,
      name: "Shell Terminal",
      imageUrl: "/gallery/gallery9.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 12,
      name: "Security App",
      imageUrl: "/gallery/gallery10.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 1,
      name: "CloudKit",
      imageUrl: "/gallery/gallery11.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Terminal",
      imageUrl: "/gallery/gallery12.jpg",
      bgColor: "from-blue-400 to-blue-600",
    },
  ];

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 100);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full pt-24 overflow-hidden bg-black">
      {/* Main radial container */}
      <div
        ref={containerRef}
        className="flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <div className="relative w-full h-[900px] z-10">
          {appIcons.map((app: AppIcon, index: number) => {
            const angle = (index * 360) / appIcons.length + rotation;
            const normalizedAngle = ((angle % 360) + 360) % 360;
            const isTopHalf = normalizedAngle > 180 || normalizedAngle < 10;
            if (!isTopHalf) return null;
            const radius = 500;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const fadeRange = 90;
            const minOpacity = 0;
            const maxOpacity = 1;
            let opacity = maxOpacity;
            if (
              normalizedAngle > 170 - fadeRange &&
              normalizedAngle < 10 + fadeRange
            ) {
              const distance = Math.abs(normalizedAngle - 10);
              opacity =
                maxOpacity - (distance / fadeRange) * (maxOpacity - minOpacity);
            } else if (
              normalizedAngle > -10 - fadeRange &&
              normalizedAngle < 280 + fadeRange
            ) {
              const distance = Math.abs(normalizedAngle - 270);
              opacity =
                maxOpacity - (distance / fadeRange) * (maxOpacity - minOpacity);
            } else if (
              normalizedAngle > 50 + fadeRange &&
              normalizedAngle < 150 - fadeRange
            ) {
              opacity = minOpacity;
            }
            const faceCenterRotation = angle + 90;
            if (opacity <= 0) return null;
            return (
              <div
                key={index}
                className="absolute w-24 h-24 transition-transform duration-2000 ease-out group"
                style={{
                  left: "50%",
                  top: "55%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${faceCenterRotation}deg) `,
                  opacity: opacity,
                }}
              >
                {/* App icon container */}
                <div
                  className={`w-full h-full rounded-3xl bg-gradient-to-br bg-black
                               shadow-2xl flex items-center justify-center text-3xl
                               transition-all duration-300 ease-out cursor-pointer
                               group-hover:scale-110 group-hover:shadow-3xl
                               group-hover:z-50 relative border border-white/10 `}
                >
                  <Image
                    src={app.imageUrl}
                    alt={app.name}
                    fill
                    className="object-cover rounded-3xl p-0.25"
                    sizes="95px"
                  />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${app.bgColor} 
                                 opacity-0 group-hover:opacity-5 transition-opacity duration-300
                                 blur-xl -z-10`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central content */}
        <div className="absolute flex flex-col items-center justify-center z-[100] cursor-auto select-text mt-[-250px]">
          {/* Feature badge */}
          <button className="button mb-6">
            <div className="dots_border"></div>
            <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
              <Image src="/icons/flam.png" alt="flam" width={18} height={18} />
            </div>
            <span className="text_button">Features</span>
          </button>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-medium text-white mb-6 tracking-tight text-center pointer-events-none">
            Build for Impact
          </h1>

          {/* Subtitle */}
          <p className="text-l text-gray-400 mb-12 text-center max-w-md leading-relaxed pointer-events-none">
            Delivering cutting-edge functionality through
            <br />
            intelligent digital design.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="pointer-events inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Three Feature Cards */}
      <div
        style={{
          marginTop: "-300px",
          padding: "50px",
          width: "max-content",
          borderRadius: "8px",
          justifySelf: "center",
          borderTopWidth: "2px ",
          borderStyle: "solid",
          borderImage:
            "linear-gradient(to right, transparent, #ffffff18, transparent) 1",
          borderImageSlice: 1,
        }}
        className="mx-4 md:mx-8"
      >
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full justify-center items-center lg:items-stretch">
          {/* Card 1: Scalable Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundColor: "#080808",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "540px",
              width: "380px",
            }}
            className="flex flex-col items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">
                Scalable
                <br />
                Architecture
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "233px",
                width: "100%",
                background:
                  "linear-gradient(to top, #080111, #130424, #19052f, #19052f, #19052f, #300a5c)",
              }}
              className="rounded-xl p-4 h-32 flex items-center justify-center"
            >
              <Image
                src="/background/bg-block-card-1.png"
                alt="bg Icon"
                width={310}
                height={300}
              />
            </div>
          </motion.div>

          {/* Card 2: Seamless Cross-Platform Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundColor: "#080808",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "540px",
              width: "380px",
            }}
            className="flex flex-col items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">
                Seamless
                <br />
                Cross-Platform Delivery
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
              Web, mobile, and cloud — unified under one experience..
            </p>

            {/* Visual Element with Floating Texts */}
            <div
              style={{
                height: "233px",
                width: "100%",
                background:
                  "linear-gradient(to top, #080111, #130424, #19052f, #19052f, #19052f, #300a5c)",
              }}
              className="rounded-xl p-4 h-32 flex items-center justify-center relative overflow-hidden"
            >
              {/* Floating text elements */}
              {floatingTexts.map((floatingText) => (
                <div
                  key={floatingText.id}
                  className="absolute text-sm text-white/30 px-3 py-1.5 rounded-full border border-white/15 whitespace-nowrap pointer-events-none select-none bg-white/5 backdrop-blur-sm"
                  style={{
                    left: `${floatingText.x}px`,
                    top: `${floatingText.y}px`,
                    fontSize: "12px",
                    fontWeight: "500",
                    transition: "all 0.05s linear",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {floatingText.text}
                </div>
              ))}

              {/* Main icon */}
              <Image
                src="/background/bg-block-card-2.png"
                alt="bg Icon"
                width={74}
                height={74}
                className="relative z-10"
              />
            </div>
          </motion.div>

          {/* Card 3: AI Chatbot Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundColor: "#080808",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "540px",
              width: "380px",
            }}
            className="flex flex-col items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-3 text-center">
                AI Chatbot
                <br />
                Assistant
              </h3>
            </div>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "233px",
                width: "100%",
                background:
                  "linear-gradient(to top, #080111, #130424, #19052f, #19052f, #19052f, #300a5c)",
              }}
              className="rounded-xl p-4 h-32 flex flex-col items-center justify-center"
            >
              <Image
                src="/background/bg-block-card-3-1.png"
                alt="bg Icon"
                width={90}
                height={74}
                className="mb-4"
              />
              <Image
                src="/background/bg-block-card-3.png"
                alt="bg Icon"
                width={200}
                height={74}
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Features Block */}
        <div
          style={{
            width: "100%",
            borderWidth: "0.5px",
            borderStyle: "solid",
            borderImage:
              "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
            borderImageSlice: 1,
            marginTop: "35px",
          }}
        />
        <div className="border-gray-700/30 p-8 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fast Deployment */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-normal text-lg">
                  Fast Deployment
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rapid development cycles with <br /> CI/CD.
              </p>
            </div>

            {/* Security First */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-normal text-lg">
                  Security First
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                End-to-end encryption & best <br />
                practices.
              </p>
            </div>

            {/* Optimized UX/UI */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-normal text-lg">
                  Optimized UX/UI
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Smart design that enhances user <br />
                experience.
              </p>
            </div>

            {/* Custom Integrations */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-normal text-lg">
                  Custom Integrations
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tailored APIs and third-party
                <br /> syncs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialSwiper;
