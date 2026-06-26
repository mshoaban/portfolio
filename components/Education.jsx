"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      title: "Bachelor of Science in Computer Science & Information Technology",
      organization: "Ghazi University, Dera Ghazi Khan",
      period: "2021 – 2025",
      description:
        "Completed a Bachelor's degree with a focus on software engineering, database systems, web technologies, algorithms, networking, and modern software development practices."
    }
  ];

  const certifications = [
    {
      title: "Web Development",
      provider: "Coursera",
      description:
        "Completed coursework covering modern web development concepts, frontend technologies, backend development, responsive design, and best practices."
    },
    {
      title: "DevOps",
      provider: "Udemy",
      description:
        "Studied DevOps fundamentals including Linux, deployment workflows, version control, CI/CD concepts, and modern development practices."
    },
    {
      title: "Web Application Security",
      provider: "Udemy",
      description:
        "Focused on secure web application development, authentication, common vulnerabilities, OWASP principles, and security best practices."
    }
  ];

  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Education & Certifications
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-8">
          My academic background and professional certifications reflect a
          commitment to continuous learning and staying current with modern
          software development practices.
        </p>
      </motion.div>

      {/* Education */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold mb-8">
          Education
        </h3>

        {education.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="text-indigo-600 dark:text-indigo-400 mt-1">
                  {item.organization}
                </p>
              </div>

              <span className="mt-3 md:mt-0 text-sm text-gray-500">
                {item.period}
              </span>
            </div>

            <p className="leading-8 text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Certifications */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-8">
          Certifications
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((certificate) => (

            <div
              key={certificate.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 hover:border-indigo-400 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-2">
                {certificate.title}
              </h4>

              <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                {certificate.provider}
              </p>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                {certificate.description}
              </p>
            </div>

          ))}

        </div>
      </motion.div>
    </section>
  );
}