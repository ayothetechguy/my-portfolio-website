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
    '/Head.jpg',
    '/Head.jpg',
    '/Head.jpg',
    '/Head.jpg',
    '/Head.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 30000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-8"
                >
                  <div className="inline-block px-4 py-2 bg-teal-600/20 border border-teal-400/30 text-teal-300 rounded-full text-sm font-semibold backdrop-blur-md">
                    Available for Opportunities
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center md:text-right"
                  >
                    <div className="relative inline-block">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                      
                      <motion.div whileHover={{ scale: 1.05 }} className="relative">
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

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
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
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className={`group relative p-5 bg-white/5 backdrop-blur-xl rounded-2xl border-2 ${specialty.borderColor} ${specialty.shadowColor} shadow-2xl transition-all duration-300 cursor-default`}
                      >
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

                <motion.p 
                  className="text-lg sm:text-xl text-gray-200 mb-6 max-w-4xl mx-auto text-center font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Data Analyst building predictive models, intelligent dashboards, and production systems
                </motion.p>
                
                <motion.div
                  className="flex flex-wrap items-center justify-center gap-3 mb-8 text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
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
                
                <motion.div 
                  className="flex gap-4 justify-center flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
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

          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
            <div className="absolute inset-0 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-slate-900/80" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: 8, suffix: '+', label: 'Years Experience' },
                  { value: 17, suffix: '+', label: 'Portfolio Projects' },
                  { value: 0, suffix: '', label: 'MSc AI - 2025', special: 'MSc AI' },
                  { value: 0, suffix: '', label: 'Based in Scotland', special: 'Scotland' },
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
                    <motion.div 
                      className="relative text-4xl sm:text-5xl font-bold mb-2 text-blue-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.special || <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
                    </motion.div>
                    <div className="text-gray-300 font-medium text-sm sm:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

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
