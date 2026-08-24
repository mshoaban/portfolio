"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";

const expertise = [
  { title: "Backend Engineering", text: "Scalable Laravel, PHP, CodeIgniter, and Node.js systems with clean architecture and reliable REST APIs.", tags: ["Laravel", "PHP", "Node.js", "REST APIs"] },
  { title: "Frontend Development", text: "Responsive, accessible interfaces built for real users and maintainable product teams.", tags: ["React.js", "Vue.js", "Livewire", "Tailwind CSS"] },
  { title: "Cloud & Delivery", text: "Production deployments, CI/CD workflows, Linux administration, and cloud infrastructure ownership.", tags: ["AWS", "Azure", "CI/CD", "Linux"] },
];

const projects = [
  { name: "SYM Forklift", category: "Operations Management", text: "Production platform for managing and tracking machines and forklifts, delivered end-to-end with AI-assisted development workflows.", tech: "Laravel · Livewire · MySQL" },
  { name: "MedicsExams", category: "Healthcare Technology", text: "Nationwide blood-screening platform with role-based access, mobile APIs, payments, messaging, and real-time notifications.", tech: "Laravel · AWS · Pusher · Twilio" },
  { name: "Fenapi", category: "Financial Management", text: "Management ecosystem with wallet and fiscal operations, mobile APIs, payments, and AI-powered signature verification.", tech: "CodeIgniter · REST APIs · PayPal" },
  { name: "SafeSend", category: "Security Platform", text: "Secure file and message sharing with encrypted, password-protected links and role-based account management.", tech: "Laravel · Livewire · MySQL" },
  { name: "LiveWaves & FreeSoil", category: "Social Platforms", text: "Interactive social products supporting live streaming, event discovery, music, debates, podcasts, and real-time engagement.", tech: "React.js · Laravel · AWS" },
  { name: "Institutional Platforms", category: "Education & Commerce", text: "Management and commerce systems for educational institutions, government programs, donations, and retail operations.", tech: "Laravel · CodeIgniter · Stripe" },
];

export default function PortfolioHome() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" onClick={close} aria-label="Muhammad Shoaban home">
            <span>MS</span><div><strong>Muhammad Shoaban</strong><small>Full Stack Developer & Team Lead</small></div>
          </a>
          <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={close}>About</a>
            <a href="#expertise" onClick={close}>Expertise</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#experience" onClick={close}>Experience</a>
            <a className="nav-contact" href="#contact" onClick={close}>Contact</a>
          </nav>
          <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <FiX /> : <FiMenu />}</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="availability"><span /> Available for new opportunities</div>
            <p className="overline">FULL STACK ENGINEERING · TECHNICAL LEADERSHIP</p>
            <h1>Building reliable software that moves businesses forward.</h1>
            <p className="hero-summary">I’m Muhammad Shoaban, a Full Stack Developer and Team Lead with 2+ years of experience delivering secure, scalable web applications across healthcare, finance, enterprise, and social platforms.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work<FiArrowRight /></a>
              <a className="button secondary" href="/resume.pdf" download><FiDownload /> Download résumé</a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/muhammad-shoaban" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            </div>
          </div>
          <div className="profile-panel">
            <div className="profile-photo"><Image src="/me-up.png" alt="Muhammad Shoaban" width={800} height={747} priority /></div>
            <div className="profile-card">
              <div><small>CURRENT ROLE</small><strong>Team Lead / Software Engineer</strong></div>
              <div><small>LOCATION</small><strong>Lahore, Pakistan</strong></div>
              <div><small>FOCUS</small><strong>Scalable Web Products</strong></div>
            </div>
          </div>
        </div>
        <div className="container metrics">
          <div><strong>2+</strong><span>Years of experience</span></div>
          <div><strong>15+</strong><span>Commercial applications</span></div>
          <div><strong>6+</strong><span>Industries supported</span></div>
          <div><strong>End-to-end</strong><span>Delivery ownership</span></div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container two-column">
          <div className="section-heading"><p className="overline">ABOUT ME</p><h2>Engineering expertise with a business mindset.</h2></div>
          <div className="about-copy">
            <p>I design, build, and deploy production applications from the database layer to the user interface. My work combines practical engineering decisions, clear communication, and consistent delivery.</p>
            <p>As a Team Lead, I also guide task allocation, code review, technical direction, and project execution across multiple concurrent client engagements.</p>
            <ul><li><FiCheck /> Secure and maintainable architecture</li><li><FiCheck /> Performance-focused database design</li><li><FiCheck /> Cross-functional team collaboration</li><li><FiCheck /> Production deployment and support</li></ul>
          </div>
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="container">
          <div className="section-heading centered"><p className="overline">CORE EXPERTISE</p><h2>Capabilities built around product delivery.</h2><p>From system architecture to polished interfaces and production operations.</p></div>
          <div className="expertise-grid">{expertise.map((item, index) => <article key={item.title} className="expertise-card"><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading projects-heading"><div><p className="overline">SELECTED PROJECTS</p><h2>Production work across complex domains.</h2></div><p>A selection of platforms I’ve helped architect, build, and deliver.</p></div>
          <div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={project.name}><div className="project-index">0{index + 1}</div><div className="project-body"><span>{project.category}</span><h3>{project.name}</h3><p>{project.text}</p><strong>{project.tech}</strong></div></article>)}</div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container two-column experience-layout">
          <div className="section-heading"><p className="overline">EXPERIENCE</p><h2>Progress driven by ownership and results.</h2><a className="text-link" href="/resume.pdf" download>Download full résumé <FiArrowRight /></a></div>
          <div className="experience-list">
            <article><div className="experience-meta"><span>APR 2024 — PRESENT</span><span>DERA GHAZI KHAN</span></div><h3>Team Lead / Software Engineer</h3><h4>RatedSol Tech</h4><p>Leading full-cycle application development, technical planning, code review, task allocation, database architecture, REST API delivery, real-time systems, and Azure CI/CD workflows.</p></article>
            <article><div className="experience-meta"><span>JAN 2024 — PRESENT</span><span>REMOTE</span></div><h3>Web Application Developer</h3><h4>Freelance — Fiverr & Direct Clients</h4><p>Building secure backend services for international clients, collaborating with frontend teams, and improving database, API, and application performance.</p></article>
            <article className="education-row"><div className="experience-meta"><span>2021 — 2025</span><span>GHAZI UNIVERSITY</span></div><h3>BS Information Technology</h3><p>Coursework in software engineering, database systems, information security, cloud computing, data structures, and algorithms.</p></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div><p className="overline">GET IN TOUCH</p><h2>Let’s discuss your next project or opportunity.</h2><p>I’m open to remote, hybrid, and on-site roles, relocation, freelance projects, and technical collaboration.</p></div>
          <div className="contact-card">
            <a href="mailto:mshoaban09@gmail.com"><FiMail /><span><small>EMAIL</small><strong>mshoaban09@gmail.com</strong></span><FiArrowRight /></a>
            <a href="tel:+923346731495"><FiPhone /><span><small>PHONE</small><strong>+92 334 673 1495</strong></span><FiArrowRight /></a>
            <a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer"><FiLinkedin /><span><small>LINKEDIN</small><strong>Muhammad Shoaban</strong></span><FiArrowRight /></a>
          </div>
        </div>
      </section>

      <footer><div className="container footer-inner"><div className="logo footer-logo"><span>MS</span><div><strong>Muhammad Shoaban</strong><small>Full Stack Developer & Team Lead</small></div></div><p>© 2026 Muhammad Shoaban. All rights reserved.</p><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
