import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, ReactElement } from 'react';
import { FaChevronDown, FaChevronUp, FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';

interface Education {
  institution: string;
  degree: string;
  score: string;
  duration: string;
  location: string;
  details?: string[];
  icon: ReactElement;
}

const educationData: Education[] = [
  {
    institution: 'B V Raju Institute of Technology',
    degree: 'Bachelor of Technology - Computer Science Engineering (Data Science)',
    score: 'GPA: <strong>9.35</strong>',
    duration: 'Nov 2022 - Expected 2026',
    location: 'Telangana, India',
    details: [
      'Courses: Operating Systems, Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Networking, Databases',
    ],
    icon: <FaUniversity className="text-blue-500 dark:text-blue-400 text-2xl group-hover:text-opacity-80 transition-opacity" />,
  },
  {
    institution: 'Sri Chaitanya Jr College',
    degree: 'Intermediate - MPC',
    score: 'Percentage: <strong>98%</strong>',
    duration: 'June 2020 - May 2022',
    location: 'Telangana, India',
    icon: <FaGraduationCap className="text-green-500 dark:text-green-400 text-2xl group-hover:text-opacity-80 transition-opacity" />,
  },
  {
    institution: 'MNR School Of Excellence',
    degree: 'Class X',
    score: 'Percentage: <strong>88%</strong>',
    duration: 'June 2019 - May 2020',
    location: 'Telangana, India',
    icon: <FaSchool className="text-yellow-500 dark:text-yellow-400 text-2xl group-hover:text-opacity-80 transition-opacity" />,
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

  const toggleEducation = (index: number) => {
    setExpandedEducation(expandedEducation === index ? null : index);
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">
            Education
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {edu.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.institution}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                      <p
                        className="text-sm text-gray-500 dark:text-gray-400"
                        dangerouslySetInnerHTML={{ __html: edu.score }}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.duration} | {edu.location}
                      </p>
                    </div>
                  </div>
                  {edu.details && (
                    <button
                      className="text-primary-light hover:text-primary-dark"
                      onClick={() => toggleEducation(index)}
                      aria-expanded={expandedEducation === index}
                      aria-controls={`education-details-${index}`}
                      role="button"
                    >
                      {expandedEducation === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  )}
                </div>

                {edu.details && expandedEducation === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    id={`education-details-${index}`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {edu.details[0].split(': ')[1].split(', ').map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-dark dark:text-primary-light rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}