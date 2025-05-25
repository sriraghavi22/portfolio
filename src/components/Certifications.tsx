import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import Modal from 'react-modal';

// Bind modal to app element for accessibility
Modal.setAppElement('#root');

interface Certification {
  name: string;
  year: string;
  image: string;
  pdf?: string;
}

const certificationData: Certification[][] = [
  [
    {
      name: 'Google - AIML Virtual Internship',
      year: '2024',
      image: '/assets/certificates/google-aiml.jpg',
    },
    {
      name: 'Oracle - Java Fundamentals',
      year: '2024',
      image: '/assets/certificates/oracle-java.jpg',
    },
    {
      name: 'Postman - API Fundamentals Student Expert',
      year: '2024',
      image: '/assets/certificates/postman.png',
    },
  ],
  [
    {
      name: 'NPTEL - Python for Data Science (Top 2%)',
      year: '2023',
      image: '/assets/certificates/python.jpg',
    },
    {
      name: 'NPTEL - Problem Solving Through C',
      year: '2023',
      image: '/assets/certificates/problem.jpg',
    },
  ],
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16 text-3xl font-bold text-gray-800 dark:text-gray-100">
            Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {certificationData.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, x: groupIndex === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + groupIndex * 0.2 }}
                className="card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800 dark:text-gray-100">
                  <FaFileAlt className="text-blue-500 dark:text-blue-400 mr-3 text-2xl" />
                  {groupIndex === 0 ? '2024 Certifications' : '2023 Certifications'}
                </h3>
                <ul className="space-y-6">
                  {group.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary-dark dark:bg-primary-light rounded-full mt-2 mr-3"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <img
                            src={cert.image}
                            alt={`${cert.name} certificate thumbnail`}
                            className="w-16 h-16 object-cover rounded-md shadow-sm cursor-pointer hover:scale-105 transition-transform"
                            loading="lazy"
                            onClick={() => openModal(cert.image)}
                            role="button"
                            aria-label={`View ${cert.name} certificate`}
                          />
                          <div>
                            <p className="font-medium text-gray-800 dark:text-gray-100">{cert.name}</p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.year}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="fixed inset-x-0 top-16 bottom-0 mx-auto p-4 flex items-start justify-center z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
            contentLabel="Certificate Image Modal"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 z-10"
                aria-label="Close certificate modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selectedImage && (
                <motion.img
                  src={selectedImage}
                  alt="Full certificate"
                  className="w-full h-auto max-h-[calc(100vh-8rem)] object-contain rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          </Modal>
        </motion.div>
      </div>
    </section>
  );
}