'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation - Clean White */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/Head.jpg"
                alt="Ayoolumi Melehon"
                className="w-10 h-10 rounded-full object-cover border-2 border-teal-500 group-hover:border-teal-600 transition"
              />
              <span className="text-xl font-bold text-gray-900">
                AYOOLUMI MELEHON
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Portfolio', 'Services', 'Experience', 'Gallery', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-teal-600 transition font-medium text-sm"
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="px-6 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition shadow-md hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>

            <button 
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="md:hidden pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-3 pt-4">
                {['About', 'Portfolio', 'Services', 'Experience', 'Gallery', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-teal-600 py-2 px-4 hover:bg-gray-50 rounded-lg font-medium transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section - Clean White with "03 SPECIALTIES" */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="inline-block px-5 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold border border-teal-300">
                Available for Opportunities
              </div>
            </motion.div>

            {/* Split Screen Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* LEFT SIDE - Large "03" */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center md:text-right"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <h2 className="text-9xl sm:text-[12rem] lg:text-[15rem] font-black leading-none mb-4">
                    <span className="bg-gradient-to-br from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      03
                    </span>
                  </h2>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide">
                    Specialties
                  </p>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE - Three Specialties */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                {[
                  { 
                    icon: '🏥', 
                    title: 'Healthcare AI',
                    borderColor: 'border-blue-300',
                    hoverBorder: 'hover:border-blue-500',
                    bgColor: 'bg-blue-50',
                    textColor: 'text-blue-600',
                  },
                  { 
                    icon: '📊', 
                    title: 'Business Intelligence',
                    borderColor: 'border-purple-300',
                    hoverBorder: 'hover:border-purple-500',
                    bgColor: 'bg-purple-50',
                    textColor: 'text-purple-600',
                  },
                  { 
                    icon: '⚙️', 
                    title: 'Analytics Engineering',
                    borderColor: 'border-cyan-300',
                    hoverBorder: 'hover:border-cyan-500',
                    bgColor: 'bg-cyan-50',
                    textColor: 'text-cyan-600',
                  },
                ].map((specialty, index) => (
                  <motion.div
                    key={specialty.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`group relative p-6 bg-white rounded-2xl border-2 ${specialty.borderColor} ${specialty.hoverBorder} shadow-md hover:shadow-xl transition-all duration-300 cursor-default`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 ${specialty.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <span className="text-4xl">{specialty.icon}</span>
                      </motion.div>
                      
                      <div>
                        <h3 className={`text-3xl font-bold ${specialty.textColor}`}>
                          {specialty.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Data Analyst building predictive models, intelligent dashboards, and production systems
            </motion.p>
            
            {/* Credentials */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mb-10 text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { icon: '🎓', text: 'MSc AI' },
                { icon: '📊', text: 'CompTIA Data+' },
                { icon: '📍', text: 'Grangemouth, Scotland' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 shadow-sm hover:shadow-md hover:border-teal-300 transition-all cursor-default"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/portfolio" 
                  className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-teal-700 transition-all"
                >
                  View Portfolio
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-block px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 8, suffix: '+', label: 'Years Experience' },
              { value: 17, suffix: '+', label: 'Projects Completed' },
              { value: 0, suffix: '', label: 'MSc AI', special: 'MSc AI' },
              { value: 0, suffix: '', label: '100% Satisfaction', special: '100%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-5xl font-bold text-teal-600 mb-2">
                  {stat.special || <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Specialties Detail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Approach</h2>
            <p className="text-xl text-gray-600">Three core specialties that drive results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: 'Healthcare AI',
                description: 'I build predictive models for healthcare systems, from NHS wait-time predictions to diagnostic support tools.',
                bgGradient: 'from-blue-50 to-white',
                borderColor: 'border-blue-200',
                hoverBorder: 'hover:border-blue-300',
                iconBg: 'bg-blue-100',
                iconColor: 'text-blue-600',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Business Intelligence',
                description: 'I design dashboards and reports that transform raw data into actionable insights for decision-makers.',
                bgGradient: 'from-teal-50 to-white',
                borderColor: 'border-teal-200',
                hoverBorder: 'hover:border-teal-300',
                iconBg: 'bg-teal-100',
                iconColor: 'text-teal-600',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: 'Analytics Engineering',
                description: 'I build data pipelines and automation systems that scale from small teams to enterprise operations.',
                bgGradient: 'from-cyan-50 to-white',
                borderColor: 'border-cyan-200',
                hoverBorder: 'hover:border-cyan-300',
                iconBg: 'bg-cyan-100',
                iconColor: 'text-cyan-600',
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`bg-gradient-to-br ${card.bgGradient} p-8 rounded-2xl border-2 ${card.borderColor} ${card.hoverBorder} shadow-lg hover:shadow-xl transition-all cursor-default`}
              >
                <div className={`w-16 h-16 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">A sample of my client work and personal projects</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'NHS A&E Wait Time Prediction', category: 'Healthcare AI' },
              { title: 'User Activation Dashboard', category: 'Product Analytics' },
              { title: 'Pneumonia Detection System', category: 'Medical AI' },
              { title: 'Customer Intelligence Suite', category: 'Business Intelligence' },
              { title: 'Workforce Analytics Platform', category: 'HR Analytics' },
              { title: 'Data Pipeline Automation', category: 'Analytics Engineering' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-xl border-2 border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <p className="text-sm text-teal-600 font-semibold mb-2">{project.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl mb-8 text-teal-100">
              Looking for a data analyst who can deliver actionable insights? Let&apos;s discuss your project.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Get in Touch
              </Link>
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ayoolumi Melehon</h3>
              <p className="text-gray-400">Data Analyst specializing in Healthcare AI, Business Intelligence, and Analytics Engineering.</p>
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
                {[
                  { href: 'mailto:ayoolumimelehon@gmail.com', label: 'Email' },
                  { href: 'https://www.linkedin.com/in/ayoolumi-melehon-b63237179/', label: 'LinkedIn' },
                  { href: 'https://github.com/ayothetechguy', label: 'GitHub' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-sm"
                    title={social.label}
                  >
                    {social.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Ayoolumi Melehon | Grangemouth, Scotland | Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
