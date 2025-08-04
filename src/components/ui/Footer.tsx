"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Image
                src="/logo.png"
                alt="Projectly Logo"
                width={100}
                height={40}
                // className="h-10 w-auto"
              />
            </div>
            <div className="text-gray-400 text-sm mb-4">
              <p>Made with 💜 and passion</p>
              <p className="text-white">- Offbeat_graphics (Hama).</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-6">Social</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Twitter (X)
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-light text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-6">Subscribe Form</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "50px",
                  border:
                    "2px solid var(--color-white-15, rgba(255, 255, 255, 0.15))",
                }}
              >
                {/* className="flex items-center border border-gray-700 rounded-full " */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email...."
                  className="w-40 px-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
                  required
                />
                <button
                  type="submit"
                    style={{ marginRight:"5px" }}
                  className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white  text-sm font-medium hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 rounded-full px-6.5 py-3"
                >
                  Subscribe Us
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Offbeat_graphics. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
