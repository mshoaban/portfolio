export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © {new Date().getFullYear()} Muhammad Shoaban. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex gap-8 text-sm">
          <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">About</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
}