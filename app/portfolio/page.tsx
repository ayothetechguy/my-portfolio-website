'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const sampleProjects = [
  {
    id: 'emergency-wait-prediction',
    title: 'Emergency Department Wait Time Prediction',
    category: 'Healthcare AI',
    description: 'AI-powered system predicting A&E wait times using Gradient Boosting with 85.67% accuracy. Features real-time patient check-in, interactive visualizations, and clinical decision support.',
    image: '/projects/emergency-wait.png',
    techStack: ['Python', 'Scikit-learn', 'Gradient Boosting', 'Streamlit', 'Pandas', 'Plotly'],
    metrics: [
      { label: 'Accuracy', value: '85.67%' },
      { label: 'MAE', value: '17.6 min' },
      { label: 'Patients', value: '5,000+' },
    ],
    liveDemo: 'https://emergency-wait-prediction.streamlit.app',
    github: 'https://github.com/ayothetechguy/emergency-wait-prediction',
    color: 'from-blue-500 to-cyan-500',
    details: {
      introduction: 'This project develops an intelligent machine learning system designed to predict emergency department wait times in real-time. The system leverages historical patient data, staffing levels, and temporal patterns to provide accurate wait time estimates, helping both patients and healthcare administrators make informed decisions.',
      problemStatement: 'Emergency departments across the UK face significant challenges with unpredictable patient volumes and varying wait times. Patients often experience anxiety due to uncertainty about how long they will wait, while hospital administrators struggle to allocate resources efficiently.',
      previousGaps: 'Previous approaches to ED wait time prediction have relied heavily on simple averaging methods or basic queueing theory, which fail to capture the complex, non-linear relationships between various factors affecting wait times.',
      aimsObjectives: '1. Develop a machine learning model achieving over 80% accuracy in predicting ED wait times\n2. Identify and analyze the most significant factors influencing wait times\n3. Create an interactive, real-time prediction dashboard for clinical use\n4. Enable patient check-in functionality with instant wait time estimates',
      datasets: 'The project utilizes a synthetic dataset of 5,000+ patient records generated to mirror realistic NHS emergency department patterns. Features include arrival time, patient demographics, triage category, department occupancy, and staffing levels.',
      methodology: 'The project follows a structured data science methodology including data preprocessing, exploratory data analysis, model development with multiple algorithms, hyperparameter tuning, and deployment via Streamlit.',
      findings: '1. Model Performance: Gradient Boosting achieved 85.67% accuracy with MAE of 17.6 minutes\n2. Key Predictors: Department occupancy, time of arrival, and triage category were most influential\n3. Temporal Patterns: Wait times peak between 10 AM - 2 PM and 6 PM - 10 PM',
      limitations: '1. Synthetic Data: Model has not been validated on actual NHS data\n2. External Factors: Does not account for major incidents or equipment failures\n3. Single Department: May require retraining for different hospital settings',
      recommendations: '1. Partner with NHS trusts to validate using actual ED data\n2. Integrate real-time data feeds for occupancy and staffing\n3. Develop patient-facing mobile app for wait time notifications'
    }
  },
  {
    id: 'patient-readmission-risk',
    title: 'Patient Readmission Risk Prediction',
    category: 'Predictive Analytics',
    description: 'Machine learning model predicting 30-day hospital readmission risk with 82.3% accuracy. Identifies high-risk patients for targeted interventions and care management.',
    image: '/projects/readmission-risk.png',
    techStack: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'SHAP', 'PostgreSQL'],
    metrics: [
      { label: 'AUC-ROC', value: '0.847' },
      { label: 'Precision', value: '78.2%' },
      { label: 'Records', value: '50,000+' },
    ],
    liveDemo: 'https://readmission-risk.streamlit.app',
    github: 'https://github.com/ayothetechguy/readmission-risk',
    color: 'from-purple-500 to-pink-500',
    details: {
      introduction: 'Hospital readmissions within 30 days of discharge represent a significant burden on healthcare systems. This project develops a predictive machine learning system to identify patients at high risk of readmission at the point of discharge.',
      problemStatement: 'Unplanned hospital readmissions affect approximately 1 in 7 patients in the UK, with significant costs to the NHS and negative impacts on patient wellbeing. Current discharge processes often fail to identify patients who would benefit from additional support.',
      previousGaps: 'Traditional readmission risk assessment relies on clinical judgment or simple scoring systems with limited predictive accuracy. Many existing models lack interpretability, making clinical adoption challenging.',
      aimsObjectives: '1. Develop a machine learning model achieving AUC-ROC over 0.80\n2. Identify modifiable risk factors for targeted interventions\n3. Create interpretable predictions using SHAP values\n4. Build a user-friendly clinical decision support dashboard',
      datasets: 'The project uses a synthetic dataset of 50,000+ patient discharge records including demographics, admission details, clinical data, medication information, and previous healthcare utilization.',
      methodology: 'The project employs data engineering, feature selection, model comparison (Logistic Regression, Random Forest, XGBoost), hyperparameter optimization, and SHAP-based interpretation.',
      findings: '1. XGBoost achieved AUC-ROC of 0.847 and precision of 78.2%\n2. Top risk factors: previous admissions, length of stay, comorbidity index\n3. 42% of readmissions occurred within first 10 days post-discharge',
      limitations: '1. Synthetic data requires validation on real NHS data\n2. Model predicts any-cause readmission rather than condition-specific\n3. Limited capture of social determinants of health',
      recommendations: '1. Conduct prospective validation study in NHS setting\n2. Develop FHIR-compatible APIs for EHR integration\n3. Create condition-specific models for heart failure, COPD, diabetes'
    }
  },
];

type Project = typeof sampleProjects[0];

function ProjectDetailModal({ 
  project, 
  isOpen, 
  onClose 
}: { 
  project: Project | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!project) return null;

  const sections = [
    { id: 'introduction', title: '1. Project Introduction', content: project.details.introduction, icon: '📋' },
    { id: 'problem', title: '2. Problem Statement', content: project.details.problemStatement, icon: '⚠️' },
    { id: 'gaps', title: '3. Previous Gaps in the Field', content: project.details.previousGaps, icon: '🔍' },
    { id: 'aims', title: '4. Aims and Objectives', content: project.details.aimsObjectives, icon: '🎯' },
    { id: 'datasets', title: '5. Datasets Used', content: project.details.datasets, icon: '📊' },
    { id: 'methodology', title: '6. Methodology', content: project.details.methodology, icon: '⚙️' },
    { id: 'findings', title: '7. Findings', content: project.details.findings, icon: '💡' },
    { id: 'limitations', title: '8. Limitations', content: project.details.limitations, icon: '📌' },
    { id: 'recommendations', title: '9. Recommendations for Future Work', content: project.details.recommendations, icon: '🚀' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 z-10 bg-gradient-to-r ${project.color} rounded-t-3xl p-8 text-white`}>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
              <p className="text-white/90 text-lg max-w-3xl">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-8 mt-6 pt-6 border-t border-white/20">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-white/70 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                        {section.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                          {section.title}
                        </h3>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    </div>
                    {index < sections.length - 1 && (
                      <div className="ml-16 mt-8 border-b border-slate-100" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-slate-200">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 min-w-[200px] px-6 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold text-center hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="fixed inset-0 z-0 opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
      </div>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
              ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200/50' 
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                  <img
                    src="/Head.jpg"
                    alt="Ayoolumi Melehon"
                    className="relative w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-blue-600 transition-all">
                  AYOOLUMI MELEHON
                </span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={`relative font-medium text-sm py-2 transition-colors ${
                      item === 'Portfolio' 
                        ? 'text-teal-600' 
                        : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact"
                    className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              <button 
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                className="md:hidden pb-4 border-t border-slate-200 bg-white/90 backdrop-blur-xl rounded-b-2xl"
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {['Home', 'About', 'Portfolio', 'Services', 'Experience'].map((item) => (
                    <Link 
                      key={item}
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className={`py-3 px-4 rounded-xl font-medium transition-all ${
                        item === 'Portfolio'
                          ? 'text-teal-600 bg-teal-50'
                          : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <Link 
                    href="/contact"
                    className="mt-2 mx-4 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/50 rounded-full text-sm font-medium text-teal-700 mb-8"
              >
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                Healthcare Data, Analytics, Technology &amp; Medical AI PhD Opportunities
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="text-slate-900">Building </span>
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Intelligent
                </span>
                <br />
                <span className="text-slate-900">Healthcare Solutions</span>
              </h1>

              <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                Transforming complex healthcare data into actionable insights through 
                machine learning, predictive analytics, and interactive visualizations.
              </p>

              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { value: '85%+', label: 'Model Accuracy' },
                  { value: '50K+', label: 'Records Processed' },
                  { value: '10+', label: 'ML Projects' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  Featured Projects
                </h2>
                <p className="text-slate-600">
                  Showcasing {sampleProjects.length} healthcare AI solutions
                </p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <span className="text-sm text-slate-500">Filter:</span>
                <button className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-full text-sm font-medium">
                  All Projects
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition">
                  Healthcare AI
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-200 transition">
                  Analytics
                </button>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {sampleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 hover:-translate-y-2">
                    <div className={`relative h-56 bg-gradient-to-br ${project.color} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20">
                        <div 
                          className="absolute inset-0"
                          style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                          }} 
                        />
                      </div>
                      
                      <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                          <div className="flex-1 h-4 bg-white/20 rounded ml-2" />
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="bg-white/20 rounded-lg p-2 text-center">
                              <div className="text-white font-bold text-sm">{metric.value}</div>
                              <div className="text-white/70 text-xs">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-white/20 rounded w-full" />
                          <div className="h-2 bg-white/20 rounded w-4/5" />
                          <div className="h-2 bg-white/20 rounded w-3/5" />
                        </div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                            <div className="text-xs text-slate-500">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-2">
                        <motion.button
                          onClick={() => openProjectModal(project)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Details
                        </motion.button>

                        <div className="flex items-center gap-2">
                          <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-slate-100 hover:bg-teal-500 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all"
                            title="Live Demo"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all"
                            title="Source Code"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">More Projects Coming Soon</div>
                  <div className="text-sm text-slate-500">8 additional healthcare AI projects in development</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-600" />
          <div className="absolute inset-0 opacity-30">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} 
            />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Looking for a healthcare data scientist who can turn complex medical data into life-saving insights? Let&apos;s talk.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold shadow-2xl shadow-black/20 hover:shadow-white/25 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get in Touch
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://github.com/ayothetechguy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View GitHub
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="bg-slate-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/Head.jpg"
                    alt="Ayoolumi Melehon"
                    className="w-12 h-12 rounded-full object-cover border-2 border-teal-500"
                  />
                  <span className="text-xl font-bold">Ayoolumi Melehon</span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-md">
                  Healthcare Data Scientist &amp; AI Researcher specializing in predictive analytics 
                  and machine learning for health system improvement across Scotland.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                <div className="space-y-3">
                  {['About', 'Portfolio', 'Services', 'Experience', 'Contact'].map(item => (
                    <Link 
                      key={item} 
                      href={`/${item.toLowerCase()}`} 
                      className="block text-slate-400 hover:text-teal-400 transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white">Connect</h4>
                <div className="flex gap-3">
                  <a 
                    href="mailto:ayoolumimelehon@gmail.com" 
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ayoolumi-melehon-b63237179/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/ayothetechguy" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
              <p>© 2025 Ayoolumi Melehon | Edinburgh/Stirling, Scotland</p>
            </div>
          </div>
        </footer>
      </div>

      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}