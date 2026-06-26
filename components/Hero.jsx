"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Muhammad Shoaban
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          >
            Software Developer
          </motion.h2>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <span>📍</span>
            <span>DG Khan, Pakistan</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 max-w-lg"
          >
            Passionate software developer creating innovative solutions with modern technologies.
            Specialized in web development and scalable applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 pt-6"
          >
            <a
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
              href="#projects"
            >
              View Projects
            </a>

            <a
              className="px-8 py-3 border border-indigo-300 dark:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-xl font-medium transition-colors"
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30"></div>
            <Image
              src="/me-up.png"
              width={400}
              height={400}
              className="relative rounded-2xl shadow-2xl"
              alt="Muhammad Shoaban - Full Stack Developer"
            />
          </div>
        </motion.div>

      </div>

    </section>
  );
}