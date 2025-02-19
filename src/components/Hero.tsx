import React from 'react';
import { FileText, Mail, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-8 sm:mb-20 pt-2 sm:pt-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mx-auto px-0 sm:px-6">
        <div className="relative bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative">
                <img
                  src="fotobeach.jpg"
                  alt="Profile"
                  className="w-32 sm:w-40 h-auto rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 p-1.5 rounded-lg shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-1 rounded-md">
                    <span className="text-sm">👀</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-300 flex-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold">I Putu Gede Suamba Adi Putra</h3>
              <p className="text-xs">Frontend Developer</p>
              <p className="text-xs mb-3">Bali, Indonesia 🌴</p>
              
              <div>
                <p className="text-sm sm:text-base font-semibold mb-1">Pengalaman Magang:</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">PT. Hooki Global Kreasi</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                  </div>
                  <div>
                    <p className="text-base font-medium">PT. Bamboo Media Cipta Persada</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-6 sm:mt-8">
            {/* Expertise */}
            <div className="group p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-base">🌟</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Expertise</h4>
                  <div className="flex gap-1 mt-1">
                    {['Frontend Developer', 'UI/UX'].map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="group p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 rounded-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-base">🔧</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Tools</h4>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {['HTML', 'CSS', 'JS', 'React'].map((tool) => (
                      <span key={tool} className="px-2 py-0.5 text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-green-50 dark:bg-green-900/30 rounded-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-base">📚</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Education</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-0.5">
                    SMKN 1 Denpasar
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <div className="group p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-sm">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-orange-50 dark:bg-orange-900/30 rounded-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-base">🚀</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Hobbies</h4>
                  <div className="flex items-center gap-2 mt-1">
                    {['Football', 'Design', 'Fishing'].map((hobby) => (
                      <span key={hobby} className="px-2 py-0.5 text-xs bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-md">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
            {/* 
            <a 
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FileText className="w-4 h-4" />
              See My CV
            </a>
            */}
            <a 
              href={`mailto:suambaady123@gmail.com`}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg" id="about">
            {/* <span className="inline-block px-4 sm:px-5 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-base sm:text-lg font-medium mb-4">
              -
            </span> */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me <span className="inline-block">🚀</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Suamba👋</span>, 
              a passionate Web Developer <span className="inline-block">💻</span> currently studying at 
              <span className="font-medium"> SMKN 1 Denpasar</span>. With an educational background in information technology, 
              I have the ability to create innovative and interactive web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* GitHub Projects */}
            <div className="group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        3
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">+</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">Github Projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        17
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">years old</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">Young Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
