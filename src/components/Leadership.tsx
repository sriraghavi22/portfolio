import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUsers, FaLightbulb, FaChartLine, FaTrophy } from 'react-icons/fa';

const leadershipRoles = [
  {
    title: "Team Lead - Swecha Summer of AI",
    icon: FaUsers,
    description: "Led a team in cultural and linguistic preservation through AI, managing dataset curation and team coordination.",
    impact: "Successfully delivered AI models for language advancement while mentoring team members."
  },
  {
    title: "Open Source Contributor - GirlScript",
    icon: FaLightbulb,
    description: "Contributed to multiple open-source projects, ranking 122 among thousands of participants.",
    impact: "Enhanced features and fixed bugs across various repositories, improving software quality."
  },
  {
    title: "Branch Topper",
    icon: FaChartLine,
    description: "Consistently ranked as branch topper for 3 consecutive semesters.",
    impact: "Achieved college-wide 2nd rank in the first semester, demonstrating academic excellence."
  },
  {
    title: "Event Co-ordinator - Techmaze 2K25",
    icon: FaTrophy,
    description: "Organized Techmaze, a tech competition at B V Raju Institute, featuring puzzle-solving, input guessing, and Figma designing for different college students.",
    impact: "40+ teams have participated and our event was a big hit."
  }
];

export default function Leadership() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="leadership" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Leadership & Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <role.icon className="w-8 h-8 text-primary-dark dark:text-primary-light mr-4" />
                  <h3 className="text-xl font-bold">{role.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{role.description}</p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                  <p className="text-primary-dark dark:text-primary-light font-medium">
                    {role.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}