// app/components/ProjectCard.tsx
'use client';

import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<Project['category'], string> = {
  'Product Analytics': 'bg-blue-500/90',
  'ML & AI': 'bg-purple-500/90',
  'Workforce Analytics': 'bg-green-500/90',
  'Data Engineering': 'bg-orange-500/90',
  'Operational Analytics': 'bg-teal-500/90',
  'Research': 'bg-red-500/90',
};

const cardGradients: Record<Project['category'], string> = {
  'Product Analytics': 'from-blue-900/40 to-blue-800/40 border-blue-400/30 hover:border-blue-400',
  'ML & AI': 'from-purple-900/40 to-purple-800/40 border-purple-400/30 hover:border-purple-400',
  'Workforce Analytics': 'from-green-900/40 to-green-800/40 border-green-400/30 hover:border-green-400',
  'Data Engineering': 'from-orange-900/40 to-orange-800/40 border-orange-400/30 hover:border-orange-400',
  'Operational Analytics': 'from-teal-900/40 to-teal-800/40 border-teal-400/30 hover:border-teal-400',
  'Research': 'from-red-900/40 to-red-800/40 border-red-400/30 hover:border-red-400',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`group bg-gradient-to-br backdrop-blur-md rounded-2xl border-2 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl h-full flex flex-col ${cardGradients[project.category]}`}>
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {project.screenshots[0] ? (
          <img 
            src={project.screenshots[0]} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-400 text-6xl">📊</div>
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${categoryColors[project.category]} shadow-lg`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-200 mb-4 line-clamp-3 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-white/20 text-white text-xs rounded-md backdrop-blur-sm border border-white/30"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-md backdrop-blur-sm border border-white/30">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 mt-auto">
          <Link 
            href={`/portfolio/${project.id}`}
            className="flex-1 text-center px-4 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-bold shadow-lg"
          >
            View Details
          </Link>
          
          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium border border-white/30 backdrop-blur-sm"
              title="Live Demo"
            >
              🚀
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium border border-white/30 backdrop-blur-sm"
              title="View Code"
            >
              💻
            </a>
          )}
        </div>
      </div>
    </div>
  );
}