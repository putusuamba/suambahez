import React from 'react';
import { Github, Instagram, Mail, Phone, ExternalLink, MapPin, Globe, ChevronRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    // {
    //   icon: Phone,
    //   // href: 'https://wa.me/62895415733223',
    //   title: 'WhatsApp',
    //   color: 'group-hover:bg-green-500',
    // },
    {
      icon: Instagram,
      href: 'https://instagram.com/suambahez',
      title: 'Instagram',
      color: 'group-hover:bg-gradient-to-r from-purple-500 to-pink-500',
    },
    {
      icon: Mail,
      href: 'mailto:suambaady123@gmail.com',
      title: 'Email',
      color: 'group-hover:bg-blue-500',
    },
    {
      icon: Github,
      href: 'https://github.com/putusuamba',
      title: 'GitHub',
      color: 'group-hover:bg-gray-800',
    }
  ];

  const quickLinks = [
    { name: 'Home', icon: 'home' },
    // { name: 'About', icon: 'user' },
    { name: 'Experience', icon: 'briefcase' },
    { name: 'Skills', icon: 'code' },
    { name: 'Projects', icon: 'code' },
    { name: 'Contact', icon: 'mail' }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Denpasar, Bali',
      color: 'hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: 'Country',
      value: 'Indonesia',
      color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'suambaady123@gmail.com',
      link: 'mailto:suambaady123@gmail.com',
      color: 'hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      isSmall: true
    },
    // {
    //   icon: <Phone className="w-5 h-5" />,
    //   label: 'WhatsApp',
    //   value: '+62 895 4157 33223',
    //   link: 'https://wa.me/62895415733223',
    //   color: 'hover:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20'
    // }
  ];

  return (
    <footer className="relative pt-2 pb-2 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-0/10 rounded-full filter blur-3xl"></div>

      <div className="relative mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          {/* Main content dengan gap yang sangat kecil untuk mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
            {/* Brand section */}
            <div className="lg:col-span-2 mb-2 md:mb-4">
              <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                Suamba<span className="text-blue-600">Hez</span>
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-2 md:mb-3 max-w-md">
                A passionate web developer focused on creating amazing and innovative web experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-1.5 md:gap-2">
                {socialLinks.map(({ icon: Icon, href, title, color }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`
                      p-3
                      rounded-xl
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      transition-all duration-300
                      ${color}
                      group-hover:border-transparent
                      group-hover:shadow-lg
                      group-hover:-translate-y-1
                      flex items-center justify-center
                    `}>
                      <Icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="sr-only">{title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="mb-2 md:mb-0">
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h4>
              <ul className="space-y-0.5 md:space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.name.toLowerCase()}`}
                      className="group flex items-center p-2 -mx-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <span className="relative flex h-8 w-8 mr-3 items-center justify-center">
                        {/* Animated background */}
                        <span className="absolute inline-flex h-full w-full rounded-lg bg-blue-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                        <span className="relative inline-flex rounded-lg h-6 w-6 bg-blue-500/10 group-hover:bg-blue-500 items-center justify-center transition-colors duration-300">
                          <ExternalLink className="w-3.5 h-3.5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                        </span>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-medium transition-colors duration-300">
                        {link.name}
                      </span>
                      
                      {/* Arrow indicator */}
                      <span className="ml-auto transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 relative inline-block">
                Contact Info
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </h4>
              <div className="space-y-1 md:space-y-1.5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="mb-1 last:mb-0">
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`
                          group flex items-center p-2 md:p-3 rounded-lg
                          border border-gray-100 dark:border-gray-700
                          transition-all duration-300
                          hover:shadow-md
                          ${info.color}
                        `}
                      >
                        <ContactInfoContent info={info} />
                      </a>
                    ) : (
                      <div className={`
                        group flex items-center p-2 md:p-3 rounded-lg
                        border border-gray-100 dark:border-gray-700
                        transition-all duration-300
                        ${info.color}
                      `}>
                        <ContactInfoContent info={info} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} SuambaHez. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                Made with ❤️ in Bali
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ContactInfoContent = ({ info }) => (
  <>
    <div className={`
      w-10 h-10 rounded-lg
      bg-gray-50 dark:bg-gray-800
      flex items-center justify-center
      group-hover:scale-110
      transition-transform duration-300
      mr-4
    `}>
      {info.icon}
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {info.label}
      </p>
      <p className={`font-medium text-gray-900 dark:text-gray-100 ${info.isSmall ? 'text-sm' : ''}`}>
        {info.value}
      </p>
    </div>
    {info.link && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronRight className="w-5 h-5" />
      </div>
    )}
  </>
);

export default Footer;