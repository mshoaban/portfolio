"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.
        </p>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
          Built with Next.js, React, Tailwind CSS and Framer Motion.
        </p>

      </div>
    </footer>
  );
}