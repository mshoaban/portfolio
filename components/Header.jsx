import { useState } from "react";
import { useTheme } from "./ThemeProviderWrapper";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 dark:bg-black/90 border-b border-indigo-200/30 dark:border-indigo-900/30">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold cursor-pointer hover:text-indigo-500 transition-colors"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MS
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-500">About</a>
          <a href="#education" className="hover:text-indigo-500">Education</a>
          <a href="#experience" className="hover:text-indigo-500">Experience</a>
          <a href="#skills" className="hover:text-indigo-500">Skills</a>
          <a href="#projects" className="hover:text-indigo-500">Projects</a>
          <a href="#contact" className="hover:text-indigo-500">Contact</a>

          <a
            href="mailto:mshoaban09@email.com?subject=Job%20Inquiry"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
          <span className="w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-white dark:bg-black border-t border-indigo-200/30 dark:border-indigo-900/30">
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#education">Education</a>
          <a onClick={() => setOpen(false)} href="#experience">Experience</a>
          <a onClick={() => setOpen(false)} href="#skills">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>

          <a
            href="mailto:mshoaban09@email.com?subject=Job%20Inquiry"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}