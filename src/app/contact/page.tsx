"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/form/contactForm";
import TagSections from "@/components/ui/tagSections";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function ContactPage() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Services", href: "/" },
    { name: "Portfolio", href: "/" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <Navbar navItems={navItems} />
      <main className="min-h-screen bg-black text-white pt-25">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-40 py-20">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <TagSections
                img={<p className="font-bold text-[14px]">24/7</p>}
                title="Contact Us"
                className="mb-10 flex justify-center w-fit mx-auto"
              />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h1
                  className="text-5xl md:text-7xl font-medium mb-6 tracking-tight pointer-events-none"
                  style={{
                    background: "linear-gradient(to right, #FFFFFF, #FFFFFF4D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Let&apos;s Build Something
                </h1>
                <h2
                  className="text-4xl md:text-6xl font-medium mb-6 tracking-tight pointer-events-none"
                  style={{
                    background: "linear-gradient(to right, #FFFFFF, #FFFFFF4D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Amazing Together
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto leading-relaxed pointer-events-none"
              >
                Ready to transform your business with innovative digital
                solutions?
                <br />
                Our team is here to help you every step of the way.
              </motion.p>

              <motion.div
                className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  boxShadow: `
                  0 10px 40px rgba(79, 26, 214, 0.4),
                  0 -10px 40px rgba(128, 89, 227, 0.2),
                  -20px 0 60px rgba(79, 26, 214, 0.3),
                  20px 0 60px rgba(128, 89, 227, 0.3),
                  0 0 120px rgba(79, 26, 214, 0.5)
                `,
                }}
              >
                Fill The Form Out!
              </motion.div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
