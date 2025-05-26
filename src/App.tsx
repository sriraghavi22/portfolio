import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

import Hero from './components/Hero';
import About from './components/About';
import VideoResume from './components/VideoResume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'video-resume', label: 'Video Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6 text-sm md:text-base font-light">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            {/* Resume Download Link */}
            <a href="/assets/kathula_sri_raghavi_resumee.pdf" download="kathula_sri_raghavi_resume.pdf">Resume</a>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {darkMode ? (
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                ) : (
                  <MoonIcon className="w-5 h-5 text-gray-700" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </header>

      <div className="pt-24">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="video-resume"><VideoResume /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="achievements"><Achievements /></section>
        <section id="certifications"><Certifications /></section>
        <section id="leadership"><Leadership /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </div>
    </div>
  );
}

export default App;