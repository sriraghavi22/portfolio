import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Study Planner Web Application',
    description: 'A full-stack collaborative study planning platform with real-time group chat, JWT authentication, and personalized study insights. Reduced missed deadlines by 20% through smart notifications.',
    image: '/assets/studyimage.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/sriraghavi22',
    live: '#',
  },
  {
    title: 'Farm2Fork Supply Chain',
    description: 'A blockchain-based food supply chain system using IPFS for transparent tracking. Features sustainability scoring, farmer dashboards, and QR code-based traceability.',
    image: '/assets/farm2fork.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'IPFS', 'Blockchain'],
    github: 'https://github.com/sriraghavi22',
    live: '#',
  },
  {
    title: 'Genome Analysis',
    description: 'Identified 27 defense response genes in neem with potential for enhancing rice disease resistance. Analyzed 19,446 genes using computational biology tools.',
    image: '/assets/geneAnalysis.jpg',
    tags: ['Python', 'BioPython', 'Bioinformatics', 'Data Analysis'],
    github: 'https://github.com/sriraghavi22',
    live: '#',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light"
                    >
                      <FaGithub className="w-8 h-8" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-light"
                    >
                      <FaExternalLinkAlt className="w-7 h-7" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-dark dark:text-primary-light rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}