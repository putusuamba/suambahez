import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Mengambil preferensi tema dari localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id], div[id]');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - 150;
      const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute('id') || '';
        // Hapus logika ini untuk bagian "Home"
        if (currentId !== 'home') {
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
    
    // Set activeSection ke sectionId yang diklik
    setActiveSection(sectionId);
    
    // Jika sectionId adalah "home", pastikan untuk mengatur activeSection ke "home"
    if (sectionId === "home") {
      setActiveSection("home");
    } else {
      // Jika bukan "home", tetap set activeSection ke sectionId yang diklik
      setActiveSection(sectionId);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        const navHeight = 64;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        });
      }, 100);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Menerapkan tema ke document
    document.documentElement.classList.toggle('dark', isDarkMode);
    // Menyimpan preferensi tema ke localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Modifikasi fungsi toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const navItems = [
    { label: "Home", sectionId: "home" },
    // { label: "About", sectionId: "about" },
    { label: "Experience", sectionId: "experience" },
    { label: "Skills", sectionId: "skills" },
    { label: "Projects", sectionId: "projects" },
    // { label: "Blog", sectionId: "blog" }, // Temporarily hidden
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
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    // Set activeSection ke sectionId yang diklik
                    setActiveSection(item.sectionId);
                  }}
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

          {/* Mobile buttons */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu yang diperbarui */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300
                    ${activeSection === item.sectionId
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;