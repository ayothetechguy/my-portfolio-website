'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
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

  const services = [
    {
      title: 'Product Analytics',
      icon: '📊',
      color: 'blue',
      description: 'Help you understand user behavior and optimize product performance',
      services: [
        'User activation & retention analysis',
        'A/B testing design & interpretation',
        'Funnel optimization',
        'Feature adoption tracking',
        'Churn prediction & prevention',
        'Product metric dashboards'
      ],
      idealFor: 'SaaS companies, digital products, mobile apps',
      deliverables: 'Interactive dashboards, experiment frameworks, insight reports, metric definitions'
    },
    {
      title: 'Workforce & People Analytics',
      icon: '👥',
      color: 'green',
      description: 'Transform HR data into strategic workforce insights',
      services: [
        'Skills gap analysis & capability mapping',
        'Survey design & analysis (engagement, pulse checks)',
        'Workforce planning metrics',
        'Training ROI assessment',
        'Organizational network analysis',
        'Diversity & inclusion metrics'
      ],
      idealFor: 'HR teams, L&D departments, organizational development',
      deliverables: 'Capability heatmaps, survey reports, workforce dashboards, actionable recommendations'
    },
    {
      title: 'Machine Learning & AI Solutions',
      icon: '🤖',
      color: 'purple',
      description: 'Build intelligent systems that learn from your data',
      services: [
        'Predictive modeling (classification, regression)',
        'Anomaly detection systems',
        'Text analytics & topic modeling',
        'Risk scoring models',
        'Recommendation systems',
        'Proof-of-concept ML projects'
      ],
      idealFor: 'Organizations ready to explore AI applications',
      deliverables: 'Trained models, prediction APIs, explainability reports, implementation guidance'
    },
    {
      title: 'Business Intelligence & Dashboards',
      icon: '📈',
      color: 'teal',
      description: 'Turn data chaos into clear, actionable insights',
      services: [
        'Executive dashboard design',
        'Operational metrics tracking',
        'Self-service BI implementation',
        'Power BI solutions',
        'Automated reporting',
        'Data storytelling'
      ],
      idealFor: 'Leadership teams, operations managers, decision-makers',
      deliverables: 'Interactive dashboards, scheduled reports, stakeholder presentations'
    },
    {
      title: 'Data Engineering & Automation',
      icon: '⚙️',
      color: 'orange',
      description: 'Build reliable data pipelines and automation',
      services: [
        'Data pipeline design & implementation',
        'ETL automation',
        'Data quality frameworks',
        'Warehouse design (star schema)',
        'Report automation',
        'System integrations'
      ],
      idealFor: 'Growing organizations with increasing data complexity',
      deliverables: 'Documented pipelines, quality checks, automated workflows, technical documentation'
    },
    {
      title: 'Research & Policy Analytics',
      icon: '🔬',
      color: 'red',
      description: 'Evidence-based analysis for policy and research',
      services: [
        'Microdata analysis',
        'Statistical modeling',
        'Policy impact assessment',
        'Literature synthesis',
        'Research visualization',
        'Academic collaboration'
      ],
      idealFor: 'Research institutions, policy teams, think tanks, PhD students',
      deliverables: 'Statistical reports, research visualizations, methodology documentation'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-900/40 to-blue-800/40 border-blue-400/30 hover:border-blue-400',
    green: 'from-green-900/40 to-green-800/40 border-green-400/30 hover:border-green-400',
    purple: 'from-purple-900/40 to-purple-800/40 border-purple-400/30 hover:border-purple-400',
    teal: 'from-teal-900/40 to-teal-800/40 border-teal-400/30 hover:border-teal-400',
    orange: 'from-orange-900/40 to-orange-800/40 border-orange-400/30 hover:border-orange-400',
    red: 'from-red-900/40 to-red-800/40 border-red-400/30 hover:border-red-400'
  };

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
              {/* Logo with Profile Image */}
              <Link href="/" className="flex items-center space-x-3 group">
                <img
                  src="/head.jpg"
                  alt="Ayoolumi Melehon"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30 group-hover:border-white/60 transition"
                />
                <span className="text-xl font-display font-bold text-white">
                  AYOOLUMI MELEHON
                </span>
              </Link>
              
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-200 hover:text-white transition font-medium">Home</Link>
                <Link href="/about" className="text-gray-200 hover:text-white transition font-medium">About</Link>
                <Link href="/portfolio" className="text-gray-200 hover:text-white transition font-medium">Portfolio</Link>
                <Link href="/services" className="text-white font-semibold">Services</Link>
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
                  <Link href="/services" className="text-white py-2 px-4 bg-white/10 rounded font-medium">Services</Link>
                  <Link href="/experience" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Experience</Link>
                  <Link href="/gallery" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Gallery</Link>
                  <Link href="/contact" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Contact</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">Analytics & AI Solutions</h1>
            <p className="text-xl text-gray-200">From dashboards to predictive models, I build practical data solutions that drive smarter decisions</p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br backdrop-blur-md rounded-2xl border-2 p-8 transition-all hover:scale-105 cursor-pointer ${colorClasses[service.color as keyof typeof colorClasses]}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 border-t border-white/20 pt-4 mt-4"
                  >
                    <div>
                      <h4 className="font-bold text-white mb-2">Services Include:</h4>
                      <ul className="space-y-1 text-gray-200">
                        {service.services.map((item, i) => (
                          <li key={i}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Ideal For:</h4>
                      <p className="text-gray-200">{service.idealFor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Deliverables:</h4>
                      <p className="text-gray-200">{service.deliverables}</p>
                    </div>
                  </motion.div>
                )}
                
                <button className="mt-4 text-white font-medium hover:underline">
                  {expandedService === index ? 'Show Less' : 'Learn More →'}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Engagement Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Project-Based</h3>
                <p className="text-gray-200 mb-2">Fixed scope, timeline, and fee</p>
                <p className="text-sm text-gray-300">Best for: Specific deliverables, defined problems</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Ongoing Support</h3>
                <p className="text-gray-200 mb-2">Monthly retainer for continuous analytics</p>
                <p className="text-sm text-gray-300">Best for: Regular reporting, dashboard maintenance</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Training & Knowledge Transfer</h3>
                <p className="text-gray-200 mb-2">Workshops, documentation, capability building</p>
                <p className="text-sm text-gray-300">Best for: Building internal analytics capacity</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl border-2 border-white/20 p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-200 mb-8">Schedule a free consultation to discuss your analytics needs</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all shadow-lg hover:scale-105">
                Schedule Consultation
              </Link>
              <Link href="/portfolio" className="px-8 py-4 bg-transparent text-white rounded-lg font-medium border-2 border-white hover:bg-white/20 transition-all hover:scale-105">
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
<footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Social Links */}
    <div className="flex justify-center gap-6 mb-6">
      <a href="mailto:ayoolumimelehon@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="Email">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="LinkedIn">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="https://github.com/ayothetechguy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="GitHub">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a href="https://www.youtube.com/@ayoolumi_oluwafemi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" title="YouTube">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      </a>
    </div>
    
    {/* Copyright */}
    <div className="text-center">
      <p className="text-gray-300">© 2025 Ayoolumi Melehon | Edinburgh, Scotland</p>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}