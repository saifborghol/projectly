"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
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
              Privacy Policy
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
                <h2 className="text-3xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  At Projectly, we are committed to protecting your privacy and ensuring the security of your 
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                  your information when you use our website and services. Please read this policy carefully to 
                  understand our practices regarding your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p>We collect several types of information to provide and improve our services:</p>
                
                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">2.1 Personal Information</h3>
                <p>When you interact with our services, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Job title and professional details</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">2.2 Technical Information</h3>
                <p>We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">2.3 Project Information</h3>
                <p>During project engagement, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Project requirements and specifications</li>
                  <li>Business processes and workflows</li>
                  <li>Technical documentation</li>
                  <li>Feedback and communication records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
                  <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                  <li><strong>Project Management:</strong> To plan, execute, and deliver custom solutions</li>
                  <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
                  <li><strong>Analytics:</strong> To understand user behavior and improve our offerings</li>
                  <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  <li><strong>Business Operations:</strong> To manage contracts, invoicing, and payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">4. How We Share Your Information</h2>
                <p>We may share your information in the following circumstances:</p>
                
                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">4.1 Service Providers</h3>
                <p>
                  We may share information with third-party service providers who assist us in operating our 
                  business, including cloud hosting, payment processing, analytics, and customer support services.
                </p>

                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">4.2 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  to the acquiring entity.
                </p>

                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">4.3 Legal Requirements</h3>
                <p>
                  We may disclose your information when required by law, court order, or government request, or 
                  to protect our rights, property, or safety.
                </p>

                <h3 className="text-2xl font-semibold text-white mt-6 mb-3">4.4 With Your Consent</h3>
                <p>
                  We may share your information with third parties when you have given us explicit permission to 
                  do so.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These measures 
                  include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Secure development practices</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While 
                  we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by 
                  law. When we no longer need your information, we will securely delete or anonymize it.
                </p>
                <p className="mt-4">
                  Retention periods vary depending on the type of information and purpose:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Project-related data: Duration of engagement plus applicable warranty period</li>
                  <li>Financial records: As required by tax and accounting regulations</li>
                  <li>Marketing data: Until you withdraw consent</li>
                  <li>Technical logs: Typically 90 days unless needed for security purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have the following rights regarding your personal 
                  information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Request limitation on how we use your information</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Objection:</strong> Object to our processing of your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us through our{" "}
                  <Link href="/contact" className="text-purple-500 hover:text-purple-400 underline">
                    contact page
                  </Link>.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">8. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies are small text files stored on your device that help us:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit 
                  your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">9. Third-Party Services</h2>
                <p>
                  Our website may contain links to third-party websites or integrate with third-party services. 
                  We are not responsible for the privacy practices of these third parties. We encourage you to 
                  review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                  personal information from children. If you believe we have inadvertently collected information 
                  from a child, please contact us immediately, and we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">11. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of 
                  residence. These countries may have different data protection laws. We ensure appropriate 
                  safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">12. Changes to Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                  legal, operational, or regulatory reasons. We will notify you of material changes by posting 
                  the updated policy on our website and updating the &quot;Last Updated&quot; date. Your continued use of 
                  our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">13. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                  practices, please contact us:
                </p>
                <ul className="list-none pl-0 space-y-2 mt-4">
                  <li>Through our{" "}
                    <Link href="/contact" className="text-purple-500 hover:text-purple-400 underline">
                      contact form
                    </Link>
                  </li>
                  <li>By email at: privacy@projectly.com</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">14. GDPR Compliance (For EU Residents)</h2>
                <p>
                  If you are located in the European Union, you have additional rights under the General Data 
                  Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Right to be informed about data collection and use</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                  <li>Right not to be subject to automated decision-making</li>
                </ul>
                <p className="mt-4">
                  Our legal basis for processing your data includes contract performance, legal obligations, 
                  legitimate interests, and your consent where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-semibold text-white mb-4">15. CCPA Compliance (For California Residents)</h2>
                <p>
                  If you are a California resident, you have additional rights under the California Consumer 
                  Privacy Act (CCPA):
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to know if personal information is sold or disclosed</li>
                  <li>Right to opt-out of the sale of personal information</li>
                  <li>Right to non-discrimination for exercising privacy rights</li>
                </ul>
              </section>

              <section className="mt-12 pt-8 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  By using Projectly&apos;s services, you acknowledge that you have read and understood this Privacy 
                  Policy and agree to our collection, use, and disclosure of your information as described herein.
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
