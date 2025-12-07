"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import LightRays from "../LightRays";
import TagSections from "./tagSections";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-40"
    >
      <div
        className=" relative  bg-[#080808] py-15 rounded-[8px]"
        style={{
          backgroundSize: "cover,100%",
          backgroundPosition: "center, top",
          backgroundRepeat: "no-repeat, no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5534b2"
            raysSpeed={0.5}
            lightSpread={1.1}
            rayLength={3}
            fadeDistance={1.8}
            followMouse={true}
            saturation={2}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
        <div className="relative z-50 max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Services Badge */}
          {/* <button className="button mb-6">
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
          </button> */}
          <TagSections
            img={
              <Image
                src="/icons/settings.png"
                alt="settings"
                width={18}
                height={18}
                className="mr-0.2"
              />
            }
            title="Services"
            className="mb-10 z-10"
          />
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
        <div className="relative z-50 mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1170px] mx-auto">
          {/* Cards */}
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
                  <Image
                    src="/services/ai-integration.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                AI Integration & Intelligent Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Empower Your Teams With Intelligence.
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
              Your teams waste time on slow processes — we integrate
              intelligence that eliminates friction.
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
                  <Image
                    src="/services/chatbot.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                Chatbots & Autonomous Agents
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Support That Never Sleeps.
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
              Your support is overwhelmed — our autonomous agents respond and
              execute continuously.
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
                src="/services/chatbot.jpg"
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
                  <Image
                    src="/services/data.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                Data Governance & Quality
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Transform Chaos Into Clarity.
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
              Your data is scattered — we eliminate chaos and secure your
              decisions.
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
                src="/services/data.jpg"
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
                  <Image
                    src="/services/engineering.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                Digital Platforms & Product Engineering
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Build Tools That Drive Growth.
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
              Your tools limit your growth — we create modern and
              high-performing platforms.
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
                src="/services/platform.jpg"
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
                  <Image
                    src="/services/infrastructure.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                Cloud & Scalable Infrastructure
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Foundation Built For Scale.
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
              Your infrastructure isn't stable — we build a fast and secure
              foundation.
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
                src="/services/cloude.jpg"
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
                 <Image
                    src="/services/support.svg"
                    alt="AI Integration"
                    width={24}
                    height={24}
                  />
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
                24/7 Support & Outsourcing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed pl-12">
                Expert Teams, Always Available.
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
              You lack resources — we support you continuously with the right
              experts.
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
                src="/services/support.jpg"
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
