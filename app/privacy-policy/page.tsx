'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = ['/1.jpg', '/11.jpg', '/111.jpg', '/1111.jpg', '/11111.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 10, ease: "easeOut" }
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-display font-bold text-white">
                AYOOLUMI MELEHON
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-200 hover:text-white transition font-medium">Home</Link>
                <Link href="/about" className="text-gray-200 hover:text-white transition font-medium">About</Link>
                <Link href="/portfolio" className="text-gray-200 hover:text-white transition font-medium">Portfolio</Link>
                <Link href="/services" className="text-gray-200 hover:text-white transition font-medium">Services</Link>
                <Link href="/experience" className="text-gray-200 hover:text-white transition font-medium">Experience</Link>
                <Link href="/gallery" className="text-gray-200 hover:text-white transition font-medium">Gallery</Link>
                <Link href="/contact" className="text-gray-200 hover:text-white transition font-medium">Contact</Link>
              </div>

              <button 
                className="md:hidden p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pb-4 border-t border-white/10 mt-2">
                <div className="flex flex-col space-y-2 pt-2">
                  <Link href="/" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Home</Link>
                  <Link href="/about" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">About</Link>
                  <Link href="/portfolio" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Portfolio</Link>
                  <Link href="/services" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Services</Link>
                  <Link href="/experience" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Experience</Link>
                  <Link href="/gallery" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Gallery</Link>
                  <Link href="/contact" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Contact</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8 md:p-12"
          >
            <h1 className="text-4xl font-display font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">Last Updated: January 2025</p>

            <div className="space-y-8 text-gray-200">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Ayoolumi Melehon ("I", "me", or "my") operates ayofemimelehon.info (the "Website"). 
                  This Privacy Policy explains how I collect, use, and protect your personal information 
                  when you visit my website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Information I Collect</h2>
                <h3 className="text-xl font-semibold text-white mb-2">Information You Provide:</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name and email address (when you contact me)</li>
                  <li>Organization and project details (via contact form)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>IP address (anonymized)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. How I Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To respond to your inquiries and contact requests</li>
                  <li>To improve website functionality and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                <p className="leading-relaxed mb-4">
                  This website uses cookies to enhance your browsing experience and analyze site traffic. 
                  Cookies are small text files stored on your device.
                </p>
                <p className="leading-relaxed">
                  You can control cookies through your browser settings. However, disabling cookies may 
                  affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">
                  I do not sell, trade, or rent your personal information to third parties. I may share 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements</li>
                  <li>To protect my rights and safety</li>
                  <li>With service providers (e.g., hosting, analytics) under strict confidentiality agreements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Data Security</h2>
                <p className="leading-relaxed">
                  I implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. However, 
                  no internet transmission is completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights (GDPR/UK GDPR)</h2>
                <p className="leading-relaxed mb-4">
                  Under UK GDPR, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate data</li>
                  <li><strong>Erasure:</strong> Request deletion of your data</li>
                  <li><strong>Restriction:</strong> Limit how I use your data</li>
                  <li><strong>Portability:</strong> Receive your data in a portable format</li>
                  <li><strong>Object:</strong> Object to processing of your data</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, contact me at: <a href="mailto:info@ayofemimelehon.info" className="text-blue-400 hover:text-blue-300">info@ayofemimelehon.info</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                <p className="leading-relaxed">
                  I retain personal information only as long as necessary to fulfill the purposes outlined 
                  in this policy, or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
                <p className="leading-relaxed">
                  This website may contain links to external sites. I am not responsible for the privacy 
                  practices of these third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  I may update this Privacy Policy periodically. Changes will be posted on this page with 
                  an updated "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights, contact:
                </p>
                <div className="mt-4 bg-white/10 rounded-lg p-4">
                  <p><strong>Email:</strong> <a href="mailto:info@ayofemimelehon.info" className="text-blue-400 hover:text-blue-300">info@ayofemimelehon.info</a></p>
                  <p><strong>Location:</strong> Grangemouth, Scotland, UK</p>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">© 2025 Ayoolumi Melehon | Grangemouth, Scotland</p>
          </div>
        </footer>
      </div>
    </div>
  );
}