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
                {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
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

      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Me</h1>
              <p className="text-2xl text-teal-600 font-semibold mb-4">Healthcare Data Scientist & AI Researcher</p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bridging frontline care experience with advanced analytics to improve patient outcomes and health system resilience across Scotland
              </p>
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                <span className="px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-gray-700">
                  MSc Artificial Intelligence
                </span>
                <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-gray-700">
                  CompTIA Data+ Certified
                </span>
                <span className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-gray-700">
                  Scottish Social Care Worker
                </span>
              </div>
              <div className="flex gap-4">
                <Link 
                  href="/portfolio"
                  className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition shadow-lg"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition"
                >
                  Get in touch to learn more
                </Link>
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
                  <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">9+</p>
                    <p className="text-sm text-gray-600 font-medium">Healthcare Projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Story - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey: From Care to Code</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                My path to healthcare data science began on the frontlines of care. As a registered Scottish Social Care Worker with over two years of hands-on experience, I worked directly with vulnerable populations, managing care documentation, coordinating services, and ensuring compliance with stringent regulatory standards.
              </p>
              <p>
                During this time, I witnessed firsthand the challenges facing healthcare systems: fragmented data, delayed insights, overwhelmed emergency departments, and gaps in preventive care. I saw how better data systems could transform patient outcomes, streamline workflows, and support clinical decision-making.
              </p>
              <p>
                This experience motivated my transition into data science and AI. I pursued an MSc in Artificial Intelligence at the University of Stirling while simultaneously earning CompTIA Data+ certification, building the technical skills needed to address the healthcare challenges I had observed.
              </p>
              <p>
                Today, I combine my unique perspective as both a care professional and data scientist to build practical, ethical analytics solutions. I understand the human context behind healthcare data because I've been there—documenting patient needs, navigating care pathways, and seeing the real-world impact of system inefficiencies.
              </p>
              <p className="text-teal-600 font-semibold">
                My mission is to use AI and advanced analytics to improve patient outcomes, reduce healthcare inequities, and build more resilient health systems across Scotland and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Experience - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Healthcare Experience & Impact</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontline Care Experience</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>2+ years as registered Scottish Social Care Worker</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Direct care coordination for vulnerable populations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Healthcare documentation and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Understanding of care pathways and clinical workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">✓</span>
                    <span>Patient advocacy and ethical care delivery</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Science Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>9 healthcare analytics and AI projects completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>NHS A&E wait time prediction (85.67% accuracy)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>COVID-19 impact analysis across 14 Scottish health boards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>Medical AI systems (pneumonia detection, fall risk assessment)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span>620K+ healthcare records processed with GDPR compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Interests - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Research Interests</h2>
            <p className="text-center text-gray-600 mb-10 text-lg">Areas I'm pursuing for PhD study and collaborative research</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🏥',
                  title: 'Predictive Healthcare Analytics',
                  description: 'Machine learning models for emergency department demand forecasting, patient flow optimization, and resource allocation to reduce wait times and improve capacity planning.',
                },
                {
                  icon: '🤖',
                  title: 'Clinical Decision Support Systems',
                  description: 'AI-powered diagnostic aids and risk stratification tools that augment clinical judgment while maintaining interpretability and trust in high-stakes medical settings.',
                },
                {
                  icon: '📊',
                  title: 'Population Health Informatics',
                  description: 'Large-scale analysis of public health data to identify disease patterns, health inequities, and intervention opportunities across diverse communities.',
                },
                {
                  icon: '🔐',
                  title: 'Privacy-Preserving Health Data Engineering',
                  description: 'GDPR-compliant data pipelines and federated learning approaches that enable healthcare research while protecting patient privacy and maintaining data sovereignty.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Technical Skills</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">💻</span>
                  Programming & Tools
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Languages:</strong> Python, R, SQL</p>
                  <p><strong>ML/AI:</strong> PyTorch, scikit-learn, TensorFlow, Keras</p>
                  <p><strong>Analytics:</strong> Pandas, NumPy, Plotly, Seaborn</p>
                  <p><strong>Visualization:</strong> Streamlit, Power BI, Tableau</p>
                  <p><strong>Dev Tools:</strong> Git, Docker, Jupyter, VS Code</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🏥</span>
                  Healthcare Domain
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Data Sources:</strong> Public Health Scotland, NHS datasets</p>
                  <p><strong>Compliance:</strong> GDPR, healthcare data governance</p>
                  <p><strong>Systems:</strong> Clinical documentation, EHR workflows</p>
                  <p><strong>Standards:</strong> Care Quality Commission frameworks</p>
                  <p><strong>Ethics:</strong> Patient privacy, algorithmic fairness</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🔬</span>
                  Research Methods
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>ML Models:</strong> Classification, regression, clustering, time series</p>
                  <p><strong>Deep Learning:</strong> CNNs for medical imaging, RNNs for sequences</p>
                  <p><strong>Statistics:</strong> Hypothesis testing, A/B testing, survival analysis</p>
                  <p><strong>Evaluation:</strong> Cross-validation, bias detection, model interpretation</p>
                  <p><strong>Deployment:</strong> Model monitoring, performance tracking</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
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
                className="border-l-4 border-teal-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg"
              >
                <div className="text-teal-600 font-semibold mb-2">2024-2025</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">MSc Artificial Intelligence</h3>
                <p className="text-gray-700 mb-2 font-medium">University of Stirling, Scotland</p>
                <p className="text-gray-600">Focus: Healthcare AI, Machine Learning, Deep Learning for Medical Imaging</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-blue-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg"
              >
                <div className="text-blue-600 font-semibold mb-2">2024</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CompTIA Data+ Certification</h3>
                <p className="text-gray-700">Data Analytics • Business Intelligence • Statistical Analysis • Data Governance</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-purple-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg"
              >
                <div className="text-purple-600 font-semibold mb-2">2022-Present</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Scottish Social Care Worker Registration</h3>
                <p className="text-gray-700">Scottish Social Services Council (SSSC) • Active Registration</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 8 }}
                className="border-l-4 border-green-500 pl-6 bg-white p-6 rounded-r-xl shadow-lg"
              >
                <div className="text-green-600 font-semibold mb-2">2015-2018</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor's Degree in Computer Science</h3>
                <p className="text-gray-700">Abubakar Tafawa Balewa University, Nigeria</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I'm Seeking - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What I'm Seeking</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎓 PhD Opportunities</h3>
                <p className="text-gray-700 mb-3">
                  Seeking funded PhD positions in Health Data Science, Medical AI, or Health Informatics starting in 2026. 
                  Particularly interested in:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Predictive analytics for healthcare systems</li>
                  <li>• Clinical decision support research</li>
                  <li>• Population health informatics</li>
                  <li>• Privacy-preserving health AI</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Healthcare Data Roles</h3>
                <p className="text-gray-700 mb-3">
                  Also open to full-time positions in healthcare analytics and data science, including:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Healthcare Data Scientist (NHS, health tech)</li>
                  <li>• Health Analytics Engineer</li>
                  <li>• Medical AI Research positions</li>
                  <li>• Public Health Data Analyst</li>
                  <li>• Research collaborations</li>
                </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Advance Healthcare Together</h2>
            <p className="text-xl mb-8 text-teal-100">
              Interested in collaboration, PhD supervision, or exploring my work? I'd love to connect.
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
                View My Projects
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