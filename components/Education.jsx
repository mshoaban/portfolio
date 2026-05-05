"use client";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institution: "Ghazi University, Dera Ghazi Khan",
      degree: "BS CS & IT (Bachelor of Science in Computer Science & Information Technology)",
      period: "2021 - 2025",
      description: "Focused on Advanced Computer Science topics",
      logo: "/vu-logo.png" // Add appropriate logo
    },
    {
      institution: "Government Degree College, Taunsa Sharif",
      degree: "Intermediate in Computer Science",
      period: "2019 - 2021",
      description: "Focused on Software Development and Programming",
      logo: "/aptech-logo.png"
    },
    {
      institution: "Government High School, Taunsa Sharif",
      degree: "Matric in Computer Science",
      period: "2017 - 2019",
      description: "Focus on Computer Science fundamentals",
      logo: "/shipowners-logo.png"
    }
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">My Education</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A journey of continuous learning and academic achievement
        </p>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 transition-all"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-semibold mb-1">{edu.institution}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.description}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}