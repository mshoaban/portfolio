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
import InquiryForm from "../components/InquiryForm";

const clients = [
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
  { icon: <FiSmartphone />, title: "Mobile Applications", text: "React Native and Flutter applications with practical mobile UX, push notifications, secure APIs, and collector travel-distance tracking.", tags: ["React Native", "Flutter", "FCM", "Mobile UX"] },
  { icon: <FiRefreshCw />, title: "CRM & Sales Automation", text: "Connected lead capture, automated follow-up, agent-assisted sales workflows, and contract signing, with GoHighLevel integrations that consolidate fragmented tools.", tags: ["GoHighLevel", "n8n", "Zapier", "Webhooks"] },
];

const services = [
  {
    icon: <FiLayers />,
    title: "Web Apps & SaaS Development",
    text: "Portals, dashboards, and SaaS platforms that replace spreadsheets, paper workflows, and fragmented tools with one connected system.",
    includes: ["Laravel + React product builds", "Dashboards, portals & admin panels", "Auth, roles, payments & REST APIs"],
    bestFor: "Businesses that need a reliable internal system or customer-facing platform.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Business Automation & CRM",
    text: "Lead capture, routing, follow-up, and contract workflows connected across your website, ads, social channels, and CRM.",
    includes: ["GoHighLevel, n8n & Zapier workflows", "Lead routing & automated follow-up", "Forms, webhooks & sales pipelines"],
    bestFor: "Teams losing enquiries or spending hours on manual follow-up.",
  },
  {
    icon: <FiServer />,
    title: "APIs, Mobile Backends & Improvements",
    text: "Secure APIs and backend improvements for web and mobile products, including performance work on existing Laravel and Node.js systems.",
    includes: ["REST APIs for web & mobile apps", "Database & admin-panel optimization", "Push notifications & third-party integrations"],
    bestFor: "Products that need a stronger backend, faster operations, or new integrations.",
  },
];

const industries = [
  { icon: <FiActivity />, title: "Healthcare", note: "1 platform", text: "Blood-screening workflows with role-based access, payments, mobile notifications, an optimized admin panel, and collector travel-distance tracking.", tags: ["RBAC", "Pusher", "Twilio", "Payments"] },
  { icon: <FiDollarSign />, title: "Fintech", note: "1 platform", text: "Wallet & fiscal operations with mobile APIs, multi-currency payments, and AI-powered signature verification.", tags: ["Wallets", "PayPal", "APIs", "AI Verification"] },
  { icon: <FiHardDrive />, title: "Enterprise & Ops", note: "3 platforms", text: "Machine import operations, automated manuals, freight records, and connected CRM and sales workflows for machinery businesses.", tags: ["Laravel", "Livewire", "MySQL", "Dashboards"] },
  { icon: <FiLock />, title: "Security", note: "1 platform", text: "Encrypted file and message sharing with password-protected links and role-based account management.", tags: ["Encryption", "RBAC", "Livewire", "MySQL"] },
  { icon: <FiGlobe />, title: "Social & Community", note: "2 platforms", text: "Live streaming, event discovery, music, debates, podcasts, and real-time engagement features.", tags: ["Live Streaming", "React", "Laravel", "AWS"] },
  { icon: <FiBookOpen />, title: "Education & Commerce", note: "Multiple systems", text: "Management and commerce systems for institutions, government programs, donations, and retail.", tags: ["Laravel", "Stripe", "CI", "E-commerce"] },
];

const projects = [
  { name: "SYM Forklift", category: "Operations & Sales Automation", role: "Portal, machine-record automation, and GoHighLevel lead-to-contract workflow delivery.", text: "Built a portal to replace paper-based workflows for machines imported from China to Australia. Automated machine-manual generation and centralized machine and freight records. Integrated GoHighLevel to connect lead capture, follow-up, sales agents, and contract signing.", tech: "Laravel · Livewire · MySQL · GoHighLevel · REST APIs", outcomes: ["Replaced ClickSend, Klaviyo, and Zapier workflows with GoHighLevel, and moved contract signing from DocuSign into GHL to reduce reliance on separate paid tools.", "Connected website, Facebook, Google, TikTok, and Instagram lead sources, with automated routing and follow-up to help prevent missed enquiries when staff are unavailable.", "In one recent month, the client received 45 inbound leads through social media DMs and the website with no paid advertising spend."] },
  { name: "MedicsExams", category: "Healthcare & Mobile Workflows", role: "Platform improvements, admin-panel performance, mobile UX, and collector travel-distance tracking.", text: "Built and improved a blood-screening platform and its React Native mobile app. Optimized admin-panel performance, improved the mobile user experience, and added automatic travel-distance tracking for sample collectors.", tech: "Laravel · React Native · MySQL · AWS · FCM · Notifee", outcomes: ["Optimized the admin panel for faster day-to-day operations and improved the mobile user experience.", "Added automatic collector travel-distance tracking to support sample-collection workflows.", "Delivered iOS/Android push notifications and migrated the legacy FCM HTTP integration to FCM v1."] },
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
  { group: "Automation & CRM", items: ["GoHighLevel", "n8n", "Zapier", "Webhooks", "Lead Routing", "Sales Workflows"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Dart", "FCM", "Notifee"] },
  { group: "Payments & Integrations", items: ["Stripe", "PayPal", "Twilio", "Webhooks", "Third-Party APIs"] },
];

const howIWork = [
  { icon: <FiCompass />, title: "Scope First", text: "I ask the questions most developers skip. What's the real problem? If we're not the right fit, I'll say so before a contract." },
  { icon: <FiRefreshCw />, title: "Full Ownership", text: "From database schema to production deployment — I take end-to-end responsibility for outcomes, not just tickets." },
  { icon: <FiVideo />, title: "Daily Async Updates", text: "Screenshot or video updates as work happens, not at the end of a sprint. Async-first, with scheduled calls across UK, EU, US, and Australia time zones." },
  { icon: <FiCheckCircle />, title: "Production-Grade QA", text: "Tested before delivery, performance-optimized, and code-reviewed with the same rigor I'd want for my own products." },
];

const timezones = [
  { flag: "🇬🇧", zone: "UK / EU / Middle East", badge: "Strong", sub: "GMT, CET, Dubai (UTC+4)", note: "Substantial overlap with UK and EU working hours" },
  { flag: "🇺🇸", zone: "US East Coast", badge: "Async", sub: "EST / EDT", note: "Async updates with scheduled calls" },
  { flag: "🇺🇸", zone: "US Central", badge: "Async", sub: "CST / CDT", note: "Async updates with scheduled calls" },
  { flag: "🇸🇬", zone: "Singapore / China", badge: "Strong", sub: "SGT (UTC+8)", note: "Good afternoon overlap from Pakistan" },
  { flag: "🇺🇸", zone: "US Mountain / West Coast", badge: "Async", sub: "MST / PST / PDT", note: "Async-first with scheduled calls" },
  { flag: "🇦🇺", zone: "Australia East", badge: "Async", sub: "AEDT (UTC+11)", note: "Async-first with scheduled calls" },
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
              <small>Full-Stack Developer</small>
            </div>
          </a>
          <nav className={open ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <a href="#about" onClick={close}>About</a>
            <a href="#services" onClick={close}>Services</a>
            <a href="#expertise" onClick={close}>Expertise</a>
            <a href="#projects" onClick={close}>Projects</a>
            <a href="#experience" onClick={close}>Experience</a>
            <a href="#contact" className="nav-contact" onClick={close}>Start a project</a>
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
            <div className="availability"><span /> Available for freelance projects</div>
            <h1>
              Muhammad Shoaban
              <span className="hero-role">Full-Stack Developer | Laravel + React Web Apps &amp; Automation</span>
            </h1>
            <p className="hero-summary">
              I build Laravel + React web apps and SaaS platforms that replace manual work.
              15+ projects shipped across healthcare, machinery, finance, and social platforms — working directly with me, with no agency handoff.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Start a project <FiArrowRight /></a>
              <a className="button secondary" href="#projects">View my work</a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/mshoaban" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <a href="/resume_latest_new.pdf" download><FiDownload /> Resume</a>
            </div>
          </div>
          <div className="profile-panel">
            <div className="profile-photo">
              <div className="profile-photo-inner">
                <Image src="/me-up.png" alt="Muhammad Shoaban" width={800} height={800} priority />
              </div>
            </div>
            <div className="profile-card">
              <div><small>WORKING AS</small><strong>Independent Full-Stack Developer</strong></div>
              <div><small>LOCATION</small><strong>Lahore, PK</strong></div>
              <div><small>FOCUS</small><strong>Laravel, React &amp; Automation</strong></div>
            </div>
          </div>
        </div>
        <div className="container metrics">
          <div><strong>2+</strong><span>Years Experience</span></div>
          <div><strong>15+</strong><span>Projects Shipped</span></div>
          <div><strong>6+</strong><span>Industries Served</span></div>
          <div><strong>45</strong><span>Inbound leads in one month for SYM</span></div>
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
              <FiTarget /> Independent developer — you work directly with me, from scope to deployment
            </div>
            <p>
              I design, build, and deploy production applications from the database layer to
              the user interface. My work combines practical engineering decisions, clear
              communication, and consistent delivery.
            </p>
            <p>
              I turn paper-based operations and fragmented tools into connected systems,
              from machine manuals and freight records to lead capture, sales follow-up,
              and contract signing. I also contribute to planning, code review, and delivery.
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
            <p className="overline">PLATFORMS &amp; PRODUCTS</p>
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

      {/* SERVICES */}
      <section className="section" id="services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading centered">
            <p className="overline">FREELANCE SERVICES</p>
            <h2>Clear ways to work with me directly.</h2>
            <p>No agency handoff. You discuss scope, progress, and delivery directly with the developer building your product.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.includes.map((item) => <li key={item}><FiCheck /> {item}</li>)}
                </ul>
                <p className="service-best"><strong>Best for:</strong> {service.bestFor}</p>
                <a className="text-link" href="#contact">Discuss this service <FiArrowRight /></a>
              </article>
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
                  {"role" in p && p.role ? <p className="project-role"><strong>My role:</strong> {p.role}</p> : null}
                  <p>{p.text}</p>
                  {"outcomes" in p && p.outcomes && (
                    <ul aria-label={`${p.name} outcomes`}>
                      {p.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  )}
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
              <div className="experience-meta"><span>JUL 2024 — PRESENT</span><span>LAHORE, PK</span></div>
              <h3>Software Engineer</h3>
              <h4>RatedSol Tech</h4>
              <p>During my internship (Apr–Jun 2024) I contributed to client projects in PHP and Laravel before moving into the Software Engineer role. Building Laravel/PHP and React applications, React Native and Flutter mobile apps, REST APIs, and cloud deployments. Delivered SYM machinery operations and GHL sales automation, improved MedicsExams admin performance and mobile UX, and implemented collector travel-distance tracking. Contribute to technical planning, code review, team mentoring, and Azure CI/CD workflows.</p>
            </article>
            <article>
              <div className="experience-meta"><span>OCT 2023 — PRESENT</span><span>REMOTE</span></div>
              <h3>Web Application Developer</h3>
              <h4>Freelance — Fiverr &amp; Direct Clients</h4>
              <p>Building and maintaining backend services for international clients, collaborating with React/Vue teams, optimizing databases and APIs, and delivering n8n, GoHighLevel, and Zapier automation for lead handling and business processes.</p>
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
              <div className="experience-meta"><span>SEP 2021 — APR 2025</span><span>GHAZI UNIVERSITY</span></div>
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
            <p className="overline">START A PROJECT</p>
            <h2>Tell me about the project you want to build.</h2>
            <p>
              Share your goal, timeline, and budget range. I will review the fit directly —
              no agency handoff — and reply with the next practical step.
            </p>
            <p>
              Working with clients remotely across the UK, EU, US, Canada, and Australia,
              with async updates and scheduled calls.
            </p>
            <div className="contact-card contact-direct">
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
          <InquiryForm />
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <div className="logo">
            <span>MS</span>
            <div><strong>Muhammad Shoaban</strong><small>Full-Stack Developer</small></div>
          </div>
          <p>© 2026 Muhammad Shoaban. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <ChatWidget />
    </main>
  );
}