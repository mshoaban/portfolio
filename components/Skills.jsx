"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      description:
        "Building secure, scalable, and maintainable server-side applications.",
      skills: [
        "Laravel",
        "PHP",
        "CodeIgniter",
        "Node.js",
        "REST APIs"
      ]
    },

    {
      title: "Frontend Development",
      description:
        "Creating responsive, interactive, and user-friendly web interfaces.",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery"
      ]
    },

    {
      title: "Databases",
      description:
        "Designing, managing, and optimizing relational and NoSQL databases.",
      skills: [
        "MySQL",
        "MongoDB",
        "Firebase",
        "Database Design"
      ]
    },

    {
      title: "Cloud & DevOps",
      description:
        "Deploying, maintaining, and managing production applications.",
      skills: [
        "AWS EC2",
        "Linux",
        "Git",
        "GitHub",
        "Postman"
      ]
    },

    {
      title: "Development Tools",
      description:
        "Tools and workflows used throughout the software development lifecycle.",
      skills: [
        "VS Code",
        "Composer",
        "npm",
        "Google Apps Script",
        "Automation"
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Technical Skills
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
          A collection of technologies, frameworks, and tools I use to build
          scalable, secure, and production-ready web applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">

        {skillCategories.map((category, index) => (

          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08
            }}
            className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 hover:border-indigo-400 transition-all duration-300"
          >

            <h3 className="text-2xl font-semibold">
              {category.title}
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400 leading-7">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              {category.skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 rounded-2xl border border-dashed border-indigo-300 dark:border-indigo-700 p-8 text-center"
      >

        <h3 className="text-2xl font-semibold mb-4">
          Always Learning
        </h3>

        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
          Technology evolves quickly, and I enjoy continuously expanding my
          knowledge. Alongside professional development, I am actively exploring
          Cyber Security, cloud technologies, software architecture, and modern
          development practices to build more secure, scalable, and reliable
          applications.
        </p>

      </motion.div>

    </section>
  );
}