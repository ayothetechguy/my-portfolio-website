'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Animated counter component
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

// Enhanced floating particles
function FloatingParticles() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Scroll indicator component
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-gray-300 text-sm">Scroll to explore</span>
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const backgroundImages = [
    '/1.jpg',
    '/11.jpg',
    '/111.jpg',
    '/1111.jpg',
    '/11111.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Background Images */}
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/85 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-cyan-900/10" />
        
        <FloatingParticles />
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 w-full z-50 bg-slate-900/60 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="/Head.jpg"
                    alt="Ayoolumi Melehon"
                    className="relative w-10 h-10 rounded-full object-cover border-2 border-white/40 group-hover:border-white/80 transition ring-2 ring-purple-500/30"
                  />
                </motion.div>
                <span className="text-xl font-display font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AYOOLUMI MELEHON
                </span>
              </Link>
              
              <div className="hidden md:flex space-x-1">
                {['About', 'Portfolio', 'Services', 'Experience', 'Gallery', 'Contact'].map((item) => (
                  <motion.div key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="px-4 py-2 text-gray-200 hover:text-white transition font-medium relative group rounded-lg hover:bg-white/5"
                    >
                      {item}
                      <motion.span 
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <button 
                className="md:hidden p-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition"
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
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4 border-t border-white/10 mt-2 bg-slate-900/80 backdrop-blur-xl rounded-b-xl"
              >
                <div className="flex flex-col space-y-1 pt-2">
                  {['About', 'Portfolio', 'Services', 'Experience', 'Gallery', 'Contact'].map((item) => (
                    <Link 
                      key={item}
                      href={`/${item.toLowerCase()}`} 
                      className="text-gray-200 hover:text-white py-3 px-4 hover:bg-white/10 rounded-lg font-medium transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Hero Section - Split Screen */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative flex items-center justify-center min-h-screen pt-20 px-4"
        >
          <div className="relative w-full max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Split Screen Layout */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                {/* LEFT SIDE - Large Number Statement */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center md:text-right"
                >
                  <div className="relative inline-block">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <h2 className="text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none mb-2">
                        <span className="bg-gradient-to-br from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          03
                        </span>
                      </h2>
                      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wider">
                        Specialties
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* RIGHT SIDE - List of Specialties */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-4"
                >
                  {[
                    { 
                      icon: '🏥', 
                      title: 'Healthcare AI',
                      gradient: 'from-blue-500 to-cyan-500',
                      borderColor: 'border-blue-500/30',
                      shadowColor: 'hover:shadow-blue-500/50',
                    },
                    { 
                      icon: '📊', 
                      title: 'Business Intelligence',
                      gradient: 'from-purple-500 to-pink-500',
                      borderColor: 'border-purple-500/30',
                      shadowColor: 'hover:shadow-purple-500/50',
                    },
                    { 
                      icon: '⚙️', 
                      title: 'Analytics Engineering',
                      gradient: 'from-cyan-500 to-teal-500',
                      borderColor: 'border-cyan-500/30',
                      shadowColor: 'hover:shadow-cyan-500/50',
                    },
                  ].map((specialty, index) => (
                    <motion.div
                      key={specialty.title}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className={`group relative p-5 bg-white/5 backdrop-blur-xl rounded-2xl border-2 ${specialty.borderColor} ${specialty.shadowColor} shadow-2xl transition-all duration-300 cursor-default`}
                    >
                      {/* Hover glow */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${specialty.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500`} />
                      
                      <div className="relative flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${specialty.gradient} shadow-2xl flex-shrink-0`}
                        >
                          <span className="text-3xl">{specialty.icon}</span>
                        </motion.div>
                        
                        <div>
                          <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${specialty.gradient} bg-clip-text text-transparent`}>
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
                className="text-lg sm:text-xl text-gray-200 mb-6 max-w-4xl mx-auto text-center font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Data Analyst building predictive models, intelligent dashboards, and production systems
              </motion.p>
              
              {/* Credentials */}
              <motion.div
                className="flex flex-wrap items-center justify-center gap-3 mb-8 text-base sm:text-lg"
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
                    className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-gray-100 shadow-xl hover:bg-white/15 hover:border-white/30 transition-all cursor-default"
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
                  <Link 
                    href="/portfolio" 
                    className="relative inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all"
                  >
                    View Portfolio
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-40 group-hover:opacity-75 transition duration-300" />
                  <Link 
                    href="/contact" 
                    className="relative inline-block px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          <ScrollIndicator />
        </motion.section>

        {/* Core Capabilities */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2 
                className="text-4xl sm:text-5xl font-display font-bold text-white mb-3 drop-shadow-2xl"
                whileInView={{ scale: [0.9, 1] }}
                viewport={{ once: true }}
              >
                Core Capabilities
              </motion.h2>
              <p className="text-xl text-gray-300 drop-shadow-md">Transforming data into actionable intelligence</p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-3xl blur-3xl" />
              
              <div className="relative bg-white/5 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border-2 border-white/10 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Analytics & BI',
                      color: 'blue',
                      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                      items: ['Product & User Analytics', 'Workforce Intelligence', 'Operational Metrics', 'Interactive Dashboards'],
                      gradient: 'from-blue-600 to-blue-400',
                    },
                    {
                      title: 'Machine Learning & AI',
                      color: 'purple',
                      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                      items: ['Predictive Modeling', 'Anomaly Detection', 'NLP & Text Analytics', 'Behavioral Simulation'],
                      gradient: 'from-purple-600 to-purple-400',
                    },
                    {
                      title: 'Data Engineering',
                      color: 'cyan',
                      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
                      items: ['Pipeline Automation', 'Data Warehousing', 'Quality Frameworks', 'Report Automation'],
                      gradient: 'from-cyan-600 to-cyan-400',
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-6 rounded-2xl transition-all duration-500 cursor-default"
                      style={{
                        background: `linear-gradient(135deg, ${card.color === 'blue' ? 'rgba(37, 99, 235, 0.15)' : card.color === 'purple' ? 'rgba(147, 51, 234, 0.15)' : 'rgba(6, 182, 212, 0.15)'} 0%, rgba(0, 0, 0, 0.1) 100%)`,
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`} />
                      
                      <div className="relative z-10">
                        <motion.div 
                          className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 shadow-2xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8 }}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                          </svg>
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                        
                        <ul className="space-y-2 text-gray-200 mb-5">
                          {card.items.map((item, idx) => (
                            <motion.li 
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + idx * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start text-sm"
                            >
                              <span className={`text-${card.color}-400 mr-2`}>•</span>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <Link 
                          href="/services" 
                          className={`inline-flex items-center text-${card.color}-300 hover:text-${card.color}-200 font-semibold group/link transition-all text-sm`}
                        >
                          Learn More
                          <motion.svg 
                            className="w-4 h-4 ml-2" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
          <div className="absolute inset-0 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-slate-900/80" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 8, suffix: '+', label: 'Years Experience', color: 'blue' },
                { value: 17, suffix: '+', label: 'Portfolio Projects', color: 'purple' },
                { value: 0, suffix: '', label: 'MSc AI - 2025', color: 'cyan', special: 'MSc AI' },
                { value: 0, suffix: '', label: 'Based in Scotland', color: 'pink', special: 'Scotland' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center cursor-default group"
                >
                  <div className="relative inline-block">
                    <div className={`absolute -inset-4 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition duration-500`} />
                    
                    <motion.div 
                      className={`relative text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-200 bg-clip-text text-transparent`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.special || <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                    </motion.div>
                  </div>
                  <div className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-slate-950/50 backdrop-blur-xl border-t border-white/10 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-6 mb-6">
              {[
                { href: 'mailto:ayoolumimelehon@gmail.com', title: 'Email', path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', color: 'blue' },
                { href: 'https://www.linkedin.com/in/ayoolumi-melehon-b63237179/', title: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', color: 'purple' },
                { href: 'https://github.com/ayothetechguy', title: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', color: 'cyan' },
                { href: 'https://www.youtube.com/@ayoolumi_oluwafemi', title: 'YouTube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z', color: 'pink' },
              ].map((social, idx) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.3, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                  title={social.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r from-${social.color}-500 to-${social.color}-600 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300`} />
                  <div className="relative w-11 h-11 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all">
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-400 mb-1 text-sm">
                © 2025 Ayoolumi Melehon | Grangemouth, Scotland
              </p>
              <p className="text-gray-500 text-xs">
                Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
              </p>
            </motion.div>
          </div>
        </footer>
      </div>
    </div>
  );
}