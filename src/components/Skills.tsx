import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML',
    icon: '🌐',
    color: 'from-orange-400 to-orange-600',
    progress: 85,
  },
  {
    name: 'CSS',
    icon: '🎨',
    color: 'from-blue-400 to-blue-600',
    progress: 80,
  },
  {
    name: 'JavaScript',
    icon: '⚡️',
    color: 'from-yellow-300 to-yellow-300',
    progress: 72,
  },
  {
    name: 'React JS',
    icon: '⚛️',
    color: 'from-cyan-400 to-cyan-600',
    progress: 65,
  },
  {
    name: 'PHP',
    icon: '🐘',
    color: 'from-purple-400 to-purple-600',
    progress: 74,
  },
  {
    name: 'Laravel',
    icon: '🔥',
    color: 'from-red-400 to-red-600',
    progress: 78,
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0, scale: 0.9 },
        animate: { 
          opacity: 1, 
          scale: 1,
          transition: {
            duration: 0.8,
            delay: 0.2
          }
        }
      }}
      className="py-10 sm:py-20"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold relative">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Skills</span>
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </h2>
          <span className="px-4 py-2 bg-gradient-to-r from-blue-400/10 to-blue-600/10 text-blue-500 dark:text-blue-400 rounded-lg border border-blue-500/20 backdrop-blur-sm">
            Web Developer
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {skill.progress}%
                    </span>
                  </div>
                </div>
                
                {/* Hover effect badges */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r ${skill.color} text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Expert
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-3xl opacity-10"></div>
      </div>
    </motion.section>
  );
};

export default Skills;