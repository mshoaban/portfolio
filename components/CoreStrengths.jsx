"use client";
import { motion } from "framer-motion";

export default function CoreStrengths() {
  const strengths = [
    {
      title: "Quick Learner",
      icon: "🚀",
      description: "Rapidly adapts to new technologies and frameworks. Passionate about staying updated with the latest industry trends and best practices."
    },
    {
      title: "Problem Solver",
      icon: "🧠",
      description: "Enjoys tackling complex challenges with creative solutions. Systematic approach to debugging and optimization for efficient results."
    },
    {
      title: "Team Player",
      icon: "🤝",
      description: "Excellent collaboration skills with strong communication abilities. Works well in diverse teams and contributes to positive work environments."
    },
    {
      title: "Analytical Mindset",
      icon: "📊",
      description: "Data-driven decision making with attention to detail. Strong analytical skills for performance optimization and code quality improvement."
    }
  ];

  const qualities = [
    "Attention to Detail",
    "Creative Thinking",
    "Time Management",
    "Continuous Learning",
    "Code Quality Focus",
    "User Experience Oriented",
    "Adaptable",
    "Results Driven"
  ];

  return (
    <section id="strengths" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Core Strengths</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Key qualities that drive my success as a software developer
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {strengths.map((strength, index) => (
          <motion.div
            key={strength.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/50 hover:shadow-lg hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/30 transition-all"
          >
            <div className="text-4xl mb-4">{strength.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{strength.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{strength.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold mb-6">Additional Qualities</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {qualities.map((quality, index) => (
            <motion.span
              key={quality}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700"
            >
              {quality}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}