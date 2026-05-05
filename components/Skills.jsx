"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["PHP", "Python", "JavaScript", "Node.js"]
    },
    {
      title: "Frameworks",
      icon: "🌟",
      skills: ["Laravel", "CodeIgniter", "Bootstrap", "Tailwind CSS", "React"]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      skills: ["HTML", "CSS", "Next.js", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "Database Design", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Google App Script", "Git", "Automation", "REST APIs", "Postman"]
    }
  ];

  const proficiencyLevels = [
    { skill: "PHP Development", level: 85 },
    { skill: "JavaScript", level: 65 },
    { skill: "Database Management", level: 85 },
    { skill: "Web Development", level: 90 },
    { skill: "Problem Solving", level: 90 }
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and programming languages
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 transition-all"
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white dark:bg-indigo-900/30 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700 hover:border-indigo-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold mb-2">Proficiency Levels</h3>
      </motion.div>

      <div className="space-y-6">
        {proficiencyLevels.map((item, index) => (
          <motion.div
            key={item.skill}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.skill}</span>
              <span className="text-indigo-600 dark:text-indigo-400">{item.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}