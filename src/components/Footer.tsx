import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary-dark dark:text-primary-light">
              Kathula Sri Raghavi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Building innovative solutions with code
            </p>
          </div>

          <div className="flex space-x-6">
            {[
              { Icon: FaGithub, href: "https://github.com/sriraghavi22" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/ksriraghavi/" },
              { Icon: FaEnvelope, href: "mailto:raghavi5417@gmail.com" }
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Kathula Sri Raghavi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}