import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt } from 'react-icons/fa';

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Certifications</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaFileAlt className="text-blue-500 mr-3" />
                2024 Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Google - AIML Virtual Internship</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Oracle - Java Fundamentals</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2024</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Postman - API Fundamentals Student Expert</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2024</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaFileAlt className="text-blue-500 mr-3" />
                2023 Certifications
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">NPTEL - Python for Data Science (Top 2%)</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">NPTEL - Problem Solving Through C</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2023</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">IBM SkillsBuild - Artificial Intelligence</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">2023</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}