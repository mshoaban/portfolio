import { useTheme } from "./ThemeProviderWrapper";
import { motion } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();

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
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">MS</span>
        </motion.a>

        {/* NAV */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          <a href="#education" className="hover:text-indigo-500 transition-colors">Education</a>
          <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>

          <a
            href="mailto:muhammadshoaban@email.com?subject=Job%20Inquiry&body=Hello,%20I%20would%20like%20to%20connect%20regarding..."
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}