"use client";

import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      title: "Education",
      description:
        "Bachelor's degree in Computer Science & Information Technology, providing a strong foundation in software engineering, algorithms, databases, and modern development practices."
    },
    {
      title: "Professional Experience",
      description:
        "Over two years of commercial experience developing full-stack web applications for healthcare, insurance, enterprise, and social platforms using modern technologies and industry best practices."
    },
    {
      title: "Career Focus",
      description:
        "Focused on building secure, scalable, and maintainable software while continuously improving my expertise in full-stack development, cloud technologies, and cyber security."
    }
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto mt-6 space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">

          <p>
            I'm a Full Stack Developer with over two years of professional
            experience building modern web applications using Laravel, PHP,
            React, Node.js, MySQL, MongoDB, and other modern technologies.
          </p>

          <p>
            Throughout my career, I've contributed to commercial software
            solutions across healthcare, insurance, enterprise, and social
            platforms. My work involves developing scalable backend systems,
            responsive user interfaces, RESTful APIs, database optimization,
            third-party integrations, and production deployments.
          </p>

          <p>
            I enjoy solving real-world problems through clean, maintainable
            code and continuously expanding my knowledge in software
            architecture, cloud computing, and cyber security.
          </p>

        </div>
      </motion.div>

      {/* Cards */}

      <div className="grid md:grid-cols-3 gap-8">

        {cards.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 hover:border-indigo-400 transition-all duration-300"
          >

            <h3 className="text-2xl font-semibold mb-4">
              {card.title}
            </h3>

            <p className="leading-8 text-gray-600 dark:text-gray-400">
              {card.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}