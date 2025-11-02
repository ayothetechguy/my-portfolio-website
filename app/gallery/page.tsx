'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  
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

  const categories = ['All', 'Professional', 'Events', 'Projects', 'Achievements', 'Videos'];

  // Gallery items - you'll replace these with your actual media
  const galleryItems = [
    {
      type: 'image',
      category: 'Professional',
      title: 'Professional Headshot',
      description: 'Grangemouth, Scotland',
      url: '/gallery/headshot.jpg',
      thumbnail: '/gallery/headshot-thumb.jpg'
    },
    {
      type: 'image',
      category: 'Events',
      title: 'MSc Graduation',
      description: 'University of Stirling, 2025',
      url: '/gallery/graduation.jpg',
      thumbnail: '/gallery/graduation-thumb.jpg'
    },
    {
      type: 'video',
      category: 'Videos',
      title: 'Project Showcase',
      description: 'Analytics Dashboard Demo',
      url: '/gallery/demo.mp4',
      thumbnail: '/gallery/demo-thumb.jpg'
    },
    {
      type: 'image',
      category: 'Achievements',
      title: 'National Award',
      description: 'NYSC Recognition, 2021',
      url: '/gallery/award.jpg',
      thumbnail: '/gallery/award-thumb.jpg'
    },
    {
      type: 'image',
      category: 'Projects',
      title: 'Dashboard Presentation',
      description: 'Client workshop',
      url: '/gallery/presentation.jpg',
      thumbnail: '/gallery/presentation-thumb.jpg'
    },
    {
      type: 'video',
      category: 'Videos',
      title: 'Technical Tutorial',
      description: 'Python Analytics Walkthrough',
      url: '/gallery/tutorial.mp4',
      thumbnail: '/gallery/tutorial-thumb.jpg'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
                  src="/Head.jpg"
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
                <Link href="/services" className="text-gray-200 hover:text-white transition font-medium">Services</Link>
                <Link href="/experience" className="text-gray-200 hover:text-white transition font-medium">Experience</Link>
                <Link href="/gallery" className="text-white font-semibold">Gallery</Link>
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
                  <Link href="/services" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Services</Link>
                  <Link href="/experience" className="text-gray-200 hover:text-white py-2 px-4 hover:bg-white/10 rounded font-medium">Experience</Link>
                  <Link href="/gallery" className="text-white py-2 px-4 bg-white/10 rounded font-medium">Gallery</Link>
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
            <h1 className="text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">Gallery</h1>
            <p className="text-xl text-gray-200">Professional moments, achievements, and project highlights</p>
          </motion.div>

          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === category
                      ? 'bg-white text-gray-900'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:scale-105 transition-all cursor-pointer"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Placeholder - You'll replace with actual images */}
                <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="text-6xl">🎥</div>
                  ) : (
                    <div className="text-6xl">📷</div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <span className="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Placeholder Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-900/40 backdrop-blur-md rounded-2xl border-2 border-blue-400/30 p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Add Your Media</h3>
            <p className="text-gray-200 mb-4">
              This is a placeholder gallery. To add your actual images and videos:
            </p>
            <ol className="text-left text-gray-200 space-y-2 max-w-2xl mx-auto">
              <li>1. Create a <code className="bg-white/20 px-2 py-1 rounded">public/gallery</code> folder</li>
              <li>2. Add your images and videos to that folder</li>
              <li>3. Update the <code className="bg-white/20 px-2 py-1 rounded">galleryItems</code> array in the code with your actual file names</li>
              <li>4. Organize by categories: Professional, Events, Projects, Achievements, Videos</li>
            </ol>
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
      <p className="text-gray-300">© 2025 Ayoolumi Melehon | Grangemouth, Scotland</p>
    </div>
  </div>
</footer>
      </div>

      {/* Lightbox Modal (when clicking an item) */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedMedia.title}</h3>
                <p className="text-gray-300">{selectedMedia.description}</p>
              </div>
              <button 
                onClick={() => setSelectedMedia(null)}
                className="text-white hover:text-gray-300 text-3xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl flex items-center justify-center">
              <div className="text-8xl">{selectedMedia.type === 'video' ? '🎥' : '📷'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}