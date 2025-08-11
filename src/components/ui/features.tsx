"use client";
import React, { useEffect, useState, useRef } from "react";
import "../../app/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface AppIcon {
  id: number;
  name: string;
  icon: string;
  bgColor: string;
}

const RadialSwiper: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // App icons for the radial carousel
  const appIcons: AppIcon[] = [
    {
      id: 1,
      name: "CloudKit",
      icon: "☁️",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Terminal",
      icon: "💻",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      icon: "📊",
      bgColor: "from-purple-500 to-purple-700",
    },
    {
      id: 4,
      name: "Food Delivery",
      icon: "🍔",
      bgColor: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      name: "Media Hub",
      icon: "🎬",
      bgColor: "from-pink-400 to-pink-600",
    },
    {
      id: 6,
      name: "File Manager",
      icon: "📁",
      bgColor: "from-blue-300 to-blue-500",
    },
    {
      id: 7,
      name: "Analytics",
      icon: "📈",
      bgColor: "from-indigo-400 to-indigo-600",
    },
    {
      id: 8,
      name: "Link Manager",
      icon: "🔗",
      bgColor: "from-gray-300 to-gray-500",
    },
    {
      id: 9,
      name: "Design Studio",
      icon: "🎨",
      bgColor: "from-purple-300 to-purple-500",
    },
    {
      id: 10,
      name: "WWF App",
      icon: "🌍",
      bgColor: "from-green-400 to-green-600",
    },
    {
      id: 11,
      name: "Shell Terminal",
      icon: "🐚",
      bgColor: "from-purple-200 to-purple-400",
    },
    {
      id: 12,
      name: "Security App",
      icon: "🔒",
      bgColor: "from-gray-600 to-gray-800",
    },
    {
      id: 1,
      name: "CloudKit",
      icon: "☁️",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Terminal",
      icon: "💻",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      icon: "📊",
      bgColor: "from-purple-500 to-purple-700",
    },
    {
      id: 1,
      name: "CloudKit",
      icon: "☁️",
      bgColor: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Terminal",
      icon: "💻",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      icon: "📊",
      bgColor: "from-purple-500 to-purple-700",
    },
    {
      id: 2,
      name: "Terminal",
      icon: "💻",
      bgColor: "from-gray-700 to-gray-900",
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      icon: "📊",
      bgColor: "from-purple-500 to-purple-700",
    },
  ];

  // Auto rotation
  useEffect(() => {
    if (!mounted || !autoRotate) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5);
    }, 100);

    return () => clearInterval(interval);
  }, [mounted, autoRotate]);

  if (!mounted) return null;

  return (
    <div className="relative w-full  bg-gradient-to-br from-gray-900 via-black  pt-24 overflow-hidden select-none">
      {/* Main radial container */}
      <div
        ref={containerRef}
        className="flex items-center justify-center h-full cursor-grab active:cursor-grabbing"
      >
        <div className="relative w-full h-[750px]">
          {appIcons.map((app: AppIcon, index: number) => {
            const angle = (index * 360) / appIcons.length + rotation;
            const normalizedAngle = ((angle % 360) + 360) % 360;
            const isTopHalf = normalizedAngle > 180 || normalizedAngle < 10;
            if (!isTopHalf) return null;
            const radius = 400;
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
            if (opacity <= 0) return null;
            return (
              <div
                key={index}
                className="absolute w-24 h-24 transition-transform duration-2000 ease-out group"
                style={{
                  left: "50%",
                  top: "55%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) `,
                  opacity: opacity,
                }}
              >
                {/* App icon container */}
                <div
                  className={`w-full h-full rounded-3xl bg-gradient-to-br ${app.bgColor} 
                               shadow-2xl flex items-center justify-center text-3xl
                               transition-all duration-300 ease-out cursor-pointer
                               group-hover:scale-110 group-hover:shadow-3xl
                               group-hover:z-50 relative border border-white border-opacity-20`}
                >
                  {app.icon}

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${app.bgColor} 
                                 opacity-0 group-hover:opacity-50 transition-opacity duration-300
                                 blur-xl -z-10`}
                  />
                </div>

                {/* App name label */}
                <div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                               px-3 py-1 bg-black bg-opacity-60 text-white text-sm rounded-lg
                               opacity-0 group-hover:opacity-100 transition-all duration-200
                               whitespace-nowrap backdrop-blur-sm border border-white border-opacity-20"
                >
                  {app.name}
                </div>
              </div>
            );
          })}

          {/* Gradient shadow overlay for bottom half */}
          {/* <div className="absolute inset-x-0 bottom-75 h-[20px] pointer-events-none bg-gradient-to-t from-black to-black/80" /> */}
          {/* <div className="absolute inset-x-0 bottom-0 h-[300px] pointer-events-none bg-black" /> */}
        </div>

        {/* Central content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          {/* Feature badge */}
          <button className="button">
            <div className="dots_border"></div>
            <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
              <Image src="/icons/flam.png" alt="flam" width={18} height={18} />
            </div>
            <span className="text_button">Features</span>
          </button>

          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-medium text-white mb-6 tracking-tight text-center">
            Build for Impact
          </h1>

          {/* Subtitle */}
          <p className="text-l text-gray-400 mb-12 text-center max-w-md leading-relaxed">
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
              className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RadialSwiper;
