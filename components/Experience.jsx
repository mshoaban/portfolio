"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Code2,
  FolderGit2,
} from "lucide-react";

export default function Experience() {
  const experience = {
    title: "Full Stack Developer",

    company: "Rated Solutions",

    location: "Pakistan",

    period: "Jan 2024 – Present",

    description:
      "As a Full Stack Developer at Rated Solutions, I design, develop, and maintain production-ready web applications for healthcare, insurance, enterprise, and social platforms. My work includes building scalable backend systems, developing responsive frontend applications, designing efficient database architectures, integrating third-party APIs, and deploying secure solutions on Linux-based cloud infrastructure.",

    achievements: [
      "Contributed to 15+ commercial web applications across multiple industries.",
      "Built scalable REST APIs using Laravel, PHP, Node.js, and CodeIgniter.",
      "Developed responsive frontend applications with React, JavaScript, Tailwind CSS, and Bootstrap.",
      "Designed and optimized MySQL and MongoDB database structures.",
      "Integrated third-party APIs and authentication systems.",
      "Managed deployments on AWS EC2 and Linux servers.",
      "Collaborated with cross-functional teams throughout the software development lifecycle.",
      "Troubleshot production issues and optimized application performance."
    ],

    technologies: [
      "Laravel",
      "PHP",
      "CodeIgniter",
      "Node.js",
      "React",
      "React Native",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "MySQL",
      "MongoDB",
      "AWS EC2",
      "Linux",
      "Git",
      "REST APIs"
    ],

    projects: [
      {
        name: "SafeSend",
        type: "Secure Messaging Platform",
        description:
          "Built a secure messaging platform featuring encrypted communication, secure file sharing, authentication, and role-based access control.",
      },

      {
        name: "Medic Exams",
        type: "Healthcare & Insurance Platform",
        description:
          "Developed and maintained a healthcare platform supporting medical examinations, patient records, appointments, and insurance workflows.",
      },

      {
        name: "Fenapi",
        type: "Insurance Management System",
        description:
          "Built an enterprise insurance management system for policy administration, claims processing, and customer management.",
      },

      {
        name: "FeelVaelo",
        type: "Healthcare Platform",
        description:
          "Developed a healthcare platform enabling users to access medical services and manage appointments through a modern interface.",
      },

      {
        name: "FreeSoil",
        type: "Podcast & Debate Platform",
        description:
          "Built a social platform supporting podcast publishing, debates, user engagement, and content management.",
      },

      {
        name: "LiveWaves",
        type: "Social Media Platform",
        description:
          "Developed features for a live-streaming social platform supporting real-time interactions and scalable backend services.",
      },
    ],
  };

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">
          Work Experience
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building secure, scalable and production-ready software solutions for
          healthcare, insurance, enterprise and modern web platforms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-8"
      >
        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

          <div>

            <div className="flex items-center gap-3 mb-2">

              <Briefcase size={22} />

              <h3 className="text-3xl font-bold">
                {experience.title}
              </h3>

            </div>

            <p className="text-lg text-indigo-600 font-semibold">
              {experience.company} • {experience.location}
            </p>

          </div>

          <div className="flex items-center gap-2 text-gray-500">

            <Calendar size={18} />

            {experience.period}

          </div>

        </div>

        {/* Description */}

        <p className="mt-8 leading-8 text-gray-600 dark:text-gray-300">
          {experience.description}
        </p>

        {/* Achievements */}

        <div className="mt-10">

          <h4 className="flex items-center gap-2 text-xl font-semibold mb-5">

            <CheckCircle2 size={20} />

            Key Contributions

          </h4>

          <div className="grid md:grid-cols-2 gap-4">

            {experience.achievements.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3"
              >

                <CheckCircle2
                  className="text-green-500 mt-1"
                  size={18}
                />

                <p className="text-gray-600 dark:text-gray-300">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Tech */}

        <div className="mt-12">

          <h4 className="flex items-center gap-2 text-xl font-semibold mb-5">

            <Code2 size={20} />

            Tech Stack

          </h4>

          <div className="flex flex-wrap gap-3">

            {experience.technologies.map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-sm font-medium"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Projects */}

        <div className="mt-12">

          <h4 className="flex items-center gap-2 text-xl font-semibold mb-6">

            <FolderGit2 size={20} />

            Selected Projects

          </h4>

          <div className="grid lg:grid-cols-2 gap-6">

            {experience.projects.map((project) => (

              <div
                key={project.name}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition"
              >

                <h5 className="font-bold text-lg">
                  {project.name}
                </h5>

                <p className="text-indigo-600 text-sm mb-3">
                  {project.type}
                </p>

                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

              </div>

            ))}

          </div>

          <p className="mt-8 text-center text-gray-500 italic">
            + Worked on 10+ additional commercial applications including
            inventory management systems, enterprise business solutions,
            healthcare software, automation tools, and internal client projects.
          </p>

        </div>

      </motion.div>

    </section>
  );
}