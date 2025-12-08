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
        <div className="relative z-50 mt-14 flex flex-wrap lg:flex-row md:gap-4 max-w-[1190px] mx-auto justify-center items-center px-5">
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6  hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%] ">
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
              <h3 className="text-white text-md font-medium ">
                AI Integration & Intelligent Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed ">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="AI Integration Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between">
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
              <h3 className="text-white text-md font-medium">
                Chatbots & Autonomous Agents
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="Chatbot Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
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
              <h3 className="text-white text-md font-medium">
                Data Governance & Quality
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="Data Governance Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
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
              <h3 className="text-white text-md font-medium">
                Digital Platforms & Product Engineering
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="Digital Platform Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
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
              <h3 className="text-white text-md font-medium">
                Cloud & Scalable Infrastructure
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed ">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="Cloud Infrastructure Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
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
              width: "330px",
            }}
            className="flex flex-col  items-center justify-between border border-gray-700/50 rounded-2xl p-6 w-80 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex flex-col w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
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
              <h3 className="text-white text-md font-medium">
                24/7 Support & Outsourcing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                alt="Support Service"
                width={310}
                height={158}
                quality={75}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA2gA8/9k="
                sizes="(max-width: 768px) 100vw, 310px"
                className="object-cover rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
