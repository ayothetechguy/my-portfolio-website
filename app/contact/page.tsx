'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as Homepage */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200' 
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.img
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src="/Head.jpg"
                alt="Ayoolumi Melehon"
                className="w-10 h-10 rounded-full object-cover border-2 border-teal-500 group-hover:border-teal-600 transition-all shadow-md"
              />
              <span className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                AYOOLUMI MELEHON
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`relative ${item === 'Contact' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg font-medium hover:from-teal-700 hover:to-teal-600 transition-all shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-gray-200 bg-white"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={`${item === 'Contact' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - White */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Let&apos;s Build Something Together</h1>
            <p className="text-2xl text-gray-600">Whether you need analytics support, ML prototypes, or research collaboration, I&apos;m here to help</p>
          </motion.div>
        </div>
      </section>

      {/* Two Column Layout - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Your company or institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I&apos;m interested in:</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto bg-gray-50 rounded-lg p-3 border border-gray-200">
                    {[
                      "Product Analytics",
                      "Workforce Analytics",
                      "ML/AI Solutions",
                      "BI & Dashboards",
                      "Data Engineering",
                      "Research Collaboration",
                      "Training/Consulting",
                      "Other"
                    ].map((option, index) => (
                      <label key={index} className="flex items-center text-gray-700 hover:text-teal-600 transition cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-teal-600 bg-white border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="ml-2">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    placeholder="Tell me about your project or needs..."
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                      <option>Urgent</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition">
                      <option>&lt;£5k</option>
                      <option>£5-15k</option>
                      <option>£15k+</option>
                      <option>TBD</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  {[
                    { icon: "📧", title: "Email", value: "ayoolumimelehon@gmail.com", link: "mailto:ayoolumimelehon@gmail.com" },
                    { icon: "📧", title: "Secondary Email", value: "info@ayofemimelehon.info", link: "mailto:info@ayofemimelehon.info" },
                    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/ayoolumi-melehon", link: "https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" },
                    { icon: "🐙", title: "GitHub", value: "github.com/ayothetechguy", link: "https://github.com/ayothetechguy" },
                    { icon: "🎥", title: "YouTube", value: "youtube.com/@ayoolumi_oluwafemi", link: "https://www.youtube.com/@ayoolumi_oluwafemi" },
                    { icon: "📍", title: "Location", value: "Grangemouth, Scotland, UK\nAvailable: On-site | Hybrid | Remote", link: null },
                    { icon: "⏰", title: "Response Time", value: "Within 24 hours on business days", link: null }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 transition break-words">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">I&apos;m actively seeking opportunities in:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>→ Data Analyst / Analytics Engineer roles</li>
                      <li>→ Product Analytics positions</li>
                      <li>→ Workforce/People Analytics</li>
                      <li>→ Research Assistant opportunities</li>
                      <li>→ ML/AI project roles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Also available for:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>→ Consulting projects (SMEs, nonprofits)</li>
                      <li>→ Short-term contracts</li>
                      <li>→ Training & workshops</li>
                      <li>→ Research collaborations</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next</h2>
                <ol className="space-y-3">
                  {[
                    "You submit the form",
                    "I review your requirements (usually within 24 hours)",
                    "We schedule a free 30-minute discovery call",
                    "I provide a proposal or consultation",
                    "We agree on scope, timeline, and engagement"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Ready CTA - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gray-50 rounded-2xl border-2 border-gray-200 p-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not ready to reach out yet?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/portfolio" className="px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
                Explore Portfolio
              </Link>
              <Link href="/about" className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                Learn More About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Dark Grey */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ayoolumi Melehon</h3>
              <p className="text-gray-400">Data Analyst & AI Specialist helping organizations leverage data for strategic decision-making.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Portfolio', 'Services', 'Contact'].map(item => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="block text-gray-400 hover:text-white transition">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="mailto:ayoolumimelehon@gmail.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-sm">
                  E
                </a>
                <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-sm">
                  L
                </a>
                <a href="https://github.com/ayothetechguy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-sm">
                  G
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2025 Ayoolumi Melehon | Grangemouth, Scotland | Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}