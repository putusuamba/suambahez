import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-2 sm:py-20 min-h-fit sm:min-h-screen scroll-mt-20"
    >
      <div className="bg-white dark:bg-gray-800 rounded-none sm:rounded-2xl p-4 sm:p-8 shadow-lg mb-2 sm:mb-8">
        <h2 className="text-3xl font-bold mb-2">
          Let's <span className="text-blue-600">👋 Work</span> Together
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I'd love to hear from you! Whether you're interested in working together on a new project,
          have questions about my experience, or simply want to share ideas, please don't hesitate to contact me.
        </p>

        {submitStatus.type && (
          <div className={`mb-4 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form 
          action="https://formsubmit.co/ajax/suambaady123@gmail.com" 
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus({ type: null, message: '' });
            
            try {
              const response = await fetch("https://formsubmit.co/ajax/suambaady123@gmail.com", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(formData),
              });

              if (response.ok) {
                setSubmitStatus({
                  type: 'success',
                  message: 'Pesan Anda telah berhasil terkirim! Terima kasih telah menghubungi saya.'
                });
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                });
              } else {
                throw new Error('Gagal mengirim pesan');
              }
            } catch (error) {
              setSubmitStatus({
                type: 'error',
                message: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.'
              });
            } finally {
              setIsSubmitting(false);
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Contact Form Submission" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda." />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover:shadow-lg hover:-translate-y-0.5 duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;