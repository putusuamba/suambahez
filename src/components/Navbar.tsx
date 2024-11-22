import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id], div[id]');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 150;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute('id') || '';
        if (currentId === 'home' && document.getElementById('about')?.getBoundingClientRect().top <= 150) {
          setActiveSection('about');
        } else {
          setActiveSection(currentId);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  // Animasi untuk mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const navItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Experience", sectionId: "experience" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    { label: "Blog", sectionId: "blog" },
    { label: "Contact", sectionId: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <span className="text-xl font-bold">SuambaHez</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.sectionId}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300
                    ${activeSection === item.sectionId 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.sectionId && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.sectionId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300
                    ${activeSection === item.sectionId
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;