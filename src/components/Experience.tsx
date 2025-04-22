import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Blue Cloud Softech Solutions',
    role: 'Software Development Engineer Intern',
    duration: 'Feb 2025 – Mar 2025',
    location: 'Hyderabad, India',
    achievements: [
      'Built a Flask-based web app integrating FDA and PubChem APIs to visualize drug data for 20+ diseases.',
      'Achieved 90% faster load times using caching (pickle, cachetools) and async data fetching with aiohttp.',
      'Designed an interactive frontend with HTML, CSS, and JavaScript, incorporating lazy loading and progressive rendering.',
      'Deployed ML models on TorchDrug for LogP prediction and breast cancer target identification.',
      'Developed a tool to visualize 2D/3D molecular structures with heatmap overlays.',
    ],
    logo: '/assets/bluecloud.png', // Placeholder; add actual logo to public/assets/
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Professional Experience</h2>

          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 mr-4 rounded-full object-contain"
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/48')} // Fallback image
                  />
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="mb-2">{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}