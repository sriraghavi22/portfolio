import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaVideo } from 'react-icons/fa';

export default function VideoResume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="video-resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">
            Video Resume
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
              <FaVideo className="text-blue-500 dark:text-blue-400 mr-3 text-2xl" />
              My Professional Introduction
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get to know me through this brief video resume, highlighting my skills, experience, and passion for technology.
            </p>
            <div className="relative w-full aspect-video">
              <video
                src="/assets/resume.mp4"
                controls
                poster="/assets/image.png"
                className="w-full h-full rounded-md shadow-sm object-contain"
                aria-label="Video resume showcasing professional skills and experience"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}