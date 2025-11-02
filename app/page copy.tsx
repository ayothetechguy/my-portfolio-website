'use client';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="/" className="text-xl font-bold text-gray-900">
              AYOOLUMI MELEHON
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
              <a href="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900">Services</a>
              <a href="/experience" className="text-gray-700 hover:text-gray-900">Experience</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                  mobileMenu.classList.toggle('hidden');
                }
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="/about" className="text-gray-700 hover:text-gray-900 py-2 px-4 hover:bg-gray-100 rounded">About</a>
              <a href="/portfolio" className="text-gray-700 hover:text-gray-900 py-2 px-4 hover:bg-gray-100 rounded">Portfolio</a>
              <a href="/services" className="text-gray-700 hover:text-gray-900 py-2 px-4 hover:bg-gray-100 rounded">Services</a>
              <a href="/experience" className="text-gray-700 hover:text-gray-900 py-2 px-4 hover:bg-gray-100 rounded">Experience</a>
              <a href="/contact" className="text-gray-700 hover:text-gray-900 py-2 px-4 hover:bg-gray-100 rounded">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Data Analytics • Machine Learning • AI Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building intelligent analytics systems—from user behavior insights and workforce 
            intelligence to predictive models and automated decision support
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            MSc in AI (University of Stirling) and CompTIA Data+ certified professional 
            specializing in end-to-end analytics solutions. I transform complex data into 
            actionable insights using modern analytics techniques, machine learning models, 
            and intelligent automation. From product analytics dashboards to predictive risk 
            models, I build practical tools that drive smarter decisions across healthcare, 
            workforce planning, and business operations.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/portfolio" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View Portfolio
            </a>
            <a 
              href="/contact" 
              className="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Analytics & BI */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Analytics & BI</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Product & User Analytics</li>
                <li>• Workforce Intelligence</li>
                <li>• Operational Metrics</li>
                <li>• Interactive Dashboards</li>
              </ul>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </a>
            </div>

            {/* Machine Learning & AI */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Machine Learning & AI</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Predictive Modeling</li>
                <li>• Anomaly Detection</li>
                <li>• NLP & Text Analytics</li>
                <li>• Behavioral Simulation</li>
              </ul>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </a>
            </div>

            {/* Data Engineering */}
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Engineering</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Pipeline Automation</li>
                <li>• Data Warehousing</li>
                <li>• Quality Frameworks</li>
                <li>• Report Automation</li>
              </ul>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">8+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-blue-100">Portfolio Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold">MSc AI</div>
              <div className="text-blue-100">2025</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Scotland</div>
              <div className="text-blue-100">Based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Ayoolumi Melehon | Grangemouth, Scotland</p>
        </div>
      </footer>
    </div>
  );
}