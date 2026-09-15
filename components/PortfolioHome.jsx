"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiArrowRight, FiCheck, FiDownload, FiGithub, FiLinkedin,
  FiMail, FiMenu, FiPhone, FiX, FiCode, FiLayers, FiCloud,
  FiCpu, FiServer, FiSmartphone, FiTarget,
  FiGlobe, FiBookOpen, FiActivity,
  FiDollarSign, FiHardDrive, FiLock,
  FiCompass, FiRefreshCw, FiVideo, FiCheckCircle,
} from "react-icons/fi";
import ThemeToggle from "../components/ThemeToggle";
import ChatWidget from "../components/ChatWidget";

const clients = [
  { name: "RatedSol Tech", note: "Enterprise software house", tag: "Software House" },
  { name: "SYM Forklift", note: "Fleet & machinery ops", tag: "Operations" },
  { name: "MedicsExams", note: "Nationwide screening", tag: "Healthcare" },
  { name: "Fenapi", note: "Wallet & fiscal ops", tag: "Fintech" },
  { name: "SafeSend", note: "Encrypted file sharing", tag: "Security" },
  { name: "LiveWaves", note: "Live streaming social", tag: "Social" },
  { name: "FreeSoil", note: "Community platform", tag: "Social" },
  { name: "Institutional Suite", note: "Education & commerce", tag: "EdTech" },
];

const expertise = [
  { icon: <FiServer />, title: "Backend Engineering", text: "Scalable Laravel, PHP, CodeIgniter, and Node.js systems with clean architecture and reliable REST APIs.", tags: ["Laravel", "PHP", "Node.js", "REST APIs"] },
  { icon: <FiLayers />, title: "Frontend Development", text: "Responsive, accessible interfaces built for real users and maintainable product teams.", tags: ["React.js", "Vue.js", "Livewire", "Tailwind CSS"] },
  { icon: <FiCloud />, title: "Cloud & Delivery", text: "Production deployments, CI/CD workflows, Linux administration, and cloud infrastructure ownership.", tags: ["AWS", "Azure", "CI/CD", "Linux"] },
  { icon: <FiCode />, title: "Database Architecture", text: "Performance-focused schema design, query optimization, and migrations for high-traffic production databases.", tags: ["MySQL", "PostgreSQL", "Redis", "Optimization"] },
  { icon: <FiCpu />, title: "Real-Time Systems", text: "Event-driven features, websockets, notifications, and background processing across distributed services.", tags: ["Pusher", "Sockets", "Queues", "Cron"] },
  { icon: <FiSmartphone />, title: "Mobile APIs", text: "Secure backend services powering mobile apps with authentication, payments, and push notifications.", tags: ["REST", "Auth", "Payments", "Push"] },
];

const industries = [
  { icon: <FiActivity />, title: "Healthcare", note: "1 platform", text: "Nationwide blood-screening with role-based access, mobile APIs, payments, messaging, and real-time notifications.", tags: ["RBAC", "Pusher", "Twilio", "Payments"] },
  { icon: <FiDollarSign />, title: "Fintech", note: "1 platform", text: "Wallet & fiscal operations with mobile APIs, multi-currency payments, and AI-powered signature verification.", tags: ["Wallets", "PayPal", "APIs", "AI Verification"] },
  { icon: <FiHardDrive />, title: "Enterprise & Ops", note: "3 platforms", text: "Machine tracking, fleet management, and internal tools delivered end-to-end with AI-assisted workflows.", tags: ["Laravel", "Livewire", "MySQL", "Dashboards"] },
  { icon: <FiLock />, title: "Security", note: "1 platform", text: "Encrypted file and message sharing with password-protected links and role-based account management.", tags: ["Encryption", "RBAC", "Livewire", "MySQL"] },
  { icon: <FiGlobe />, title: "Social & Community", note: "2 platforms", text: "Live streaming, event discovery, music, debates, podcasts, and real-time engagement features.", tags: ["Live Streaming", "React", "Laravel", "AWS"] },
  { icon: <FiBookOpen />, title: "Education & Commerce", note: "Multiple systems", text: "Management and commerce systems for institutions, government programs, donations, and retail.", tags: ["Laravel", "Stripe", "CI", "E-commerce"] },
];

const projects = [
  { name: "SYM Forklift", category: "Operations Management", text: "Production platform for managing and tracking machines and forklifts, delivered end-to-end with AI-assisted development workflows.", tech: "Laravel · Livewire · MySQL" },
  { name: "MedicsExams", category: "Healthcare Technology", text: "Nationwide blood-screening platform with role-based access, mobile APIs, payments, messaging, and real-time notifications.", tech: "Laravel · AWS · Pusher · Twilio" },
  { name: "Fenapi", category: "Financial Management", text: "Management ecosystem with wallet and fiscal operations, mobile APIs, payments, and AI-powered signature verification.", tech: "CodeIgniter · REST APIs · PayPal" },
  { name: "SafeSend", category: "Security Platform", text: "Secure file and message sharing with encrypted, password-protected links and role-based account management.", tech: "Laravel · Livewire · MySQL" },
  { name: "LiveWaves & FreeSoil", category: "Social Platforms", text: "Interactive social products supporting live streaming, event discovery, music, debates, podcasts, and real-time engagement.", tech: "React.js · Laravel · AWS" },
  { name: "Institutional Platforms", category: "Education & Commerce", text: "Management and commerce systems for educational institutions, government programs, donations, and retail operations.", tech: "Laravel · CodeIgniter · Stripe" },
];

const stack = [
  { group: "Backend", items: ["Laravel", "PHP", "CodeIgniter", "Node.js", "Express", "REST APIs"] },
  { group: "Frontend", items: ["React.js", "Vue.js", "Livewire", "Next.js", "Tailwind CSS"] },
  { group: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { group: "Cloud & DevOps", items: ["AWS", "Azure", "CI/CD", "Linux", "Docker", "Git"] },
  { group: "Real-Time & Messaging", items: ["Pusher", "Sockets", "Twilio", "Queues"] },
  { group: "AI-Assisted Delivery", items: ["ChatGPT", "Claude", "Codex", "Cursor"] },
];

const howIWork = [
  { icon: <FiCompass />, title: "Scope First", text: "I ask the questions most developers skip. What's the real problem? If we're not the right fit, I'll say so before a contract." },
  { icon: <FiRefreshCw />, title: "Full Ownership", text: "From database schema to production deployment — I take end-to-end responsibility for outcomes, not just tickets." },
  { icon: <FiVideo />, title: "Daily Async Updates", text: "Screenshot or video updates as work happens, not at the end of a sprint. Full overlap with EU, flexible with US." },
  { icon: <FiCheckCircle />, title: "Production-Grade QA", text: "Tested before delivery, performance-optimized, and code-reviewed with the same rigor I'd want for my own products." },
];

const timezones = [
  { flag: "🇬🇧", zone: "UK / EU / Middle East", badge: "Strong", sub: "GMT, CET, Dubai (UTC+4)", note: "Full 8-hour workday overlap" },
  { flag: "🇺🇸", zone: "US East Coast", badge: "Strong", sub: "EST / EDT", note: "5-hour morning overlap" },
  { flag: "🇺🇸", zone: "US Central", badge: "Strong", sub: "CST / CDT", note: "4-hour morning overlap" },
  { flag: "🇸🇬", zone: "Singapore / China", badge: "Strong", sub: "SGT (UTC+8)", note: "5-hour afternoon overlap" },
  { flag: "🇺🇸", zone: "US Mountain / West Coast", badge: "Async", sub: "MST / PST / PDT", note: "1-3 hour overlap, async-friendly" },
  { flag: "🇦🇺", zone: "Australia East", badge: "Async", sub: "AEDT (UTC+11)", note: "2-hour afternoon overlap" },
];

export default function PortfolioHome() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top" onClick={close} aria-label="Muhammad Shoaban home">
            <span>MS</span>
            <div>
              <strong>Muhammad Shoaban</strong>
              <small>Software Engineer</small>
            </div>
          </a>
          <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={close}>About</a>
            <a href="#expertise" onClick={close}>Expertise</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#experience" onClick={close}>Experience</a>
            <a href="#contact" className="nav-contact" onClick={close}>Contact</a>
          </nav>
          <div className="header-tools">
            <ThemeToggle />
            <button
              className="nav-toggle"
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-hello">Hi, I&apos;m</p>
            <div className="availability"><span /> Available for new opportunities</div>
            <h1>
              Muhammad Shoaban
              <span className="hero-role">Software Engineer | Full Stack &amp; AI-Assisted Delivery</span>
            </h1>
            <p className="hero-summary">
              2+ Years | 15+ Projects Shipped | Delivering secure, scalable web applications
              across healthcare, finance, enterprise, and social platforms.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <FiArrowRight /></a>
              <a className="button secondary" href="/resume_latest_new.pdf" download>
                <FiDownload /> Download Resume
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/muhammad-shoaban" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            </div>
          </div>
          <div className="profile-panel">
            <div className="profile-photo">
              <div className="profile-photo-inner">
                <Image src="/me-up.png" alt="Muhammad Shoaban" width={800} height={800} priority />
              </div>
            </div>
            <div className="profile-card">
              <div><small>CURRENT ROLE</small><strong>Software Engineer</strong></div>
              <div><small>LOCATION</small><strong>Lahore, PK</strong></div>
              <div><small>FOCUS</small><strong>Full Stack &amp; AI</strong></div>
            </div>
          </div>
        </div>
        <div className="container metrics">
          <div><strong>2+</strong><span>Years Experience</span></div>
          <div><strong>15+</strong><span>Projects Shipped</span></div>
          <div><strong>6+</strong><span>Industries Served</span></div>
          <div><strong>100%</strong><span>Delivery Ownership</span></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container two-column">
          <div className="section-heading">
            <p className="overline">ABOUT ME</p>
            <h2>Engineering expertise with a business mindset.</h2>
          </div>
          <div className="about-copy">
            <div className="about-pill">
              <FiTarget /> Currently exploring: Agentic AI, RAG Pipelines &amp; MCP Integration
            </div>
            <p>
              I design, build, and deploy production applications from the database layer to
              the user interface. My work combines practical engineering decisions, clear
              communication, and consistent delivery.
            </p>
            <p>
              I also contribute to task planning, code review, technical direction, and
              project execution across multiple concurrent client engagements.
            </p>
            <ul>
              <li><FiCheck /> Secure and maintainable architecture</li>
              <li><FiCheck /> Performance-focused database design</li>
              <li><FiCheck /> Cross-functional team collaboration</li>
              <li><FiCheck /> Production deployment and support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">CLIENTS &amp; PRODUCTS</p>
            <h2>Platforms I&apos;ve helped build and ship.</h2>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <div className="client-card" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.note}</p>
                <span className="tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section" id="expertise">
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">CORE EXPERTISE</p>
            <h2>Capabilities built around product delivery.</h2>
            <p>From system architecture to polished interfaces and production operations.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, i) => (
              <article className="expertise-card" key={item.title}>
                <span className="card-number">0{i + 1}</span>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="tags">
                  {item.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">INDUSTRIES</p>
            <h2>Deep domain expertise across high-value verticals.</h2>
            <p>Not just code — context. Each platform tailored to its industry&apos;s reality.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind) => (
              <article className="industry-card" key={ind.title}>
                <div className="industry-icon">{ind.icon}</div>
                <h3>{ind.title}</h3>
                <small>{ind.note}</small>
                <p>{ind.text}</p>
                <div className="tags">
                  {ind.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="container">
          <div className="projects-heading">
            <div>
              <p className="overline">SELECTED PROJECTS</p>
              <h2>Production work across complex domains.</h2>
            </div>
            <p>A selection of platforms I&apos;ve helped architect, build, and deliver end-to-end.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.name}>
                <div className="project-index">0{i + 1}</div>
                <div className="project-body">
                  <span>{p.category}</span>
                  <h3>{p.name}</h3>
                  <p>{p.text}</p>
                  <strong>{p.tech}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">TECH STACK</p>
            <h2>Technologies I work with daily.</h2>
          </div>
          <div className="stack-grid">
            {stack.map((g) => (
              <div className="stack-group" key={g.group}>
                <h4>{g.group}</h4>
                <div className="tags">
                  {g.items.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">HOW I WORK</p>
            <h2>Transparent engagement. Consistent delivery.</h2>
          </div>
          <div className="how-grid">
            {howIWork.map((h) => (
              <article className="how-card" key={h.title}>
                <div className="how-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMEZONE */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">AVAILABILITY &amp; TIMEZONE</p>
            <h2>Remote with global clients. Flexible overlap.</h2>
            <p>Based in Lahore, Pakistan (PKT, UTC+5) — Remote-friendly, working across timezones.</p>
          </div>
          <div className="timezone-grid">
            {timezones.map((tz) => (
              <div className="tz-card" key={tz.zone + tz.sub}>
                <span className="flag">{tz.flag}</span>
                <span className={`tz-badge ${tz.badge.toLowerCase()}`}>{tz.badge}</span>
                <h4>{tz.zone}</h4>
                <small>{tz.sub}</small>
                <p>{tz.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience" style={{ paddingTop: 0 }}>
        <div className="container two-column experience-layout">
          <div className="section-heading">
            <p className="overline">EXPERIENCE</p>
            <h2>Progress driven by ownership and results.</h2>
            <a className="text-link" href="/resume_latest_new.pdf" download>
              Download full resume <FiArrowRight />
            </a>
          </div>
          <div className="experience-list">
            <article>
              <div className="experience-meta"><span>APR 2024 — PRESENT</span><span>DERA GHAZI KHAN</span></div>
              <h3>Software Engineer</h3>
              <h4>RatedSol Tech</h4>
              <p>Building full-cycle applications, technical planning, code review, task allocation, database architecture, REST API delivery, real-time systems, and Azure CI/CD workflows.</p>
            </article>
            <article>
              <div className="experience-meta"><span>JAN 2024 — MAR 2024</span><span>REMOTE</span></div>
              <h3>Web Application Developer</h3>
              <h4>Freelance — Fiverr &amp; Direct Clients</h4>
              <p>Building secure backend services for international clients, collaborating with frontend teams, and improving database, API, and application performance.</p>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education" style={{ paddingTop: 0 }}>
        <div className="container two-column">
          <div className="section-heading">
            <p className="overline">EDUCATION</p>
            <h2>Academic foundation in information technology.</h2>
          </div>
          <div className="experience-list">
            <article>
              <div className="experience-meta"><span>2021 — 2025</span><span>GHAZI UNIVERSITY</span></div>
              <h3>BS Information Technology</h3>
              <p>Coursework in software engineering, database systems, information security, cloud computing, data structures, and algorithms.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container contact-layout">
          <div>
            <p className="overline">LET&apos;S WORK TOGETHER</p>
            <h2>Bring me the problem that&apos;s been stuck.</h2>
            <p>I&apos;m open to remote, hybrid, and on-site roles, relocation, freelance projects, and technical collaboration.</p>
          </div>
          <div className="contact-card">
            <a href="mailto:mshoaban09@gmail.com">
              <FiMail />
              <span><small>EMAIL</small><strong>mshoaban09@gmail.com</strong></span>
              <FiArrowRight />
            </a>
            <a href="tel:+923346731495">
              <FiPhone />
              <span><small>PHONE</small><strong>+92 334 673 1495</strong></span>
              <FiArrowRight />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer">
              <FiLinkedin />
              <span><small>LINKEDIN</small><strong>Muhammad Shoaban</strong></span>
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="logo">
            <span>MS</span>
            <div><strong>Muhammad Shoaban</strong><small>Software Engineer</small></div>
          </div>
          <p>© 2026 Muhammad Shoaban. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <ChatWidget />
    </main>
  );
}