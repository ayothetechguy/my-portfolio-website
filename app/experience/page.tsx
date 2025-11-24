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
      period: '2024-2025',
      role: 'MSc Artificial Intelligence Student',
      company: 'University of Stirling',
      color: 'teal',
      description: 'Advanced study in AI, machine learning, and health data science while building healthcare analytics portfolio',
      achievements: [
        'Dissertation: Behavioral modeling using UK Census data',
        'Built 9 healthcare analytics and AI projects',
        'Specialized in healthcare predictive analytics and medical AI',
        'Achieved 85%+ accuracy in NHS A&E wait time prediction',
        'Processed 620K+ health records with GDPR compliance'
      ],
      tech: 'Python, PyTorch, TensorFlow, scikit-learn, Pandas, Streamlit, SQL'
    },
    {
      period: 'Feb 2025 - Present',
      role: 'Care Assistant',
      company: '1st Class Care Solutions Limited',
      location: 'West Lothian & Clackmannanshire',
      color: 'blue',
      description: 'Domiciliary care delivery as trusted partner with local councils, providing person-centered care and 24-hour intensive support',
      achievements: [
        'Person-centered care planning and delivery',
        'Medication administration and personal care',
        'Mobility support and enablement services',
        '24-hour intensive support coordination',
        'Focus on independence and dignity in care'
      ],
      tech: 'Care documentation systems, medication management, NHS pathway coordination'
    },
    {
      period: 'Current',
      role: 'Care Worker',
      company: 'Camphill Blair Drummond',
      location: 'Stirling',
      color: 'purple',
      description: 'Residential care for 48 adults with learning disabilities in community-based living model',
      achievements: [
        'Supporting 48 residents with complex care needs',
        'Community-based person-centered care delivery',
        'Personal development and meaningful activities coordination',
        'Experience with challenging behaviors and specialized support',
        'Contributing to holistic care planning'
      ],
      tech: 'Residential care systems, activity planning, behavioral support protocols'
    },
    {
      period: 'Feb 2023 - Feb 2025',
      role: 'Care Assistant',
      company: 'Avenue Care Services Limited',
      location: 'Eastern Scotland (Fife/Falkirk region)',
      color: 'green',
      description: 'Domiciliary care delivery supporting 300+ patients across multiple Scottish regions through NHS unscheduled care pathways',
      achievements: [
        'Supported 300+ patients with diverse care needs',
        'Palliative and end-of-life care delivery',
        'Personal care, medication administration, mobility assistance',
        'NHS pathway coordination: NHS 24, ambulance services, A&E, hospital admissions',
        'Experience with vulnerable populations: elderly, disabled, palliative patients'
      ],
      tech: 'Care management systems, NHS pathway documentation, medication tracking'
    },
    {
      period: '2023-Present',
      role: 'Data Annotation Specialist',
      company: 'Appen & Telus International',
      color: 'orange',
      description: 'Contributing to AI model training through precise data annotation, labeling, and quality assurance',
      achievements: [
        'Data annotation and labeling for machine learning models',
        'AI training data preparation and quality control',
        'Experience with diverse AI project types and datasets',
        'Understanding of data requirements for model training',
        'Quality assurance processes for AI systems'
      ],
      tech: 'Data annotation platforms, AI training workflows, quality control systems'
    },
    {
      period: '2024',
      role: 'CompTIA Data+ Certification',
      company: 'Professional Development',
      color: 'red',
      description: 'Industry-recognized certification in data analytics, business intelligence, and data governance',
      achievements: [
        'Data analytics fundamentals and statistical analysis',
        'Business intelligence and data storytelling',
        'Data governance and quality management',
        'Data visualization and reporting best practices',
        'Applied learning to healthcare analytics projects'
      ],
      tech: 'Data analysis frameworks, BI tools, governance standards'
    }
  ];

  const colorClasses = {
    teal: 'border-l-teal-500 bg-teal-50',
    blue: 'border-l-blue-500 bg-blue-50',
    purple: 'border-l-purple-500 bg-purple-50',
    green: 'border-l-green-500 bg-green-50',
    orange: 'border-l-orange-500 bg-orange-50',
    red: 'border-l-red-500 bg-red-50'
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
                {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
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

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Professional Experience</h1>
            <p className="text-2xl text-gray-600 mb-4">Bridging frontline healthcare delivery with advanced AI and data science</p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Nearly 3 years in Scottish health and social care combined with MSc AI training and hands-on AI industry experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Narrative */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Unique Healthcare AI Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              My career represents a rare convergence of three critical domains: <strong>frontline Scottish healthcare delivery</strong>, <strong>advanced AI technical training</strong>, and <strong>practical AI implementation experience</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Since February 2023, I&apos;ve worked across three Scottish care organizations—delivering domiciliary care to 300+ patients, providing residential care for 48 adults with learning disabilities, and supporting vulnerable populations through palliative and end-of-life care. This experience gave me direct insight into NHS Scotland&apos;s unscheduled care pathways, care coordination challenges, and the real-world data generation that happens in healthcare settings.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Simultaneously, I pursued MSc AI training at the University of Stirling while working with Appen and Telus International on AI model training and data annotation. This combination allows me to build healthcare AI solutions that are not only technically sophisticated but also practically implementable and grounded in the realities of care delivery. I understand both the technical requirements of AI systems and the clinical context in which they must operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Career Timeline</h2>
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
                <p className="text-lg text-gray-700 mb-1">{item.company}</p>
                {item.location && (
                  <p className="text-sm text-gray-600 mb-3">📍 {item.location}</p>
                )}
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Contributions:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-600 mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg px-4 py-2 inline-block border border-gray-300">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Focus:</span> {item.tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Experience by Numbers</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-teal-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-teal-600 mb-2">~3</p>
                <p className="text-gray-700 font-medium">Years in Scottish Healthcare</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-2">3</p>
                <p className="text-gray-700 font-medium">Care Organizations</p>
                <p className="text-xs text-gray-500 mt-1">Community, Domiciliary, Residential</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-purple-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-purple-600 mb-2">300+</p>
                <p className="text-gray-700 font-medium">Patients Supported</p>
                <p className="text-xs text-gray-500 mt-1">Avenue Care Services region</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-green-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-green-600 mb-2">48</p>
                <p className="text-gray-700 font-medium">Residents at Camphill</p>
                <p className="text-xs text-gray-500 mt-1">Learning disabilities care</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-orange-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-orange-600 mb-2">9</p>
                <p className="text-gray-700 font-medium">Healthcare AI Projects</p>
                <p className="text-xs text-gray-500 mt-1">Built during MSc AI</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-red-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-red-600 mb-2">620K+</p>
                <p className="text-gray-700 font-medium">Health Records Processed</p>
                <p className="text-xs text-gray-500 mt-1">GDPR-compliant analytics</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-teal-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-teal-600 mb-2">2</p>
                <p className="text-gray-700 font-medium">AI Companies</p>
                <p className="text-xs text-gray-500 mt-1">Appen & Telus International</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center shadow-lg">
                <p className="text-4xl font-bold text-blue-600 mb-2">85%+</p>
                <p className="text-gray-700 font-medium">Model Accuracy</p>
                <p className="text-xs text-gray-500 mt-1">A&E wait time prediction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">My Unique Value</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏥 Healthcare Domain Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Nearly 3 years in Scottish NHS care delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Understanding of patient pathways and care coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Knowledge of healthcare data generation in care settings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Insight into practical AI implementation challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Experience with vulnerable populations and health inequalities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI Technical Skills</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>MSc in Artificial Intelligence (University of Stirling)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Python proficiency for healthcare data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Hands-on experience with AI model training (Appen, Telus)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Understanding of data quality requirements and validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>CompTIA Data+ certification in analytics and BI</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔬 Scottish Healthcare Context</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Based in Edinburgh/Stirling, Scotland</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Working knowledge of Scottish care system and SSSC standards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Understanding of local healthcare challenges and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Commitment to improving Scottish health services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Experience with Public Health Scotland data</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 What This Means</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>I build AI models that address real healthcare problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Research grounded in practical care delivery reality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Understanding of both technical and clinical aspects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Bridge between AI development and healthcare implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">✓</span>
                    <span>Translate research into actionable health policy recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl mb-8 text-teal-100">
              Whether you&apos;re seeking a PhD candidate, healthcare data scientist, or research collaborator, let&apos;s discuss how my unique experience can contribute to advancing patient care.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl"
              >
                View Healthcare Projects
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