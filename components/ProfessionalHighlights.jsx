"use client";

import { motion } from "framer-motion";

export default function ProfessionalHighlights() {
  const highlights = [
    {
      title: "Production Experience",
      description:
        "Contributed to the development and maintenance of 15+ production web applications across healthcare, insurance, enterprise, and social platforms."
    },

    {
      title: "Full Stack Development",
      description:
        "Experienced in developing scalable backend systems, responsive frontend applications, RESTful APIs, and optimized database architectures using modern technologies."
    },

    {
      title: "Cloud & Deployment",
      description:
        "Worked with Linux servers, AWS EC2, Git, and production deployments while maintaining application performance, security, and reliability."
    },

    {
      title: "Professional Development",
      description:
        "Actively expanding knowledge in Cyber Security, cloud technologies, software architecture, and modern software development practices."
    }
  ];

  return (
    <section
      id="highlights"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Professional Highlights
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          A snapshot of my professional experience, technical expertise, and
          commitment to continuous growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">

        {highlights.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 hover:border-indigo-400 transition-all duration-300"
          >

            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}