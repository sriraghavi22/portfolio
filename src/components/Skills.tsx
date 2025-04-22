import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaFlask,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiBootstrap,
  SiPostgresql,
  SiJupyter,
  SiSocketdotio,
  SiPostman,
  SiJsonwebtokens,
  SiIpfs,
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: FaPython, color: '#3776AB', description: 'Versatile programming for data science and web' },
  { name: 'React', icon: FaReact, color: '#61DAFB', description: 'Building dynamic user interfaces' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: 'Server-side JavaScript runtime' },
  { name: 'Java', icon: FaJava, color: '#007396', description: 'Robust, object-oriented programming' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Core language for web development' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: 'NoSQL database for scalable apps' },
  { name: 'Express', icon: SiExpress, color: '#000000', description: 'Fast Node.js web framework' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', description: 'Machine learning in Python' },
  { name: 'Pandas', icon: SiPandas, color: '#150458', description: 'Data analysis and manipulation' },
  { name: 'NumPy', icon: SiNumpy, color: '#013243', description: 'Numerical computing in Python' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', description: 'Responsive CSS framework' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', description: 'Version control for collaboration' },
  { name: 'SQL', icon: SiPostgresql, color: '#336791', description: 'Structured query language for databases' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', description: 'Markup for web structure' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', description: 'Styling for web design' },
  { name: 'Matplotlib', icon: FaChartLine, color: '#11557C', description: 'Data visualization in Python' },
  { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626', description: 'Interactive coding environment' },
  { name: 'Flask', icon: FaFlask, color: '#000000', description: 'Lightweight Python web framework' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF', description: 'Authentication for secure APIs' },
  { name: 'Socket.io', icon: SiSocketdotio, color: '#010101', description: 'Real-time web applications' },
  { name: 'Pinata (IPFS)', icon: SiIpfs, color: '#65C2CB', description: 'Decentralized storage with IPFS' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: 'API testing and development' },
];

const categories = {
  Programming: ['Python', 'Java', 'JavaScript', 'SQL'],
  'Web Development': ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Bootstrap', 'Flask', 'JWT', 'Socket.io'],
  'Data Science': ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook'],
  Tools: ['Git', 'Postman'],
  Blockchain: ['Pinata (IPFS)'],
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Adjusted for faster animations
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Technical Skills</h2>

          {Object.entries(categories).map(([category, skillNames]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {skills
                  .filter((skill) => skillNames.includes(skill.name))
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="card flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform group relative"
                    >
                      <skill.icon
                        className="w-10 h-10 mb-3"
                        style={{ color: skill.color }}
                      />
                      <h3 className="text-base font-medium text-center">{skill.name}</h3>
                      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 text-center z-10">
                        {skill.description}
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}