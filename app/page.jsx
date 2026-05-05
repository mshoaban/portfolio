"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CoreStrengths from "@/components/CoreStrengths";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white">

      <Header />

      <div className="space-y-32">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CoreStrengths />
        <Contact />
      </div>

      <Footer />

    </main>
  );
}