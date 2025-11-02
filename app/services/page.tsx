'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    blue: 'from-blue-50 to-blue-100 border-blue-300 hover:border-blue-500',
    green: 'from-green-50 to-green-100 border-green-300 hover:border-green-500',
    purple: 'from-purple-50 to-purple-100 border-purple-300 hover:border-purple-500',
    teal: 'from-teal-50 to-teal-100 border-teal-300 hover:border-teal-500',
    orange: 'from-orange-50 to-orange-100 border-orange-300 hover:border-orange-500',
    red: 'from-red-50 to-red-100 border-red-300 hover:border-red-500'
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
                  className={`relative ${item === 'Services' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
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
                    className={`${item === 'Services' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Analytics & AI Solutions</h1>
            <p className="text-2xl text-gray-600">From dashboards to predictive models, I build practical data solutions that drive smarter decisions</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br rounded-2xl border-2 p-8 transition-all cursor-pointer shadow-lg hover:shadow-2xl ${colorClasses[service.color as keyof typeof colorClasses]}`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                {expandedService === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4 border-t border-gray-300 pt-4 mt-4"
                  >
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Services Include:</h4>
                      <ul className="space-y-1 text-gray-700">
                        {service.services.map((item, i) => (
                          <li key={i}>→ {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ideal For:</h4>
                      <p className="text-gray-700">{service.idealFor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Deliverables:</h4>
                      <p className="text-gray-700">{service.deliverables}</p>
                    </div>
                  </motion.div>
                )}
                
                <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700 transition">
                  {expandedService === index ? 'Show Less ↑' : 'Learn More →'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Engagement Models</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based</h3>
                <p className="text-gray-700 mb-2">Fixed scope, timeline, and fee</p>
                <p className="text-sm text-gray-600">Best for: Specific deliverables, defined problems</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-700 mb-2">Monthly retainer for continuous analytics</p>
                <p className="text-sm text-gray-600">Best for: Regular reporting, dashboard maintenance</p>
              </motion.div>
              
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Knowledge Transfer</h3>
                <p className="text-gray-700 mb-2">Workshops, documentation, capability building</p>
                <p className="text-sm text-gray-600">Best for: Building internal analytics capacity</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Schedule a free consultation to discuss your analytics needs
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Schedule Consultation
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