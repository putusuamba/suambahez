import React from 'react';
import { Calendar, Code, Briefcase } from 'lucide-react';

const experiences = [
  {
    period: '2024',
    title: 'Modern Web Development',
    description: 'Mengembangkan aplikasi web modern menggunakan Laravel sebagai backend, Filament untuk admin panel, React untuk frontend interaktif, dan Tailwind CSS untuk styling yang efisien',
    icon: <Code className="w-6 h-6" />,
    tech: [
      { name: 'Laravel', color: 'text-red-500 border-red-200 bg-red-50 dark:bg-red-900/10' },
      { name: 'Filament', color: 'text-indigo-500 border-indigo-200 bg-indigo-50 dark:bg-indigo-900/10' },
      { name: 'React', color: 'text-cyan-500 border-cyan-200 bg-cyan-50 dark:bg-cyan-900/10' },
      { name: 'Tailwind CSS', color: 'text-sky-500 border-sky-200 bg-sky-50 dark:bg-sky-900/10' }
    ],
    color: 'from-purple-500 to-blue-500'
  },
  {
    period: '2023',
    title: 'Web Development Fundamentals',
    description: 'Membangun fondasi dalam pengembangan web dengan menguasai HTML untuk struktur, CSS untuk styling, dan JavaScript untuk membuat website yang interaktif',
    icon: <Briefcase className="w-6 h-6" />,
    tech: [
      { name: 'HTML', color: 'text-orange-500 border-orange-200 bg-orange-50 dark:bg-orange-900/10' },
      { name: 'CSS', color: 'text-blue-500 border-blue-200 bg-blue-50 dark:bg-blue-900/10' },
      { name: 'JavaScript', color: 'text-yellow-500 border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10' }
    ],
    color: 'from-blue-500 to-teal-500'
  },
  {
    period: '2022',
    title: 'Pascal Programming',
    description: 'Memulai perjalanan programming dengan mempelajari konsep dasar algoritma, logika pemrograman, dan struktur data menggunakan bahasa Pascal',
    icon: <Calendar className="w-6 h-6" />,
    tech: [
      { name: 'Pascal', color: 'text-green-500 border-green-200 bg-green-50 dark:bg-green-900/10' },
      { name: 'Algoritma', color: 'text-purple-500 border-purple-200 bg-purple-50 dark:bg-purple-900/10' },
      { name: 'Struktur Data', color: 'text-pink-500 border-pink-200 bg-pink-50 dark:bg-pink-900/10' }
    ],
    color: 'from-teal-500 to-green-500'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-4 md:py-20 px-0 md:px-0">
      <div className="bg-white dark:bg-gray-800 rounded-none sm:rounded-2xl p-4 sm:p-8 shadow-lg relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/10 to-teal-500/10 blur-3xl"></div>
        
        {/* Content */}
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-2 md:gap-4">
            <span className="bg-blue-500/10 p-2 md:p-3 rounded-xl">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
            </span>
            Experience
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-2 md:ml-4"></div>
          </h2>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8 group"
              >
                {/* Timeline line */}
                <div className="hidden md:block absolute left-[27px] top-0 w-px h-full bg-gradient-to-b from-current to-transparent opacity-20 group-last:hidden"></div>

                {/* Period */}
                <div className="relative">
                  <div className={`
                    w-12 h-12 md:w-14 md:h-14
                    rounded-xl
                    flex items-center justify-center
                    bg-gradient-to-br ${exp.color}
                    text-white
                    shadow-lg
                    group-hover:scale-110
                    transition-transform duration-300
                  `}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600/10">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <h3 className="text-lg md:text-xl font-bold">{exp.title}</h3>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`
                          px-2 md:px-3 py-1 md:py-1.5
                          text-xs md:text-sm font-medium
                          rounded-lg
                          border
                          transition-all duration-300
                          hover:scale-105
                          ${tech.color}
                        `}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;