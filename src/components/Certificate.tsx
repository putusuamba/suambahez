import React from 'react';
import { Award } from 'lucide-react';

const Certificate = () => {
  return (
    <section id="certificates" className="py-4 sm:py-20">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Award className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-100">
              Certificate
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Relevant certification showcasing skills and dedication to learning and growth.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Image Section */}
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-md">
                <img
                  src="/Sertifikat BambooMedia-Suamba.png"
                  alt="Professional Certificate"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                  Internship Certificate
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Company
                    </h4>
                    <p className="text-base text-gray-800 dark:text-gray-200">
                      PT. Bamboo Media Cipta Persada
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Position
                    </h4>
                    <p className="text-base text-gray-800 dark:text-gray-200">
                    Front-End Intern
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Duration
                    </h4>
                    <p className="text-base text-gray-800 dark:text-gray-200">
                      September 9, 2024 - November 30, 2024 (3 months)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
                      Achievement
                    </h4>
                    <p className="text-base text-gray-800 dark:text-gray-200">
                      I am developing the front-end of a doctor's clinic system, focusing on the cashier page while also contributing to some back-end development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-lg blur opacity-20 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Certificate; 