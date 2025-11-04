'use client';

import { motion, useScroll } from 'framer-motion';
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

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

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
              {['About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="relative text-gray-600 hover:text-teal-600 transition-colors font-medium text-sm group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
                {['About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-teal-600 hover:bg-teal-50 py-3 px-4 rounded-lg font-medium transition-all"
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

      {/* Hero Section - White Background */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6 border border-teal-200"
              >
                ✨ Available for Opportunities
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="text-gray-900">Hi, I&apos;m</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Ayoolumi Melehon
                </span>
              </h1>

              <p className="text-2xl text-gray-700 mb-2 font-semibold">Data Analyst & AI Specialist</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Transforming complex data into actionable insights through predictive models, intelligent dashboards, and scalable analytics systems.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 text-sm">
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                  MSc Artificial Intelligence
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  CompTIA Data+ Certified
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-gray-700 shadow-sm">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                  Grangemouth, Scotland
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/portfolio"
                    className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl inline-block"
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact"
                    className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition inline-block"
                  >
                    Contact Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/Head.jpg"
                  alt="Ayoolumi Melehon"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-2 border-teal-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gray-900">17+</p>
                      <p className="text-sm text-gray-600 font-medium">Projects Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What I Do</h2>
            <p className="text-xl text-gray-600">Three core specializations driving measurable results</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Healthcare AI',
                description: 'Building predictive models for NHS wait times, patient diagnostics, and clinical decision support systems.',
                stats: '85%+ Accuracy',
              },
              {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Designing executive dashboards and automated reports that transform raw data into strategic insights.',
                stats: '40% Time Saved',
              },
              {
                icon: '⚙️',
                title: 'Analytics Engineering',
                description: 'Creating scalable data pipelines and ETL systems that power enterprise analytics at scale.',
                stats: '10M+ Records/Day',
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all cursor-default"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold border border-teal-200">
                  {service.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 8, suffix: '+', label: 'Years Experience' },
              { value: 17, suffix: '+', label: 'Projects Completed' },
              { value: 0, suffix: '', label: 'MSc AI (2025)', special: 'MSc AI' },
              { value: 100, suffix: '%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-100"
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

      {/* Portfolio Section - Light Grey - WITH CLICKABLE CARDS */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Projects</h2>
            <p className="text-xl text-gray-600">Real-world solutions delivering measurable impact</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'NHS A&E Wait Time Prediction', category: 'Healthcare AI', impact: '30% reduction in wait times', id: 'nhs-ae-wait-time-prediction' },
              { title: 'Fall Risk Assessment System', category: 'ML & AI', impact: '79.5% accuracy, 0.856 AUC', id: 'fall-risk-assessment' },
              { title: 'Pneumonia Detection System', category: 'Medical AI', impact: '92% diagnostic accuracy', id: 'pneumonia-detection-system' },
              { title: 'Executive BI Dashboard', category: 'Business Intelligence', impact: 'Real-time insights for C-suite', id: null },
              { title: 'Workforce Analytics Platform', category: 'HR Analytics', impact: '20% improvement in hiring', id: 'skills-gap-mapper' },
              { title: 'ETL Pipeline Automation', category: 'Data Engineering', impact: '10M records processed daily', id: null },
            ].map((project, index) => {
              const CardContent = (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-xl border-2 border-gray-200 hover:border-teal-300 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden h-full"
                >
                  <div className="aspect-video bg-gradient-to-br from-teal-100 to-blue-100 overflow-hidden">
                  {project.id === 'nhs-ae-wait-time-prediction' && (
                    <img 
                      src="/projects/nhs-ae-prediction-1.png"
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === 'pneumonia-detection-system' && (
                    <img 
                      src="/projects/pneumonia-detection-1.png"
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {project.id === 'fall-risk-assessment' && (
                    <img 
                      src="/projects/fall-risk-1.png"
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {!project.id || (project.id !== 'nhs-ae-wait-time-prediction' && project.id !== 'pneumonia-detection-system' && project.id !== 'fall-risk-assessment') && (
                    <div className="flex items-center justify-center h-full">
                      <svg className="w-16 h-16 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  )}
                </div>
                  <div className="p-6">
                    <p className="text-sm text-teal-600 font-semibold mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      {project.impact}
                    </p>
                  </div>
                </motion.div>
              );

              return project.id ? (
                <Link key={project.title} href={`/portfolio/${project.id}`}>
                  {CardContent}
                </Link>
              ) : (
                CardContent
              );
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-block px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Teal Gradient */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Let&apos;s discuss how analytics and AI can drive measurable results for your organization.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Case Studies
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