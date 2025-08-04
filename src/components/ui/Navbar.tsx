"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Projectly Logo" 
                width={100} 
                height={40} 
                // className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group hover:from-white hover:to-white/80"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-white to-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-[18px] py-[10px] rounded-[10px] text-sm font-medium hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/80 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            height: "auto",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          },
        }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-md border-t border-white/20">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:from-white hover:to-white/80"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="pt-2"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white block px-[18px] py-[10px] rounded-[10px] text-base font-medium text-center transition-all duration-200 hover:from-[#4F1AD6]/90 hover:to-[#8059E3]/90"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Light gray divider */}
      <div className="border-b border-gray-300/10"></div>
    </nav>
  );
}
