import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  projects: Project[];
}

const experiences: Experience[] = [
  {
    company: 'Blue Cloud Softech Solutions',
    role: 'Software Development Engineer Intern',
    duration: 'Feb 2025 – Mar 2025',
    location: 'Hyderabad, India',
    logo: '/assets/bluecloud.png',
    projects: [
      {
        name: 'Molecule Merging Dashboard',
        description:
          'Developed a Flask-based web application to fetch and visualize drug data and SMILES strings for over 20 diseases using FDA and PubChem APIs. The dashboard enabled researchers to explore drug interactions and molecular merges with an interactive 3D visualization interface.',
        technologies: ['Flask', 'FDA API', 'PubChem API', 'HTML', 'CSS', 'JavaScript', 'aiohttp', 'cachetools', 'pickle', 'RDKit'],
        achievements: [
          'Reduced initial load time by <strong>~90%</strong> through caching (pickle, cachetools) and asynchronous requests with aiohttp.',
          'Designed an interactive UI with lazy loading and progressive drug display, enhancing user engagement.',
          'Implemented deduplication logic to ensure high data accuracy for pharmaceutical analysis.',
          'Enabled <strong>360-degree 3D visualization</strong> of merged molecular structures with properties like Molecular Weight (74.07 g/mol) and LogP (1.04).',
        ],
      },
      {
        name: 'Molecular Structure Visualization Tool',
        description:
          'Built a tool to visualize 2D and 3D molecular structures with heatmap overlays, supporting drug discovery by predicting properties like LogP and identifying breast cancer targets using machine learning.',
        technologies: ['TorchDrug', 'RDKit', '3Dmol.js', 'Python'],
        achievements: [
          'Trained a TorchDrug model for LogP prediction, achieving <strong>high accuracy</strong> in molecular property analysis.',
          'Implemented heatmap overlays for 2D/3D visualizations, enhancing data interpretability for researchers.',
        ],
      },
      {
        name: 'Breast Cancer Target Identification',
        description:
          'Developed a comprehensive machine learning pipeline for breast cancer target identification, integrating network analysis and bioinformatics data. The pipeline began with collecting gene-disease associations from DisGeNET, followed by fetching protein sequences from UniProt with robust error handling. Utilized ChEMBL API to determine drug target status via mechanism data and retrieved protein interactions from STRING to construct an interaction network using NetworkX. Calculated centrality scores to assess network importance, performed protein density analysis, and trained a high-accuracy XGBoost model for target prediction.',
        technologies: ['Python', 'XGBoost', 'Pandas', 'UniProt API', 'ChEMBL API', 'STRING', 'NetworkX', 'scikit-learn'],
        achievements: [
          'Constructed a gene-disease association dataset from DisGeNET, enhanced by protein sequence data from UniProt.',
          'Integrated ChEMBL API to identify drug targets and STRING for protein interaction networks, built with NetworkX.',
          'Calculated centrality scores and protein density for network analysis, enabling precise target prioritization.',
          'Trained an XGBoost model, achieving <strong>high-accuracy</strong> target prediction.',
        ],
      },
      {
        name: 'Domain-Specific RAG Pipeline',
        description:
          'Built a retrieval-augmented generation pipeline using a fine-tuned LLaMA3-8B model, incorporating OCR-based PDF parsing, semantic chunking, FAISS vector search, and CrossEncoder reranking for precise document retrieval and response generation.',
        technologies: ['LLaMA3-8B', 'FAISS', 'CrossEncoder', 'Python', 'OCR', 'Transformers'],
        achievements: [
          'Achieved <strong>precise retrieval</strong> with semantic chunking and FAISS vector search, improving response relevance.',
          'Fine-tuned LLaMA3-8B model for domain-specific tasks, enhancing generation accuracy.',
          'Integrated OCR-based PDF parsing for seamless document processing.',
        ],
      },
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">
            Professional Experience
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 mr-4 rounded-full object-contain"
                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/48')}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.company}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.projects.map((project, projIndex) => (
                    <div key={projIndex} className="border-l-4 border-primary-light pl-4">
                      <div className="flex items-center justify-between">
                        <h4
                          className="text-lg font-semibold text-gray-800 dark:text-gray-100 cursor-pointer"
                          onClick={() => toggleProject(projIndex)}
                        >
                          {project.name}
                        </h4>
                        <button
                          className="text-primary-light hover:text-primary-dark"
                          onClick={() => toggleProject(projIndex)}
                          aria-expanded={expandedProject === projIndex}
                          aria-controls={`project-details-${projIndex}`}
                        >
                          {expandedProject === projIndex ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                      </div>
                      {expandedProject === projIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          id={`project-details-${projIndex}`}
                        >
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-dark dark:text-primary-light rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                            {project.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="mb-2"
                                dangerouslySetInnerHTML={{ __html: achievement }}
                              />
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
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