"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="w-full max-w-6xl mx-auto"
    >
      <div
        className="relative p-8 rounded-2xl border border-white/10"
        style={{
          background: "#080808",
          boxShadow: `
            0 -25px 80px rgba(79, 26, 214, 0.6),
            0 -15px 40px rgba(79, 26, 214, 0.4),
            0 15px 30px rgba(79, 26, 214, 0.2),
            0 25px 50px rgba(79, 26, 214, 0.15),
            -20px 0 60px rgba(79, 26, 214, 0.3),
            20px 0 60px rgba(79, 26, 214, 0.3)
          `,
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 text-left">
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Mohamed"
                className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-left"
                required
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 text-left">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Romdhani"
                className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-left"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 text-left">
              How can we reach you?*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="offbeat.gr@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-left"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 text-left">
                Where Are you from?*
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 appearance-none cursor-pointer text-left"
                required
              >
                <option value="" className="text-gray-500">
                  Select your country...
                </option>
                <option value="tunisia" className="text-white bg-black">
                  Tunisia
                </option>
                <option value="usa" className="text-white bg-black">
                  United States
                </option>
                <option value="canada" className="text-white bg-black">
                  Canada
                </option>
                <option value="uk" className="text-white bg-black">
                  United Kingdom
                </option>
                <option value="france" className="text-white bg-black">
                  France
                </option>
                <option value="germany" className="text-white bg-black">
                  Germany
                </option>
                <option value="other" className="text-white bg-black">
                  Other
                </option>
              </select>
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2 text-left">
                What's the type of your company?*
              </label>
              <select
                name="companyType"
                value={formData.companyType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 appearance-none cursor-pointer text-left"
                required
              >
                <option value="" className="text-gray-500">
                  Select category
                </option>
                <option value="startup" className="text-white bg-black">
                  Startup
                </option>
                <option value="small-business" className="text-white bg-black">
                  Small Business
                </option>
                <option value="enterprise" className="text-white bg-black">
                  Enterprise
                </option>
                <option value="agency" className="text-white bg-black">
                  Agency
                </option>
                <option value="freelancer" className="text-white bg-black">
                  Freelancer
                </option>
                <option value="non-profit" className="text-white bg-black">
                  Non-Profit
                </option>
                <option value="other" className="text-white bg-black">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2 text-left">
              Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message..."
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 resize-none text-left"
              required
            />
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(79, 26, 214, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Submit Now
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
