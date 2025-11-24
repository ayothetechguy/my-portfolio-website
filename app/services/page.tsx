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
      title: 'Healthcare Predictive Analytics',
      icon: '🏥',
      color: 'teal',
      description: 'Machine learning models to forecast demand, optimize capacity, and improve patient flow across healthcare settings',
      services: [
        'Emergency department demand forecasting',
        'Patient flow optimization and bottleneck identification',
        'Hospital admission risk prediction',
        'Wait time prediction systems',
        'Resource allocation modeling',
        'Capacity planning analytics'
      ],
      idealFor: 'NHS trusts, hospital systems, urgent care facilities, healthcare planners',
      deliverables: 'Trained ML models, interactive dashboards, deployment guides, performance monitoring',
      impact: '85%+ prediction accuracy demonstrated in A&E wait time forecasting'
    },
    {
      title: 'Medical AI & Clinical Decision Support',
      icon: '🤖',
      color: 'blue',
      description: 'Deep learning systems for diagnostic support, risk assessment, and treatment optimization',
      services: [
        'Medical imaging AI (X-ray, CT scan analysis)',
        'Disease detection systems (pneumonia, skin conditions)',
        'Patient risk stratification algorithms',
        'Fall risk assessment models',
        'Treatment response prediction',
        'Clinical deterioration early warning systems'
      ],
      idealFor: 'Clinical departments, diagnostic imaging centers, care homes, hospital wards',
      deliverables: 'AI models with explainability, validation reports, integration support, clinical documentation',
      impact: '85.58% pneumonia detection accuracy • 79.5% fall risk prediction accuracy'
    },
    {
      title: 'Population Health Analytics',
      icon: '📊',
      color: 'purple',
      description: 'Large-scale health data analysis to identify patterns, inequities, and intervention opportunities',
      services: [
        'COVID-19 and infectious disease impact analysis',
        'Mental health demand forecasting',
        'Health inequity identification and mapping',
        'Disease surveillance systems',
        'Community health needs assessment',
        'Public health intervention evaluation'
      ],
      idealFor: 'Public Health Scotland, health boards, local authorities, community health services',
      deliverables: 'Population health reports, interactive maps, trend analyses, policy recommendations',
      impact: 'Analyzed 14 Scottish health boards • 620K+ records processed'
    },
    {
      title: 'Health Data Engineering & Integration',
      icon: '⚙️',
      color: 'green',
      description: 'GDPR-compliant data pipelines connecting fragmented health and social care systems',
      services: [
        'NHS data integration and harmonization',
        'Electronic health record (EHR) system connections',
        'GDPR-compliant data pipeline design',
        'Multi-source health data warehousing',
        'Care pathway data modeling',
        'Real-time data quality monitoring'
      ],
      idealFor: 'Integrated care systems, health IT departments, research institutions',
      deliverables: 'Data pipelines, quality frameworks, technical documentation, compliance reports',
      impact: 'GDPR-compliant processing of 620K+ sensitive health records'
    },
    {
      title: 'Social Care Technology Solutions',
      icon: '👥',
      color: 'orange',
      description: 'AI-powered systems to support frontline care workers and improve care delivery',
      services: [
        'Social isolation detection for elderly populations',
        'Challenging behavior monitoring and prediction',
        'Medication management tracking systems',
        'Care coordination platform analytics',
        'End-of-life care pathway optimization',
        'Care worker decision support tools'
      ],
      idealFor: 'Care homes, domiciliary care providers, SSSC-registered services, local authority care teams',
      deliverables: 'Detection algorithms, risk alerts, care dashboards, staff training materials',
      impact: 'Built on 2+ years frontline Scottish social care experience'
    },
    {
      title: 'Health Research & Academic Collaboration',
      icon: '🔬',
      color: 'red',
      description: 'Research partnerships for health data science, medical AI, and health informatics projects',
      services: [
        'PhD research collaboration (starting 2026)',
        'Public Health Scotland data analysis',
        'Clinical trial data support',
        'Health policy impact assessment',
        'Academic paper co-authorship',
        'Research methodology consultation'
      ],
      idealFor: 'Universities, research institutions, PhD supervisors, health policy teams',
      deliverables: 'Research papers, statistical analyses, reproducible code, data visualizations',
      impact: 'MSc AI dissertation on behavioral modeling • 9 healthcare research projects'
    }
  ];

  const colorClasses = {
    teal: 'from-teal-50 to-teal-100 border-teal-300 hover:border-teal-500',
    blue: 'from-blue-50 to-blue-100 border-blue-300 hover:border-blue-500',
    purple: 'from-purple-50 to-purple-100 border-purple-300 hover:border-purple-500',
    green: 'from-green-50 to-green-100 border-green-300 hover:border-green-500',
    orange: 'from-orange-50 to-orange-100 border-orange-300 hover:border-orange-500',
    red: 'from-red-50 to-red-100 border-red-300 hover:border-red-500'
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
              {['About', 'Portfolio', 'Services', 'Experience'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
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
                {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
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

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Healthcare Data Science Services</h1>
            <p className="text-2xl text-gray-600 mb-4">Transforming healthcare delivery through predictive analytics, medical AI, and ethical data solutions</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              I combine frontline Scottish social care experience with advanced AI expertise to build practical, patient-centered analytics solutions that improve outcomes and support clinical decision-making
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ideal For:</h4>
                      <p className="text-gray-700 text-sm">{service.idealFor}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Deliverables:</h4>
                      <p className="text-gray-700 text-sm">{service.deliverables}</p>
                    </div>
                    <div className="bg-white/50 rounded-lg p-3 border border-gray-300">
                      <h4 className="font-bold text-gray-900 mb-1 text-sm">Demonstrated Impact:</h4>
                      <p className="text-gray-700 text-sm">{service.impact}</p>
                    </div>
                  </motion.div>
                )}
                
                <button className="mt-4 text-teal-600 font-semibold hover:text-teal-700 transition flex items-center">
                  {expandedService === index ? (
                    <>Show Less <span className="ml-1">↑</span></>
                  ) : (
                    <>Learn More <span className="ml-1">→</span></>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Values */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">My Approach</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏥 Patient-Centered AI</h3>
                <p className="text-gray-700 mb-4">
                  Having provided direct care to vulnerable populations, I understand that every data point represents a real person. My models are designed to support—not replace—clinical judgment and improve patient outcomes.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Explainable AI for clinical trust</li>
                  <li>✓ Bias detection and fairness testing</li>
                  <li>✓ Human-in-the-loop validation</li>
                  <li>✓ Clear limitations documentation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔐 Privacy & Ethics First</h3>
                <p className="text-gray-700 mb-4">
                  As an SSSC-registered care worker, I bring deep understanding of healthcare data governance, patient confidentiality, and the ethical complexities of health AI systems.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ GDPR-compliant data processing</li>
                  <li>✓ Synthetic data for demonstrations</li>
                  <li>✓ Documented security controls</li>
                  <li>✓ Ethical impact assessments</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🤝 Collaborative Partnership</h3>
                <p className="text-gray-700 mb-4">
                  I work alongside clinical staff, care workers, and healthcare leaders to ensure solutions fit real workflows and address actual care delivery challenges.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Co-design with frontline staff</li>
                  <li>✓ Regular stakeholder feedback loops</li>
                  <li>✓ Plain-language documentation</li>
                  <li>✓ Training and knowledge transfer</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">📚 Evidence-Based Practice</h3>
                <p className="text-gray-700 mb-4">
                  Every solution is grounded in rigorous methodology, validated against clinical outcomes, and supported by transparent documentation and reproducible code.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Robust model validation protocols</li>
                  <li>✓ Clinical outcome evaluation</li>
                  <li>✓ Reproducible research practices</li>
                  <li>✓ Academic collaboration ready</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">How We Can Work Together</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project-Based Consulting</h3>
                <p className="text-gray-700 mb-4 text-sm">Defined scope, deliverables, and timeline for specific healthcare analytics challenges</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Fixed-fee project agreements</li>
                  <li>• Clear milestones and deliverables</li>
                  <li>• 3-6 month typical duration</li>
                  <li>• Best for: Specific NHS initiatives</li>
                </ul>
              </motion.div>
              
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Research Collaboration</h3>
                <p className="text-gray-700 mb-4 text-sm">Academic partnerships for health data science research and publications</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• PhD collaboration (starting 2026)</li>
                  <li>• Co-authorship opportunities</li>
                  <li>• Grant application support</li>
                  <li>• Best for: Universities, research teams</li>
                </ul>
              </motion.div>
              
              <motion.div whileHover={{ y: -8 }} className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Training & Knowledge Transfer</h3>
                <p className="text-gray-700 mb-4 text-sm">Build internal healthcare analytics capability within your organization</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Workshops for clinical staff</li>
                  <li>• Python/R training for analysts</li>
                  <li>• Documentation and guides</li>
                  <li>• Best for: Capacity building initiatives</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Availability</h2>
            <p className="text-lg text-gray-700 mb-6">
              Completing MSc AI at University of Stirling (2025). Available for:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="font-semibold text-gray-900 mb-2">🎓 PhD Opportunities</p>
                <p className="text-gray-600 text-sm">Seeking funded positions starting 2026 in Health Data Science, Medical AI, or Health Informatics</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-teal-200">
                <p className="font-semibold text-gray-900 mb-2">💼 Healthcare Data Roles</p>
                <p className="text-gray-600 text-sm">Open to full-time positions with NHS Scotland, health tech companies, or research institutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              For project inquiries, research collaborations, or PhD supervision discussions, please get in touch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Improve Healthcare Together</h2>
            <p className="text-xl mb-8 text-teal-100">
              Whether you're looking for a data scientist, PhD candidate, or research collaborator, I'd love to discuss how we can advance patient care through data.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                Discuss Opportunities
              </Link>
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Healthcare Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ayoolumi Melehon</h3>
              <p className="text-gray-400">Healthcare Data Scientist & AI Researcher specializing in predictive analytics and machine learning for health system improvement.</p>
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
                <a href="https://github.com/ayoolumi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition text-sm">
                  G
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            <p>© 2025 Ayoolumi Melehon | Edinburgh/Stirling, Scotland</p>
          </div>
        </div>
      </footer>
    </div>
  );
}