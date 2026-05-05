"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Let&apos;s discuss how we can work together to bring your ideas to life.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              className="w-full p-4 border border-indigo-200 dark:border-indigo-800 rounded-xl bg-white dark:bg-indigo-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
              placeholder="First Name"
            />
            <input
              className="w-full p-4 border border-indigo-200 dark:border-indigo-800 rounded-xl bg-white dark:bg-indigo-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
              placeholder="Last Name"
            />
          </div>

          <input
            className="w-full p-4 border border-indigo-200 dark:border-indigo-800 rounded-xl bg-white dark:bg-indigo-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
            placeholder="Email"
            type="email"
          />

          <input
            className="w-full p-4 border border-indigo-200 dark:border-indigo-800 rounded-xl bg-white dark:bg-indigo-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors"
            placeholder="Subject"
          />

          <textarea
            className="w-full p-4 border border-indigo-200 dark:border-indigo-800 rounded-xl bg-white dark:bg-indigo-950/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors h-32 resize-none"
            placeholder="Message"
          />

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </motion.form>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/50 dark:border-indigo-800/50">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600 dark:text-gray-300">mshoaban09@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600 dark:text-gray-300">+92 334 6731495</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">DG Khan, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-medium">Portfolio</p>
                  <p className="text-gray-600 dark:text-gray-300">for now not available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}