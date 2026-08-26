import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, BriefcaseBusiness, ChevronDown, Code2, Download,
  ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin,
  Menu, Moon, Server, Sparkles, Sun, Terminal, UserRound, X, Zap
} from "lucide-react";
import "./styles.css";

const PROFILE = {
  name: "Rahul Rana",
  role: "Java FullStack Developer",
  tagline: "Building scalable backend systems, RESTful APIs and intelligent applications.",
  location: "Bhopal, Madhya Pradesh, India",
  github: "rahulkrana",
  linkedin: "rahul-rana",
  email: "judorahul92@gmail.com",
  phone: "7292831769",
  resume: "/Rahul-Rana-Resume.pdf"
};

const projects = [
  {
    title: "AI Interview Preparation System",
    description: "An AI-powered platform concept for interview practice, mock tests, feedback and performance analytics.",
    tags: ["Java", "Spring Boot", "MySQL"],
    icon: "🤖",
    accent: "purple",
    github: "#",
    demo: "#"
  },
  {
    title: "Pavement Distress Classification",
    description: "An image-classification project for identifying pavement distress categories using deep learning.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    icon: "🛣️",
    accent: "cyan",
    github: "#",
    demo: "#"
  },
  {
    title: "Hotel Management System",
    description: "A Java application for managing consumer details, billing records and payment-related workflows.",
    tags: ["Java", "JDBC", "MySQL"],
    icon: "⚡",
    accent: "green",
    github: "#",
    demo: "#"
  },
  {
    title: "Full-Stack Web Application",
    description: "A modern web application combining a responsive React frontend with a Java Spring Boot backend.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    icon: "🌐",
    accent: "orange",
    github: "#",
    demo: "#"
  }
];

const skills = [
  ["Java", "☕"], ["Spring Boot", "🌱"], ["REST API", "🔗"],
  ["Servlet", "🐘"], ["MySQL", "🗄️"], ["JDBC", "🔌"],
  ["HTML5", "🌐"], ["CSS3", "🎨"], ["JavaScript", "⚡"],
  ["React", "⚛️"], ["Python", "🐍"], ["AI / ML", "🧠"],
  ["Git", "🔀"], ["GitHub", "🐙"], ["IntelliJ IDEA", "💡"]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">RR</span>
          <span>{PROFILE.name}</span>
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="cv-btn" href={PROFILE.resume} download>
            <Download size={16} /> Download CV
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <span className="eyebrow"><Sparkles size={14} /> Hi, I'm</span>
            <h1>{PROFILE.name}</h1>
            <h2>{PROFILE.role}</h2>
            <p>{PROFILE.tagline}</p>

            <div className="tech-pills">
              {["Java", "Spring Boot", "MySQL", "AI/ML"].map((x) => <span key={x}>{x}</span>)}
            </div>

            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">🚀 View My Projects</a>
              <a className="secondary-btn" href="#contact"><Mail size={17} /> Contact Me</a>
            </div>

            <div className="socials">
              <a href={PROFILE.github === "rahulrana" ? "#" : `https://github.com/rahulkrana`} aria-label="GitHub"><Github /></a>
              <a href={PROFILE.linkedin === "Rahul Rana" ? "#" : `https://www.linkedin.com/in/rahul-rana-64aaab291/`} aria-label="LinkedIn"><Linkedin /></a>
              <a href="#skills" aria-label="Skills"><Code2 /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="code-window reveal">
            <div className="window-top">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="window-title">Backend Developer</span>
            </div>
            <pre><code>{`public class RahulRana {
  public static void main(String[] args) {
    String role = "Java FullStack Developer";
    String focus = "Building Scalable APIs";
    String passion = "AI & Problem Solving";

    System.out.println("I love " + role);
    System.out.println("I build " + focus);
    System.out.println("I explore " + passion);
  }
}

// Let's build the future together 🚀`}</code></pre>
          </div>
        </section>

        <section id="about" className="section">
          <div className="split-card">
            <div className="about-copy">
              <SectionTitle icon={<UserRound />} title="About Me" />
              <p>
                I'm a Computer Science student passionate about Java backend development,
                databases and Artificial Intelligence. I enjoy solving real-world problems
                and building practical software projects.
              </p>
              <ul className="about-list">
                <li><GraduationCap size={17} /> B.Tech CSE (AI/ML)</li>
                <li><MapPin size={17} /> {PROFILE.location}</li>
                <li><Sparkles size={17} /> Always learning something new</li>
                <li><Zap size={17} /> Fun fact: I debug with coffee ☕</li>
              </ul>
            </div>

            <div className="skills-mini" id="skills">
              <SectionTitle icon={<Code2 />} title="Tech Stack" />
              <div className="skill-grid">
                {skills.map(([name, icon]) => (
                  <div className="skill-chip" key={name}><span>{icon}</span>{name}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <SectionHeading icon={<Terminal />} title="Featured Projects" subtitle="A selection of projects that showcase my development journey." />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                 <div className="project-links">
                   <a href={project.github}><Github size={17} /> Code</a>
                   <a href={project.demo}>Live Demo <ExternalLink size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section two-column">
          <div className="panel">
            <SectionTitle icon={<BriefcaseBusiness />} title="Experience & Certifications" />
            <Timeline items={[
              ["Google Student Ambassador", "Community & developer engagement", "2024 – Present"],
              ["Oracle AI Foundations Associate", "AI/ML and Generative AI", "2024"],
              ["ServiceNow Administration Fundamentals", "Xanadu", "2024"]
            ]} />
          </div>

          <div id="education" className="panel">
            <SectionTitle icon={<GraduationCap />} title="Education" />
            <Timeline items={[
              ["B.Tech in Computer Science (AI/ML)", "Technocrats Institute of Technology, Bhopal", "2022 – 2026"],
              ["12th (JAC)", "Jharkhand Academic Council", "70.4%"],
              ["10th (CBSE)", "Central Board of Secondary Education", "71.4%"]
            ]} />
          </div>
        </section>

        <section className="section stats-section">
          <SectionHeading icon={<Github />} title="GitHub & Developer Journey" subtitle="Connect your real GitHub account below to replace the placeholders with your live profile data." />
          <div className="stats-grid">
            <div className="stat-card"><strong>Java</strong><span>Primary Language</span></div>
            <div className="stat-card"><strong>Spring Boot</strong><span>Backend Focus</span></div>
            <div className="stat-card"><strong>REST APIs</strong><span>Core Skill</span></div>
            <div className="stat-card"><strong>AI/ML</strong><span>Exploration</span></div>
          </div>
          <a className="github-banner" href={PROFILE.github === "rahulkrana" ? "#" : `https://github.com/rahulkrana`}>
            <Github size={22} />
           <span><b>GitHub Profile</b><small>Visit and explore something new.</small></span>
            <ArrowUpRight />
          </a>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-panel">
            <div>
              <span className="eyebrow"><Mail size={14} /> Let's connect</span>
              <h2>Have a project or opportunity?</h2>
              <p>I'm always open to discussing interesting projects, backend development and new opportunities.</p>
              <div className="contact-list">
                <a href={`mailto:${PROFILE.email}`}><Mail size={17} /> {PROFILE.email}</a>
                <span><MapPin size={17} /> {PROFILE.location}</span>
              </div>
            </div>
            <div className="contact-orbit"><div className="orbit-core">RR</div><span /><span /><span /></div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Rahul Rana. All rights reserved.</span>
        <span>Built with ❤️ using React</span>
        <a href="#home" aria-label="Back to top"><ChevronDown className="rotate-180" size={18} /></a>
      </footer>
    </div>
  );
}

function SectionTitle({ icon, title }) {
  return <div className="section-title"><span>{icon}</span><h2>{title}</h2></div>;
}

function SectionHeading({ icon, title, subtitle }) {
  return (
    <div className="section-heading">
      <SectionTitle icon={icon} title={title} />
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map(([title, desc, date]) => (
        <div className="timeline-item" key={title}>
          <span className="timeline-dot" />
          <div><h3>{title}</h3><p>{desc}</p></div>
          <time>{date}</time>
        </div>
      ))}
    </div>
  );
}


createRoot(document.getElementById("root")).render(<App />);
