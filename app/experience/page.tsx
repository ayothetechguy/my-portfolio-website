'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Experience() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timeline = [
    {
      period: '2024-Present',
      role: 'Data & Analytics Professional',
      company: 'Portfolio Development & MSc AI',
      color: 'blue',
      description: 'Focus: Product analytics, ML applications, workforce intelligence, research analytics',
      achievements: [
        'Activation/retention dashboards',
        'Skills gap mapping systems',
        'Anomaly detection ML models',
        'Behavioral simulation research'
      ],
      tech: 'Python, SQL, Power BI, scikit-learn, Streamlit, dbt'
    },
    {
      period: '2022-2024',
      role: 'Finance & Business Intelligence Analyst',
      company: 'A & A Computers and Technologies',
      color: 'purple',
      description: 'Built end-to-end analytics solutions from data pipelines to executive dashboards',
      achievements: [
        'Designed reporting pipelines integrating multiple sources',
        'Automated data quality checks (duplicates, validation)',
        'Produced audit-ready analytical packs',
        'Translated complex findings for non-technical leadership'
      ],
      tech: 'Python, Excel, Power BI, SQL'
    },
    {
      period: '2018-2022',
      role: 'Procurement & Operations Analyst',
      company: 'A & A Supplies & Imports Ltd',
      color: 'green',
      description: 'Led operational analytics and process improvement for procurement and supply chain',
      achievements: [
        'Implemented 3-way match control system (PO-GRN-Invoice)',
        'Developed supplier performance analytics',
        'Created inventory management dashboards',
        'Automated month-end reconciliation checks',
        'Impact: Improved cash visibility, reduced discrepancies'
      ],
      tech: 'Excel, SQL, custom analytics tools'
    },
    {
      period: '2021',
      role: 'Technology Project Lead',
      company: 'Faith Revival International Academy',
      color: 'teal',
      description: 'Led computer laboratory project from concept to delivery',
      achievements: [
        'Managed budget, vendor analysis, procurement',
        'Coordinated cross-functional stakeholders',
        'Delivered on-time, on-budget',
        'Recognition: National Award (NYSC)'
      ],
      tech: 'Project Management, Stakeholder Coordination'
    },
    {
      period: '2015-2020',
      role: 'Student Leadership Roles',
      company: 'University of Stirling & ATBU',
      color: 'orange',
      description: 'Finance Committee Chair (Postgrad) & Treasurer (Undergrad)',
      achievements: [
        'Designed reporting frameworks & cashbook systems',
        'Implemented approval workflows',
        'Achieved clean audits',
        'Demonstrated analytical & communication skills'
      ],
      tech: 'Financial Systems, Reporting Frameworks'
    }
  ];

  const colorClasses = {
    blue: 'border-l-blue-500 bg-blue-50',
    purple: 'border-l-purple-500 bg-purple-50',
    green: 'border-l-green-500 bg-green-50',
    teal: 'border-l-teal-500 bg-teal-50',
    orange: 'border-l-orange-500 bg-orange-50'
  };

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
                  className={`relative ${item === 'Experience' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
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
                    className={`${item === 'Experience' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Professional Experience</h1>
            <p className="text-2xl text-gray-600">Cross-functional background spanning analytics, ML/AI, and operations</p>
          </motion.div>
        </div>
      </section>

      {/* Career Narrative - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              My career journey reflects a progression from operational analytics and systems work into broader 
              product analytics, workforce intelligence, and applied machine learning. This diverse background allows 
              me to understand both technical implementation and business context—connecting data pipelines to 
              stakeholder decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className={`border-l-4 pl-8 pb-6 rounded-r-xl p-6 shadow-lg ${colorClasses[item.color as keyof typeof colorClasses]}`}
              >
                <div className="text-sm font-semibold text-gray-600 mb-2">{item.period}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.role}</h3>
                <p className="text-lg text-gray-700 mb-4">{item.company}</p>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-gray-700">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg px-4 py-2 inline-block border border-gray-300">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Technologies:</span> {item.tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Evolution - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills Evolution</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold shadow">Early Career</span>
                <span className="text-gray-600 text-2xl">→</span>
                <span className="text-gray-700 font-medium">Operational Analytics + Systems Admin</span>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold shadow">Mid Career</span>
                <span className="text-gray-600 text-2xl">→</span>
                <span className="text-gray-700 font-medium">BI + Financial Analytics + Process Automation</span>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold shadow">Current</span>
                <span className="text-gray-600 text-2xl">→</span>
                <span className="text-gray-700 font-medium">Product/Workforce Analytics + ML/AI + Data Engineering</span>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold shadow">Future</span>
                <span className="text-gray-600 text-2xl">→</span>
                <span className="text-gray-700 font-medium">Research + Advanced AI Applications (PhD path)</span>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in My Work?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Let&apos;s discuss how my experience can benefit your organization
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
            <p>© 2025 Ayoolumi Melehon | Grangemouth, Scotland | Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}