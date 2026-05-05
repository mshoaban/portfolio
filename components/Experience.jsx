"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Rated Solutions, Pakistan",
      period: "Current",
      description: "Gained hands-on experience in web development, application development, database management, and automation. Worked on diverse projects ranging from inventory systems to enterprise web applications.",
      technologies: ["PHP", "MySQL", "JavaScript", "Web Development", "Automation", "React native"],
      projects: [
        { name: "SafeSend (Secure Message Delivery)", desc: "Developed a secure messaging platform with end-to-end encryption", tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"] },
        { name: "Medic Exam (Health Insurance System)", desc: "Built an insurance management system for medical examinations and claims processing", tech: ["Laravel", "MySQL", "HTML/CSS", "jQuery", "AWS EC2"] },
        { name: "Fenapi (Insurance Management System)", desc: "Developed a web application for managing insurance policies and claims", tech: ["PHP", "MySQL", "JavaScript", "CodeIgniter", "Bootstrap"] },
        { name: "FeelVaelo (Medical service web application)", desc: "Created a user-friendly web application for medical services", tech: ["Node.js", "MongoDB", "React JS", "Tailwind CSS"] },
        { name: "FreeSoil (Podcase and Debate based social media platform)", desc: "Created a user-friendly social media platform specific for podcasts and debates", tech: ["Node.js", "MongoDB", "React JS", "Tailwind CSS"] },
        { name: "LiveWaves (Social media platform)", desc: "Created a user-friendly social media platform for live streaming and sharing", tech: ["Node.js", "MongoDB", "React JS", "Tailwind CSS"] }
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Professional experience and projects that shaped my development journey
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white dark:bg-indigo-900/30 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Key Projects:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {exp.projects.map((project, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
                    <h5 className="font-medium mb-2">{project.name}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-800 rounded text-indigo-700 dark:text-indigo-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}