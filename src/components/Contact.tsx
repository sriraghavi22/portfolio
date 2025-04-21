import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16">Get in Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects,
                or share ideas about technology and innovation.
              </p>

              <div className="space-y-4">
                {[
                  {
                    Icon: FaEnvelope,
                    text: 'raghavi5417@gmail.com',
                    href: 'mailto:raghavi5417@gmail.com',
                  },
                  {
                    Icon: FaPhone,
                    text: '+91 9502391659',
                    href: 'tel:+919502391659',
                  },
                  {
                    Icon: FaMapMarkerAlt,
                    text: 'Telangana, India',
                    href: '#',
                  },
                ].map(({ Icon, text, href }) => (
                  <motion.a
                    key={text}
                    href={href}
                    className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="w-6 h-6" />
                    <span>{text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-primary-dark text-white dark:bg-primary-light dark:text-gray-900 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}