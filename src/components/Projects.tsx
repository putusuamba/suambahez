import React, { useState } from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Developed a responsive portfolio website during 11th grade, showcasing projects and skills with modern design principles.',
    image: '/webme.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'web'
  },
  {
    title: 'Early Portfolio Project',
    description: 'First portfolio website created during 10th grade, demonstrating fundamental web development skills and responsive design.',
    image: '/websaya.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web'
  },
  {
    title: 'E-Commerce Electronics Store',
    description: 'Collaborated on a team project to create an electronics e-commerce website with responsive product listings and interactive shopping features.',
    image: 'webme1.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web'
  },
  {
    title: 'Hospital Management Dashboard',
    description: 'Designed an intuitive hospital management dashboard featuring patient records, appointment scheduling, and analytics visualization.',
    image: '/praktikdokter.png',
    tech: ['Laravel', 'MySQL', 'Filament'],
    category: 'web'
  },
  {
    title: 'Travel App UI/UX Design',
    description: 'Created a modern travel application interface focusing on user experience, featuring destination discovery and booking workflows.',
    image: '/wisata.png',
    tech: ['Figma', 'UI/UX', 'User Research'],
    category: 'ui/ux'
  },
  {
    title: 'Point of Sale UI/UX Design',
    description: 'Designed a clean and efficient point of sale interface with focus on transaction speed and user-friendly operation.',
    image: '/figmakasir1.png',
    tech: ['Figma', 'UI Design', 'User Flow', 'Prototyping'],
    category: 'ui/ux'
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-4 md:py-16 mx-auto px-0 sm:px-6 lg:px-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-none sm:rounded-2xl p-4 sm:p-8 shadow-lg">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Portfolio <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kumpulan proyek terbaik yang telah saya kerjakan dalam pengembangan web dan desain UI/UX
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm md:text-base border-2 rounded-md transition ${
              activeCategory === 'all'
                ? 'border-blue-600 text-blue-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm md:text-base border-2 rounded-md transition ${
              activeCategory === 'web'
                ? 'border-blue-600 text-blue-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveCategory('ui/ux')}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 text-sm md:text-base border-2 rounded-md transition ${
              activeCategory === 'ui/ux'
                ? 'border-blue-600 text-blue-600'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            UI/UX Design
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800/50 rounded-lg overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:rounded-lg
                after:absolute after:inset-0 after:bg-grid-white/[0.02] after:rounded-lg
                hover:before:from-blue-500/10 hover:before:to-purple-500/10
                dark:before:from-blue-400/5 dark:before:to-purple-400/5
                dark:hover:before:from-blue-400/10 dark:hover:before:to-purple-400/10"
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-grid-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] sm:text-xs tracking-wider relative group/tag w-fit
                        before:absolute before:inset-0 before:bg-gradient-to-r 
                        before:from-blue-500/20 before:to-purple-500/20 
                        before:rounded-lg before:transition-all before:duration-300
                        before:hover:scale-105 before:-z-10
                        after:absolute after:inset-0 after:bg-white/5 after:rounded-lg
                        after:border after:border-blue-200/30 after:transition-all
                        dark:after:border-blue-500/30 dark:before:from-blue-400/20 
                        dark:before:to-purple-400/20
                        text-gray-700 dark:text-gray-200"
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;