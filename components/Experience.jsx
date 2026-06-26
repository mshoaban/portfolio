"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experience = {
    title: "Full Stack Developer",
    company: "Rated Solutions",
    location: "Pakistan",
    period: "Jan 2024 – Present",

    description:
      "As a Full Stack Developer at Rated Solutions, I develop and maintain production-ready web applications for healthcare, insurance, enterprise, and social platforms. My responsibilities include designing scalable backend systems, building responsive frontend interfaces, developing RESTful APIs, optimizing databases, integrating third-party services, and deploying secure applications on cloud infrastructure.",

    achievements: [
      "Contributed to 15+ commercial web applications across multiple industries.",
      "Built scalable RESTful APIs using Laravel, PHP, Node.js, and CodeIgniter.",
      "Developed responsive user interfaces with React, JavaScript, Tailwind CSS, and Bootstrap.",
      "Designed and optimized MySQL and MongoDB databases for performance and reliability.",
      "Integrated third-party APIs, authentication systems, and cloud services.",
      "Deployed and maintained production applications on AWS EC2 and Linux servers.",
      "Collaborated with developers, designers, QA engineers, and project managers throughout the development lifecycle.",
      "Resolved production issues, optimized application performance, and maintained secure coding standards."
    ],

    technologies: [
      "Laravel",
      "PHP",
      "CodeIgniter",
      "Node.js",
      "React",
      "React Native",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "AWS EC2",
      "Linux",
      "Git",
      "REST APIs"
    ],

    projects: [
      {
        name: "SafeSend",
        category: "Secure Messaging Platform",
        description:
          "Developed a secure messaging platform featuring encrypted communication, secure file sharing, authentication, and role-based access control."
      },

      {
        name: "Medic Exams",
        category: "Healthcare & Insurance Platform",
        description:
          "Developed and maintained a healthcare management system supporting medical examinations, patient records, appointments, and insurance workflows."
      },

      {
        name: "Fenapi",
        category: "Insurance Management System",
        description:
          "Built an enterprise insurance platform for policy administration, customer management, and claims processing."
      },

      {
        name: "FeelVaelo",
        category: "Healthcare Platform",
        description:
          "Developed a modern healthcare platform enabling users to access medical services and manage appointments through a responsive web application."
      },

      {
        name: "FreeSoil",
        category: "Podcast & Debate Platform",
        description:
          "Built a community-driven social platform supporting podcast publishing, debates, user engagement, and scalable content management."
      },

      {
        name: "LiveWaves",
        category: "Social Media Platform",
        description:
          "Contributed to a live-streaming social platform supporting real-time interactions, content sharing, and scalable backend services."
      }
    ]
  };

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Work Experience
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Building scalable, secure, and production-ready software solutions
          across healthcare, insurance, enterprise, and modern web platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8 lg:p-10 shadow-sm"
      >
        {/* Header */}

        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

          <div>
            <h3 className="text-3xl font-bold">
              {experience.title}
            </h3>

            <p className="mt-2 text-lg text-indigo-600 font-medium">
              {experience.company} · {experience.location}
            </p>
          </div>

          <span className="inline-flex rounded-full bg-indigo-100 dark:bg-indigo-900/40 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300">
            {experience.period}
          </span>

        </div>

        {/* Description */}

        <div className="mt-10">

          <h4 className="text-lg font-semibold mb-4">
            Overview
          </h4>

          <p className="leading-8 text-gray-600 dark:text-gray-300">
            {experience.description}
          </p>

        </div>

        {/* Contributions */}

        <div className="mt-12">

          <h4 className="text-lg font-semibold mb-5">
            Key Contributions
          </h4>

          <div className="grid md:grid-cols-2 gap-4">

            {experience.achievements.map((item) => (

              <div
                key={item}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-800/40 p-4"
              >
                <p className="text-gray-700 dark:text-gray-300 leading-7">
                  {item}
                </p>
              </div>

            ))}

          </div>

        </div>

        {/* Tech */}

        <div className="mt-12">

          <h4 className="text-lg font-semibold mb-5">
            Technology Stack
          </h4>

          <div className="flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Projects */}

        <div className="mt-12">

          <h4 className="text-lg font-semibold mb-6">
            Selected Projects
          </h4>

          <div className="grid lg:grid-cols-2 gap-6">

            {experience.projects.map((project) => (

              <div
                key={project.name}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-indigo-400 transition-all duration-300"
              >

                <h5 className="text-xl font-semibold">
                  {project.name}
                </h5>

                <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {project.category}
                </p>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-indigo-300 dark:border-indigo-700 p-6 text-center">

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              In addition to the projects listed above, I have contributed to
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                {" "}10+ additional commercial applications{" "}
              </span>
              including inventory management systems, enterprise solutions,
              automation tools, internal business applications, and client
              projects.
            </p>

          </div>

        </div>

      </motion.div>
    </section>
  );
}