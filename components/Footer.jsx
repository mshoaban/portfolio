"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="font-semibold text-lg">
              Muhammad Shoaban
            </h3>

            <p className="text-gray-500 mt-2">
              Full Stack Developer specializing in modern web applications,
              scalable backend systems, and secure software solutions.
            </p>

          </div>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              target="_blank"
              className="hover:text-indigo-600 transition"
            >
              GitHub
            </a>

            <a
              href="#"
              target="_blank"
              className="hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:your@email.com"
              className="hover:text-indigo-600 transition"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              download
              className="hover:text-indigo-600 transition"
            >
              Resume
            </a>

          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.

        </div>

      </div>

    </footer>
  );
}