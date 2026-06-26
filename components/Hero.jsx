"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-7xl mx-auto px-6"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="inline-flex rounded-full border border-indigo-300 dark:border-indigo-700 px-4 py-2 text-sm mb-6"
          >
            Available for Full-Time • Remote • Freelance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .1 }}
            className="text-5xl lg:text-6xl font-bold leading-tight"
          >
            Muhammad Shoaban
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .2 }}
            className="text-2xl mt-3 text-indigo-600 dark:text-indigo-400 font-medium"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .3 }}
            className="mt-2 text-gray-500"
          >
            Dera Ghazi Khan, Punjab, Pakistan
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .6, delay: .4 }}
            className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-xl"
          >
            Full Stack Developer with professional experience building scalable
            web applications for healthcare, insurance, enterprise, and social
            platforms. Specialized in Laravel, React, Node.js, REST APIs, and
            modern web technologies with a strong focus on performance,
            security, and maintainable software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#experience"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
            >
              View Experience
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-indigo-500 transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full blur-3xl bg-indigo-500/20"></div>

            <Image
              src="/me-up.png"
              width={420}
              height={420}
              priority
              alt="Muhammad Shoaban"
              className="relative rounded-3xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}