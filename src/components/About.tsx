import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 md:py-60 min-h-screen scroll-mt-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-left md:ml-[40%] lg:ml-[50%] xl:ml-[55%] mb-20 mt-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        <div className="md:ml-[40%] lg:ml-[50%] xl:ml-[55%] space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Background</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                With over 5 years of experience in web development, I specialize in creating responsive, 
                user-friendly applications using modern technologies like React, TypeScript, and Tailwind CSS.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about clean code, intuitive design, and creating exceptional user experiences 
                that make a difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Core Values</h3>
              <ul className="space-y-6">
                {[
                  'User-Centered Design',
                  'Clean & Maintainable Code',
                  'Performance Optimization',
                  'Continuous Learning',
                ].map((value, index) => (
                  <motion.li
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 
                      group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 
                      dark:group-hover:text-blue-400 transition-colors duration-300">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-[5%] -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>
      <div className="absolute bottom-40 left-[60%] -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>
    </motion.section>
  );
};

export default About;