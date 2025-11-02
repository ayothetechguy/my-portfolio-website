'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function About() {
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
                  className={`relative ${item === 'About' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
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
                    className={`${item === 'About' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-2xl text-gray-600">Data Analyst • ML Engineer • AI Researcher</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who I Am</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                MSc in Artificial Intelligence graduate from the University of Stirling with CompTIA Data+ certification, 
                specializing in end-to-end analytics solutions that bridge technical implementation and business value.
              </p>
              <p>
                Currently based in Edinburgh, Scotland, I transform complex data into actionable insights using modern 
                analytics techniques, machine learning models, and intelligent automation. My work spans product analytics, 
                workforce intelligence, and applied ML research.
              </p>
              <p>
                With 8+ years of combined experience across analytics, business intelligence, and operations, I bring a 
                practical, outcome-focused approach to every project—shipping MVPs, iterating with feedback, and maintaining 
                clear communication with stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Approach - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3 bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Outcome-Focused</h3>
                  <p className="text-gray-600">Ship MVPs, iterate with feedback, and focus on measurable impact</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="text-4xl">🔒</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Privacy-Aware</h3>
                  <p className="text-gray-600">Synthetic data demos, documented controls, and ethical data practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Clear Communication</h3>
                  <p className="text-gray-600">Translate technical concepts to plain language for all stakeholders</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <div className="text-4xl">📚</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Continuous Learning</h3>
                  <p className="text-gray-600">Self-directed learner with quick tool adoption and growth mindset</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Expertise - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Core Expertise</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Analytics & Business Intelligence</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• SQL Query Design & Optimization</li>
                  <li>• Python Analytics (pandas, pipelines)</li>
                  <li>• Power BI Dashboard Development</li>
                  <li>• Cohort & Retention Analysis</li>
                  <li>• A/B Test Interpretation</li>
                  <li>• KPI Design & Tracking</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning & AI</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Classification Models (RF, GBM)</li>
                  <li>• Anomaly Detection (Isolation Forest)</li>
                  <li>• NLP & Topic Modeling</li>
                  <li>• Time Series Forecasting</li>
                  <li>• Model Evaluation & Validation</li>
                  <li>• Behavioral Simulation</li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engineering</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Data Pipeline Design</li>
                  <li>• ETL Automation</li>
                  <li>• Data Quality Validation</li>
                  <li>• Star Schema Warehousing</li>
                  <li>• Multi-format Import</li>
                  <li>• Audit Trail Documentation</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Education & Certifications</h2>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-teal-500 pl-6 bg-gray-50 p-6 rounded-r-xl"
              >
                <div className="text-teal-600 font-semibold mb-2">2023-2025</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MSc Artificial Intelligence</h3>
                <p className="text-gray-700 mb-2 font-medium">University of Stirling</p>
                <p className="text-gray-600">Dissertation: Behavioral modeling using UK Census data</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-blue-500 pl-6 bg-gray-50 p-6 rounded-r-xl"
              >
                <div className="text-blue-600 font-semibold mb-2">2018</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CompTIA Data+</h3>
                <p className="text-gray-700">Data Analysis • BI • Data Storytelling</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-purple-500 pl-6 bg-gray-50 p-6 rounded-r-xl"
              >
                <div className="text-purple-600 font-semibold mb-2">2015-2018</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PGDip Computer Science</h3>
                <p className="text-gray-700">Abubakar Tafawa Balewa University</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-green-500 pl-6 bg-gray-50 p-6 rounded-r-xl"
              >
                <div className="text-green-600 font-semibold mb-2">2012-2014</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">HND Computer Engineering</h3>
                <p className="text-gray-700">Networking • Systems Administration</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Teal Gradient */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl mb-8 text-teal-100">
              Interested in collaborating or learning more about my work?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                View Portfolio
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Get in Touch
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
            <p>© 2025 Ayoolumi Melehon | Edinburgh, Scotland | Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}