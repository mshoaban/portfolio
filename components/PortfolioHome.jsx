"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowDownRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";

const projects = [
  { n:"01", name:"SYM Forklift", type:"Operations platform", copy:"A live machine and forklift management system built end-to-end with AI-assisted workflows.", tech:"Laravel / Livewire / MySQL", tone:"acid" },
  { n:"02", name:"MedicsExams", type:"Healthcare platform", copy:"A nationwide mobile blood-screening ecosystem with role-based access, payments, messaging, and real-time updates.", tech:"Laravel / AWS / Pusher / Twilio", tone:"dark" },
  { n:"03", name:"Fenapi", type:"Financial management", copy:"A feature-rich wallet and fiscal management system with an API ecosystem and AI-powered signature verification.", tech:"CodeIgniter / REST APIs / PayPal", tone:"sand" },
  { n:"04", name:"SafeSend", type:"Secure sharing", copy:"Password-protected, end-to-end encrypted file and message sharing for multiple account types.", tech:"Laravel / Livewire / RBAC", tone:"blue" },
  { n:"05", name:"LiveWaves & FreeSoil", type:"Social platforms", copy:"Live streaming, event discovery, music, debates, podcasts, and real-time community interaction.", tech:"React / Laravel / AWS", tone:"pink" },
  { n:"06", name:"Education & Commerce", type:"Digital transformation", copy:"Management and commerce platforms for institutions, government programs, donations, and retail operations.", tech:"Laravel / CodeIgniter / Stripe", tone:"orange" },
];

const skills = ["Laravel","PHP","React.js","Vue.js","Livewire","Node.js","MySQL","PostgreSQL","REST APIs","AWS","Azure","CI/CD","Tailwind CSS","Pusher","Twilio","Git"];

export default function PortfolioHome() {
  const [menuOpen,setMenuOpen]=useState(false);
  return <main>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Muhammad Shoaban home"><span>MS</span><div><b>Full Stack Developer</b><small><i/>Available for work</small></div></a>
      <nav className="nav-pill" aria-label="Main navigation">
        <a href="#top">Home</a><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a>
      </nav>
      <a className="nav-cta" href="mailto:mshoaban09@gmail.com">Let&apos;s talk <FiArrowUpRight/></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<FiX/>:<FiMenu/>}</button>
      {menuOpen && <div className="mobile-menu"><a onClick={()=>setMenuOpen(false)} href="#about">About</a><a onClick={()=>setMenuOpen(false)} href="#work">Work</a><a onClick={()=>setMenuOpen(false)} href="#experience">Experience</a><a href="/resume.pdf">Resume</a></div>}
    </header>

    <section className="hero page-shell" id="top">
      <div className="hero-grid reveal">
        <p className="hero-kicker">Team lead. Product builder.<br/>Based in Lahore, Pakistan.</p>
        <h1>I build digital<br/><span className="serif">products</span> that<br/>work <em>beautifully.</em></h1>
        <div className="portrait-wrap"><div className="portrait-orbit">FULL STACK • TEAM LEAD • FULL STACK • TEAM LEAD •</div><Image src="/me-up.png" alt="Muhammad Shoaban" width={800} height={747} priority /></div>
        <div className="hero-bottom"><p>Results-driven full stack developer with 2+ years of experience shipping scalable web applications and leading teams from idea to production.</p><a href="#work" className="round-arrow" aria-label="View selected work"><FiArrowDownRight/></a></div>
      </div>
      <div className="ticker"><span>Laravel</span><i/> <span>React</span><i/> <span>Vue</span><i/> <span>Cloud</span><i/> <span>API Architecture</span><i/> <span>Team Leadership</span></div>
    </section>

    <section className="about section-pad" id="about"><div className="page-shell">
      <div className="about-head"><div><p className="eyebrow">What I do</p><h2>Engineering with<br/><span className="serif">ownership.</span></h2></div><p>I turn complex requirements into secure, scalable products - from backend architecture and database design to polished frontend experiences and production delivery.</p></div>
      <div className="bento">
        <article className="bento-main"><span>01</span><h3>Full-cycle<br/>development</h3><p>Architecture, APIs, interfaces, cloud deployment, and continuous optimization - one accountable workflow.</p><div className="code-lines">&lt;build&gt;<br/><b>&nbsp;&nbsp;secure · scalable · useful</b><br/>&lt;/build&gt;</div></article>
        <article className="bento-stat"><b>2+</b><p>years building<br/>production software</p></article>
        <article className="bento-lead"><span>LEADERSHIP</span><h3>From contributor<br/>to team lead.</h3><p>Guiding delivery, code reviews, task allocation, and technical direction across concurrent client projects.</p></article>
        <article className="bento-quote"><p className="serif">“Good software is clear thinking made tangible.”</p></article>
      </div>
    </div></section>

    <section className="work section-pad" id="work"><div className="page-shell">
      <div className="section-title"><div><p className="eyebrow">Selected work</p><h2>Built for the<br/><span className="serif">real world.</span></h2></div><p>Healthcare, finance, social platforms, secure sharing, education, and commerce - products designed to perform beyond the demo.</p></div>
      <div className="project-grid">{projects.map(p=><article key={p.name} className={`project-card ${p.tone}`}><div className="project-top"><span>{p.n} / 06</span><FiArrowUpRight/></div><div><small>{p.type}</small><h3>{p.name}</h3><p>{p.copy}</p></div><footer>{p.tech}</footer></article>)}</div>
    </div></section>

    <section className="experience section-pad" id="experience"><div className="page-shell">
      <div className="section-title light"><div><p className="eyebrow">Experience</p><h2>Growing by<br/><span className="serif">building.</span></h2></div><p>Hands-on engineering paired with increasing ownership of people, process, and production outcomes.</p></div>
      <div className="timeline">
        <article><div className="time">APR 2024 - PRESENT</div><div><span>RATEDSOL TECH</span><h3>Team Lead / Software Engineer</h3><p>Leading end-to-end web application delivery with Laravel, Livewire, CodeIgniter, PHP, and React. Architecting APIs and relational databases, building real-time systems, reviewing code, and setting technical direction.</p></div><b>01</b></article>
        <article><div className="time">JAN 2024 - PRESENT</div><div><span>FREELANCE · REMOTE</span><h3>Web Application Developer</h3><p>Delivering reliable backend services for international clients, collaborating with frontend teams, and improving database, API, and application performance.</p></div><b>02</b></article>
      </div>
      <div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div>
    </div></section>

    <section className="education section-pad"><div className="page-shell edu-grid"><div><p className="eyebrow">Education</p><h2>The foundation,<br/><span className="serif">then the craft.</span></h2></div><div className="edu-card"><span>2021 - 2025</span><h3>BS Information Technology</h3><a href="https://www.gudgk.edu.pk/" target="_blank" rel="noreferrer">Ghazi University <FiArrowUpRight/></a><p>Data Structures & Algorithms · OOP · Database Management · Software Engineering · Information Security · Cloud Computing</p></div><div className="edu-card"><span>COURSE CERTIFICATE</span><h3>Web Development Essentials</h3><p>HTML, CSS and JavaScript · Coursera</p></div></div></section>

    <section className="contact section-pad" id="contact"><div className="page-shell contact-inner"><div><p className="eyebrow">Start a conversation</p><h2>Have a challenge?<br/><span className="serif">Let&apos;s build it.</span></h2></div><div className="contact-actions"><a href="mailto:mshoaban09@gmail.com"><FiMail/>mshoaban09@gmail.com<FiArrowUpRight/></a><a href="/resume.pdf" download><FiDownload/>Download résumé<FiArrowDownRight/></a></div></div></section>

    <footer className="footer"><div className="page-shell footer-top"><div><b>MUHAMMAD<br/>SHOABAN</b><p>Building useful digital products<br/>with care, clarity, and ownership.</p></div><div><small>CONNECT</small><a href="https://github.com/mshoaban" target="_blank" rel="noreferrer"><FiGithub/>GitHub</a><a href="https://www.linkedin.com/in/muhammad-shoaban/" target="_blank" rel="noreferrer"><FiLinkedin/>LinkedIn</a></div><div><small>CONTACT</small><a href="tel:+923346731495">+92 334 673 1495</a><a href="mailto:mshoaban09@gmail.com">Email me</a></div></div><div className="page-shell footer-bottom"><span>© 2026 Muhammad Shoaban</span><span>LAHORE · PAKISTAN</span></div></footer>
  </main>;
}
