"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LightRays from "../LightRays";

export default function Services() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-40 bg-black pb-20">
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
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Services Badge */}
          <button className="button mb-6">
            <div className="dots_border"></div>
            <div className="z-10 w-6.5 h-6.5 rounded-full border-2 border-white/30 bg-gradient-to-br from-[#4F1AD6] to-[#8059E3] flex items-center justify-center">
              <Image
                src="/icons/settings.png"
                alt="settings"
                width={14}
                height={14}
                className="mr-0.2"
              />
            </div>
            <span className="text_button">Services</span>
          </button>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-medium text-white mb-6 tracking-tight text-center pointer-events-none">
              We Build the Future,
            </h1>
            <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 tracking-tight text-center pointer-events-none">
              With Those Who Dare to Lead It.
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-l text-gray-400 mb-12 text-center max-w-lg leading-relaxed pointer-events-none"
          >
            From code to strategy, we deliver future-ready digital solutions
            that
            <br />
            drive performance, elevate brands, and empower growth.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="pointer-events inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-md text-sm font-medium transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book a 15-min call
            </Link>
          </motion.div>
        </div>
        <div className="mt-14 flex flex-wrap lg:flex-row md:gap-6 w-fit justify-center items-center lg:items-stretch">
          {/* Card 1: Scalable Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundImage: "url('/background/bg-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "456px",
              width: "370px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start justify-between w-100 pl-12 pr-12">
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
                <div>
                  <Image
                    src="/icons/arrow-nav.png"
                    alt="Arrow Navigation"
                    width={15}
                    height={15}
                    className="opacity-50"
                  />
                </div>
              </div>
              <h3 className="text-white text-md font-medium pl-12">
                Custom Digital Product Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build What Your Vision Deserves.
              </p>
            </div>
            <div
              style={{
                width: "100%",
                borderWidth: "1px ",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to right, transparent, #ffffff1d, transparent) 1",
                borderImageSlice: 1,
              }}
            />
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 pl-2">
              Future-ready codebases that grow with your business..
            </p>

            {/* Visual Element */}
            <div
              style={{
                height: "158px",
                width: "100%",
              }}
              className="w-[310px] h-[158px]  flex items-center justify-center overflow-hidden rounded-xl"
            >
              <Image
                src="/services/digital-service.jpg"
                alt="bg Icon"
                width={400}
                height={200}
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
