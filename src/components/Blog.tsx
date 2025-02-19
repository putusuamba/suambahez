import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const blogs = [
  {
    title: 'Building a Hospital Cashier Management System with Laravel',
    excerpt: 'Developed a comprehensive hospital cashier system using Laravel, featuring patient billing management, appointment tracking, and detailed financial reporting. Implemented secure authentication, MySQL database integration, and responsive dashboard.',
    date: 'Nov 1, 2023',
    readTime: '8 min read',
    image: '/kasirdokter.png',
    category: 'Laravel',
  },
  {
    title: 'Creating a Modern Portfolio with Next.js and TailwindCSS',
    excerpt: 'Designed and developed a personal portfolio website using Next.js 14, TypeScript, and TailwindCSS. Implemented dark mode, responsive design, and smooth animations with Framer Motion. Features project showcases and blog integration.',
    date: 'Nov 22, 2024',
    readTime: '6 min read',
    image: '/lastblog.png',
    category: 'Next.js',
  },
];

const Blog = () => {
  return (
    // Temporarily hidden
    <></>
    // <section id="blog" className="py-4 sm:py-20">
    //   <div className="bg-white dark:bg-gray-800 rounded-none sm:rounded-2xl p-4 sm:p-8 shadow-lg">
    //     <div className="mb-8">
    //       <h2 className="text-2xl md:text-3xl font-bold">
    //         Latest <span className="text-blue-600">Blog</span> Posts
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
    //       {blogs.map((blog) => (
    //         <article
    //           key={blog.title}
    //           className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
    //         >
    //           <div className="relative overflow-hidden">
    //             <img
    //               src={blog.image}
    //               alt={blog.title}
    //               className="w-full h-40 sm:h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
    //             />
    //             <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
    //               {blog.category}
    //             </span>
    //           </div>
    //           <div className="p-4 sm:p-6">
    //             <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
    //               {blog.title}
    //             </h3>
    //             <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
    //               {blog.excerpt}
    //             </p>
    //             <div className="flex items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 gap-4">
    //               <span className="flex items-center gap-1">
    //                 <Calendar className="w-4 h-4" />
    //                 {blog.date}
    //               </span>
    //               <span className="flex items-center gap-1">
    //                 <Clock className="w-4 h-4" />
    //                 {blog.readTime}
    //               </span>
    //             </div>
    //           </div>
    //         </article>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
};

export default Blog;