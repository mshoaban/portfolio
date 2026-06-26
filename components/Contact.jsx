"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Get In Touch
        </h2>

        <p className="mt-4 max-w-3xl mx-auto leading-8 text-gray-600 dark:text-gray-400">
          I'm always interested in discussing new opportunities, collaborating
          on exciting projects, or connecting with fellow developers. Whether
          you have a question, an idea, or a role you'd like to discuss, feel
          free to reach out.
        </p>
      </motion.div>

      {/* Contact Card */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 p-10"
      >
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                  Email
                </p>

                <a
                  href="mailto:mshoaban09@gmail.com"
                  className="font-medium hover:text-indigo-600 transition-colors"
                >
                  mshoaban09@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                  Phone
                </p>

                <a
                  href="tel:+923346731495"
                  className="font-medium hover:text-indigo-600 transition-colors"
                >
                  +92 334 673 1495
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                  Location
                </p>

                <p className="font-medium">
                  Dera Ghazi Khan, Punjab, Pakistan
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                  Availability
                </p>

                <p className="font-medium text-green-600 dark:text-green-400">
                  Open to Full-Time, Remote & Freelance Opportunities
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-2xl font-semibold mb-8">
              Connect With Me
            </h3>

            <div className="space-y-5">

              <a
                href="https://github.com/mshoaban"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-4 hover:border-indigo-500 transition-colors"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-shoaban/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-4 hover:border-indigo-500 transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-4 hover:border-indigo-500 transition-colors"
              >
                Resume / CV
              </a>

            </div>

            <div className="mt-10 rounded-2xl bg-gray-50 dark:bg-zinc-800 p-6">

              <h4 className="font-semibold mb-3">
                Looking for a developer?
              </h4>

              <p className="leading-7 text-gray-600 dark:text-gray-400">
                I specialize in building secure, scalable, and maintainable web
                applications using Laravel, React, Next.js, Node.js, and modern
                web technologies. I'm always excited to contribute to meaningful
                products and solve real-world problems through software.
              </p>

            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}