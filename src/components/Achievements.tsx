import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaFileAlt } from 'react-icons/fa';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Achievements & Awards</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <FaTrophy className="text-yellow-500 mr-3" />
                Competitions & Hackathons
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Tech Savishkar 3.0 (National Level) – 2nd Prize</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Farm2Fork Supply Chain Project (Blockchain & IPFS)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Code Breakers – 3rd Prize</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Multi-round coding competition (aptitude, debugging, coding)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Tech Tussle – 4th Rank</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Two-round competition (MCQs and coding challenges)</p>
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
                Achievements & Recognition
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">GirlScript Summer of Code – Rank 122</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Among thousands of open-source contributors globally</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Certificate of Academic Excellence</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Highest academic performance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Branch Topper – 3 Consecutive Semesters</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">College-wide 2nd rank (1st sem)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-medium">Selected for NxtWave NSDC Fellowship</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Prestigious fellowship recognition</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}