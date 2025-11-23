'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xldvqeyj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.');
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage('Oops! Something went wrong. Please try emailing me directly at ayoolumimelehon@gmail.com');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Oops! Something went wrong. Please try emailing me directly at ayoolumimelehon@gmail.com');
    }
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
                  className={`relative ${item === 'Contact' ? 'text-teal-600 font-semibold' : 'text-gray-600 hover:text-teal-600'} transition-colors font-medium text-sm group py-2`}
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
                    className={`${item === 'Contact' ? 'text-teal-600 bg-teal-50 font-semibold' : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'} py-3 px-4 rounded-lg font-medium transition-all`}
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Let&apos;s Advance Healthcare Together</h1>
            <p className="text-2xl text-gray-600">Open to PhD opportunities, healthcare data roles, and research collaborations</p>
          </motion.div>
        </div>
      </section>

      {/* Two Column Layout - Light Grey */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
              
              {/* Success/Error Messages */}
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">✅ {formMessage}</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">❌ {formMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Your name"
                    required
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                    required
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    name="organization"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    placeholder="Your company or institution"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I&apos;m interested in:</label>
                  <select 
                    name="interest"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                    disabled={formStatus === 'submitting'}
                  >
                    <option value="">Select an option</option>
                    <option value="PhD Supervision">PhD Supervision</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="Healthcare Data Role">Healthcare Data Role</option>
                    <option value="Healthcare Analytics">Healthcare Analytics</option>
                    <option value="Medical AI Project">Medical AI Project</option>
                    <option value="Data Engineering">Data Engineering</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                    placeholder="Tell me about your opportunity or project..."
                    required
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select 
                      name="timeline"
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      disabled={formStatus === 'submitting'}
                    >
                      <option>Urgent</option>
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select 
                      name="type"
                      className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                      disabled={formStatus === 'submitting'}
                    >
                      <option>PhD Position</option>
                      <option>Full-time Role</option>
                      <option>Contract</option>
                      <option>Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
                    formStatus === 'submitting'
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:from-teal-700 hover:to-blue-700'
                  }`}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h2>
                <div className="space-y-4">
                  {[
                    { icon: "📧", title: "Email", value: "ayoolumimelehon@gmail.com", link: "mailto:ayoolumimelehon@gmail.com" },
                    { icon: "📧", title: "Secondary Email", value: "aom00022@students.stir.ac.uk", link: "mailto:info@ayofemimelehon.com" },
                    { icon: "💼", title: "LinkedIn", value: "linkedin.com/in/ayoolumi-melehon", link: "https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" },
                    { icon: "🐙", title: "GitHub", value: "github.com/ayoolumi", link: "https://github.com/ayoolumi" },
                    { icon: "📍", title: "Location", value: "Edinburgh/Stirling, Scotland\nOpen to: On-site | Hybrid | Remote", link: null },
                    { icon: "⏰", title: "Response Time", value: "Within 24 hours on business days", link: null }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 transition break-words">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl border-2 border-teal-200 p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Actively seeking:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>→ PhD positions in Health Data Science</li>
                      <li>→ Healthcare Data Scientist roles</li>
                      <li>→ Health Analytics Engineer positions</li>
                      <li>→ Medical AI Research opportunities</li>
                      <li>→ Health Informatics roles</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Also open to:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>→ Research collaborations</li>
                      <li>→ Healthcare consulting projects</li>
                      <li>→ NHS innovation partnerships</li>
                      <li>→ Public health research</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-8"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">What Happens Next</h2>
                <ol className="space-y-3">
                  {[
                    "You submit the form",
                    "I review your message (within 24 hours)",
                    "I respond with availability or questions",
                    "We schedule a call or meeting",
                    "We discuss next steps together"
                  ].map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Ready CTA - White */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gray-50 rounded-2xl border-2 border-gray-200 p-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not ready to reach out yet?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/portfolio" className="px-6 py-3 bg-white border-2 border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition">
                Explore Portfolio
              </Link>
              <Link href="/about" className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition">
                Learn More About Me
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