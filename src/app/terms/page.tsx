"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen py-20 px-4 sm:px-8 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <p className="text-gray-400 text-lg">
              Last Updated: December 8, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Projectly. These Terms and Conditions (&quot;Terms&quot;)
                  govern your use of our website, services, and innovative
                  digital solutions. By accessing or using our services, you
                  agree to be bound by these Terms. If you do not agree with any
                  part of these Terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  2. Services
                </h2>
                <p>
                  Projectly provides innovative technology solutions including
                  but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>AI Integration & Intelligent Solutions</li>
                  <li>Chatbots & Autonomous Agents</li>
                  <li>Data Governance & Quality Management</li>
                  <li>Digital Platforms & Product Engineering</li>
                  <li>Cloud & Scalable Infrastructure</li>
                  <li>24/7 Support & Outsourcing Services</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of our services at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  3. User Responsibilities
                </h2>
                <p>When using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Provide accurate and complete information when required
                  </li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                  <li>
                    Use our services in compliance with all applicable laws and
                    regulations
                  </li>
                  <li>
                    Not engage in any activity that may harm or disrupt our
                    services
                  </li>
                  <li>
                    Not attempt to gain unauthorized access to our systems or
                    networks
                  </li>
                  <li>
                    Not use our services for any illegal or unauthorized purpose
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  4. Intellectual Property
                </h2>
                <p>
                  All content, materials, and intellectual property on our
                  website and services, including but not limited to text,
                  graphics, logos, images, software, and code, are owned by or
                  licensed to Projectly and are protected by copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className="mt-4">
                  You may not reproduce, distribute, modify, or create
                  derivative works from any content without our express written
                  permission.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  5. Project Deliverables
                </h2>
                <p>For custom development projects:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Project scope, timeline, and deliverables will be defined in
                    a separate agreement
                  </li>
                  <li>
                    Changes to project scope may result in additional fees and
                    timeline adjustments
                  </li>
                  <li>
                    Client approval is required at designated project milestones
                  </li>
                  <li>
                    Final deliverables will be provided upon completion of
                    payment obligations
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  6. Payment Terms
                </h2>
                <p>
                  Payment terms will be specified in individual service
                  agreements. Generally:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    Payment schedules will be outlined in project proposals
                  </li>
                  <li>Late payments may incur additional fees</li>
                  <li>
                    All fees are non-refundable unless otherwise stated in
                    writing
                  </li>
                  <li>Prices are subject to change with prior notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  7. Confidentiality
                </h2>
                <p>
                  We respect the confidentiality of your business information.
                  Both parties agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Maintain confidentiality of proprietary information</li>
                  <li>
                    Use confidential information only for the purposes of the
                    engagement
                  </li>
                  <li>
                    Not disclose confidential information to third parties
                    without consent
                  </li>
                  <li>
                    Return or destroy confidential materials upon project
                    completion
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  8. Warranties and Disclaimers
                </h2>
                <p>
                  Our services are provided &quot;as is&quot; without warranties of any
                  kind, either express or implied. We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Our services will meet your specific requirements</li>
                  <li>
                    Our services will be uninterrupted, timely, secure, or
                    error-free
                  </li>
                  <li>
                    Results obtained from using our services will be accurate or
                    reliable
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  9. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, Projectly shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages, including but not limited to loss of
                  profits, data, use, goodwill, or other intangible losses
                  resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Your use or inability to use our services</li>
                  <li>
                    Any unauthorized access to or use of our servers and/or any
                    personal information stored therein
                  </li>
                  <li>
                    Any interruption or cessation of transmission to or from our
                    services
                  </li>
                  <li>
                    Any bugs, viruses, or malware that may be transmitted
                    through our services
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  10. Indemnification
                </h2>
                <p>
                  You agree to indemnify and hold harmless Projectly, its
                  affiliates, officers, directors, employees, and agents from
                  any claims, damages, losses, liabilities, and expenses
                  (including legal fees) arising from your use of our services
                  or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  11. Termination
                </h2>
                <p>
                  We reserve the right to terminate or suspend your access to
                  our services immediately, without prior notice or liability,
                  for any reason, including breach of these Terms. Upon
                  termination, your right to use our services will immediately
                  cease.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  12. Governing Law
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of the jurisdiction in which Projectly operates,
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  13. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify or replace these Terms at any
                  time. Material changes will be notified through our website or
                  via email. Your continued use of our services after any
                  changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">
                  14. Contact Information
                </h2>
                <p>
                  If you have any questions about these Terms, please contact us
                  through our{" "}
                  <Link
                    href="/contact"
                    className="text-purple-500 hover:text-purple-400 underline"
                  >
                    contact page
                  </Link>
                  .
                </p>
              </section>

              <section className="mt-12 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  By using Projectly&apos;s services, you acknowledge that you have
                  read, understood, and agree to be bound by these Terms and
                  Conditions.
                </p>
              </section>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#4F1AD6] to-[#8059E3] text-white px-8 py-4 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
