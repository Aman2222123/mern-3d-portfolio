
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Mail,
  Code2,
  Menu,
  X,
  Download,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./App.css";

// 3D Hero Object
function ThreeDObject() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 4, 5]} intensity={3} />
      <pointLight
        position={[-3, -2, -3]}
        color="#8b5cf6"
        intensity={25}
      />

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh>
          <icosahedronGeometry args={[1.35, 5]} />
          <MeshDistortMaterial
            color="#8154ff"
            roughness={0.15}
            metalness={0.75}
            distort={0.28}
            speed={2}
          />
        </mesh>
      </Float>

      <mesh rotation={[1.2, 0.5, 0]}>
        <torusGeometry args={[1.85, 0.012, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" metalness={0.8} />
      </mesh>

      <Sparkles
        count={90}
        scale={5}
        size={2}
        speed={0.4}
        color="#c4b5fd"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.7}
      />
    </>
  );
}

// Reusable section heading
function SectionHeading({ number, label, title, highlight, description }) {
  return (
    <div className="section-heading">
      <span className="strip-number">
        {number} / {label}
      </span>
      <h2>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Education", "#education"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
  ];

  const skills = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Developing server-side applications and APIs.",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database & Tools",
      description: "Working with databases and development tools.",
      items: ["MongoDB", "MySQL", "Git", "GitHub"],
    },
  ];

  return (
    <main className="portfolio" id="home">
      {/* Background */}
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Code2 size={21} />
          </span>
          <span>
            Aman<span className="brand-accent">.dev</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
        >
          {navItems.map(([label, link]) => (
            <a key={link} href={link} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="nav-contact"
          >
            Let's Talk <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability">
            <span className="availability-dot" />
            Open to opportunities
          </div>

          <p className="hero-intro">HELLO, I'M AMAN KUMAR</p>

          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span className="gradient-text">modern technology.</span>
          </h1>

          <p className="hero-description">
            I'm Aman Kumar, an aspiring MERN Stack Developer
            focused on building modern, responsive and
            user-friendly web applications. I enjoy working
            with React, Node.js, Express and MongoDB to turn
            ideas into practical digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me <Mail size={17} />
            </a>

            <a
              href="/Aman-Kumar-Resume.pdf"
              download="Aman-Kumar-Resume.pdf"
              className="secondary-button"
            >
              Resume <Download size={17} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/Aman2222123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-pal-371577253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>

            <span className="social-divider" />
            <span className="social-caption">
              Let's build something great
            </span>
          </div>
        </motion.div>

        {/* 3D Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-label label-top">
            <span className="label-dot" />
            3D INTERACTIVE SPACE
          </div>

          <div className="canvas-wrap">
            <Canvas
              camera={{ position: [0, 0, 5.5], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
            >
              <ThreeDObject />
            </Canvas>
          </div>

          <div className="floating-card card-top">
            <span className="floating-card-icon">{"</>"}</span>
            <div>
              <strong>Clean Code</strong>
              <small>Built with purpose</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="floating-card-icon">✦</span>
            <div>
              <strong>Creative Ideas</strong>
              <small>Turning ideas into reality</small>
            </div>
          </div>
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <ArrowDown size={16} />
          <span>SCROLL TO EXPLORE</span>
        </a>
      </section>

      {/* About */}
      <section className="intro-strip" id="about">
        <div>
          <span className="strip-number">01 / ABOUT</span>
          <h2>Developer. Learner. Problem solver.</h2>
        </div>

        <p>
          I hold an MCA degree and a BSc in Mathematics.
          I am developing my full-stack skills through
          hands-on projects, practical problem-solving
          and continuous learning.
        </p>
      </section>

      {/* Experience */}
      <section className="experience-section" id="experience">
        <SectionHeading
          number="02"
          label="EXPERIENCE"
          title="My"
          highlight="Journey."
          description="My professional experience and the steps I am taking to grow as a software developer."
        />

        <div className="timeline">
          <article className="timeline-card">
            <div className="timeline-dot" />

            <div className="timeline-meta">
              <span>January 2026 – Present</span>
              <span className="timeline-type">Current Experience</span>
            </div>

            <h3>MPS Limited</h3>
            <h4>Graphics Editing & Production</h4>

            <p>
              Working on graphics editing and production tasks
              for the Springer Nature team, using tools such as
              Adobe Illustrator and Photoshop.
            </p>

            <div className="project-tech">
              <span>Adobe Illustrator</span>
              <span>Adobe Photoshop</span>
              <span>XML</span>
            </div>
          </article>

          <article className="timeline-card">
            <div className="timeline-dot" />

            <div className="timeline-meta">
              <span>January 2025 – March 2025</span>
              <span className="timeline-type">Internship</span>
            </div>

            <h3>Novanectar Services Pvt. Ltd.</h3>
            <h4>MERN Stack Developer Intern</h4>

            <p>
              Completed a three-month internship focused on
              MERN stack technologies and full-stack web
              development.
            </p>

            <div className="project-tech">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React</span>
              <span>Node.js</span>
            </div>
          </article>
        </div>
      </section>

      {/* Education */}
      <section className="education-section" id="education">
        <SectionHeading
          number="03"
          label="EDUCATION"
          title="Academic"
          highlight="Background."
        />

        <div className="education-grid">
          <article className="education-card">
            <GraduationCap size={26} />
            <span className="education-year">2022</span>
            <h3>Bachelor of Science – Mathematics</h3>
            <p>Hemvati Nandan Bahuguna Garhwal University</p>
            <span className="education-score">60%</span>
          </article>

          <article className="education-card">
            <GraduationCap size={26} />
            <span className="education-year">2024</span>
            <h3>Master of Computer Applications</h3>
            <p>DIT University, Dehradun</p>
            <span className="education-score">70%</span>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-preview" id="skills">
        <SectionHeading
          number="04"
          label="TECHNICAL SKILLS"
          title="Technologies I"
          highlight="Work With."
          description="Technologies and tools I use while learning, building projects and developing web applications."
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.title}>
              <div className="skill-card-icon">
                <Code2 size={25} />
              </div>

              <h3>{skill.title}</h3>
              <p>{skill.description}</p>

              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="projects">
        <SectionHeading
          number="05"
          label="SELECTED WORK"
          title="Projects I've"
          highlight="Built."
          description="A selection of projects showcasing my frontend and full-stack development journey."
        />

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-image task-image">
              <span className="project-number">01</span>
              <Code2 size={65} />
              <span className="project-category">FULL STACK</span>
            </div>

            <div className="project-content">
              <div className="project-status">Live Demo</div>
              <h3>SaaS Platform for Educators</h3>

              <p>
                A SaaS platform for educators with a React and
                TypeScript frontend, Node.js and Express backend,
                PostgreSQL database, Prisma ORM and Razorpay
                payment integration.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
                <span>Razorpay</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Aman2222123/Couse-Selling-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub <ArrowRight size={15} />
                </a>

                <a
                  href="https://course-selling-app-lemon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-image ghee-image">
              <span className="project-number">02</span>
              <Code2 size={65} />
              <span className="project-category">WEB DEVELOPMENT</span>
            </div>

            <div className="project-content">
              <div className="project-status">
                Repository Available
              </div>

              <h3>Ghee Product Website</h3>

              <p>
                A product-focused website created to present
                a ghee brand and its products through a
                dedicated web experience.
              </p>

              <div className="project-tech">
                <span>HTML</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Aman22221212/Ghee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contact */}
      <footer className="footer" id="contact">
        <div className="contact-content">
          <span className="strip-number">06 / GET IN TOUCH</span>

          <h2>
            Let's build something{" "}
            <span className="gradient-text">great.</span>
          </h2>

          <p>
            I'm interested in software development opportunities
            and collaborating on meaningful projects.
            Feel free to reach out.
          </p>

          <a
            href="mailto:amankumar4url12@gmail.com"
            className="primary-button"
          >
            <Mail size={17} />
            Contact Me
            <ArrowRight size={17} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/Aman2222123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={19} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aman-pal-371577253"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={19} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="brand">
            Aman<span className="brand-accent">.dev</span>
          </span>

          <p>Designed & developed by Aman Kumar · © 2026</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
