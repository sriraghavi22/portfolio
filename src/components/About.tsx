import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/mypho.jpg"
                alt="About me"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg">
                I'm a motivated Computer Science Engineering student specializing in Data Science at B VRaju Institute of Technology. 
                With a strong academic record (GPA: 9.35) and a passion for technology, I combine theoretical knowledge with practical 
                experience in full-stack development, AI, and blockchain.
              </p>
              
              <p className="text-lg">
                Beyond academics, I'm an active participant in the tech community, contributing to open-source projects and 
                participating in hackathons. I've consistently ranked as a branch topper and maintain a strong presence on coding 
                platforms with 300+ problems solved on LeetCode and a top 10 position on my college's MentorPick leaderboard.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="card">
                  <h3 className="font-bold text-xl mb-2">300+</h3>
                  <p className="text-gray-600 dark:text-gray-300">LeetCode Problems</p>
                </div>
                <div className="card">
                  <h3 className="font-bold text-xl mb-2">9.35</h3>
                  <p className="text-gray-600 dark:text-gray-300">GPA</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}