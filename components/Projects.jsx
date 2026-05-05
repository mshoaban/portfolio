"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Jamia Raza Ul Uloom (Educational Institution Website)",
      desc: "A modern, responsive website for an educational institution with course information and faculty profiles.",
      github: "https://github.com/mshoaban/jamia-raza",
      tech: ["Laravel", "MySQL", "React", "Blade", "CSS"]
    },
    {
      title: "Almas Trading (E-commerce Platform)",
      desc: "Full-featured e-commerce platform with product catalog and payment integration.",
      github: "https://github.com/mshoaban/almas-trading",
      tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"]
    },
    {
      title: "Live Sports Scores App",
      desc: "A real-time sports application that displays live scores, match stats, and team updates using APIs.",
      github: "#",
      tech: ["React", "API Integration", "Tailwind CSS"]
    },
    {
      title: "Weather Forecast App",
      desc: "A weather app that shows real-time weather conditions, temperature, and forecasts based on user location.",
      github: "#",
      tech: ["JavaScript", "API", "HTML", "CSS"]
    }
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my development work across various technologies and domains
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
          >
            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <button
                  onClick={() => alert("Live demo is not available yet, sorry!")}
                  className="flex-1 px-4 py-2 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium text-center"
                >
                  Live Demo
                </button>

                <a
                  href={p.github}
                  target="_blank"
                  className="flex-1 px-4 py-2 text-sm border border-indigo-300 dark:border-indigo-700 rounded-lg font-medium text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}