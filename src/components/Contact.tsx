import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [state, handleSubmit] = useForm('mrbqwkrg'); // Replace with your Formspree formId
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form fields after successful submission
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-20">
      <div className="section-container max-w-5xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading text-center mb-16 text-3xl font-bold text-gray-800 dark:text-gray-100">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Let's Connect!
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I'm always excited to discuss new opportunities, collaborate on projects,
                or share ideas about technology and innovation.
              </p>
              <div className="space-y-4">
                {[
                  {
                    Icon: FaEnvelope,
                    text: 'raghavi5417@gmail.com', // Replace with your email
                    href: 'mailto:raghavi5417@gmail.com',
                  },
                  {
                    Icon: FaPhone,
                    text: '+91 9502391659', // Replace with your phone
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
              onSubmit={handleSubmit}
              ref={formRef}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 dark:text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 dark:text-red-400 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-100">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 dark:text-red-400 text-sm mt-1" />
              </div>
              {/* Honeypot field for spam protection (fallback if reCAPTCHA disabled) */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              {state.succeeded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 dark:text-green-400 mt-2"
                >
                  Thanks for your message! I'll get back to you soon.
                </motion.p>
              )}
              {Array.isArray(state.errors) && state.errors.length > 0 && !state.succeeded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 dark:text-red-400 mt-2"
                >
                  Oops! Submission failed. If reCAPTCHA is enabled, try disabling VPNs or extensions, or contact me directly.
                </motion.p>
              )}
              <motion.button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-primary-dark text-white dark:bg-primary-light dark:text-gray-900 py-3 rounded-lg font-medium disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}