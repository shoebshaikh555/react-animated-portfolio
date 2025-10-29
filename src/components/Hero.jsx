import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I am </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Shoeb Shaikh
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            MERN Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Full stack developer turning complex ideas into intuitive digital
            experiences with Next.js, React, Node.js, Express.js and MongoDB.
            Driven by innovation, performance, and craft, I build web solutions
            that not only work flawlessly but leave a lasting impact.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  name: "Shoeb Shaikh",
  location: "India",
  role: "MERN Full Stack Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL", "PHP"],
    frontend: ["React", "Next.js", "RTK", "TailwindCSS", "Material UI", "Fluent UI", 
    "Bootstrap", "React-Bootstrap", "React Query", "Apollo client"],
    backend: ["Node.js", "Express.js", "socket.io", "jsonwebtoken"],
    databases: ["MongoDB", "Mongoose", "MySQL"],
    tools: ["Git", "REST APIs", "WebSockets", "GraphQL", "axios", "sendgrid", "firebase"],
    libraries: [ "React Hook Form", "Yup", "moment.js", "apexcharts", "clerk", "Stripe"]
  },
  strengths: [
    "Clean and scalable code",
    "Strong problem solving",
    "UI and performance focused",
    "Collaborative and communication oriented"
  ],
  missionStatement:
    "I build reliable, scalable and user focused web applications that deliver real value.",
  availability: "Open to new full-time opportunities and collaborations"
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
