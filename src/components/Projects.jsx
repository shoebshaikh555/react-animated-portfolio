import { motion } from "framer-motion";

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

export const Projects = () => {
  const redirect = (link) => {
    if (link) window.open(link, "_blank");
  };

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Personal Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
            cursor: "pointer",
          }}
          onClick={() => redirect("https://edemy-lms-frontend.vercel.app")}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/edemy.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>E-demy LMS</h3>
          <p>
            A feature-rich Learning Management System enabling seamless course
            discovery, enrollment, progress tracking, secure payments, and
            comprehensive educator management for a complete e-learning
            experience.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Clerk</span>
            <span>Stripe</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
            cursor: "pointer",
          }}
          onClick={() => redirect("https://next-pay-555.netlify.app")}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/next-pay.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Next Pay Website</h3>
          <p>
            A smart and simple platform that helps you compare credit cards
            effortlessly and choose the best deal tailored to your financial
            needs in just a few clicks.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Post CSS</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
            cursor: "pointer",
          }}
          onClick={() => redirect("https://fitclub-1my.pages.dev")}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/gym-website.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Fit Club Website</h3>
          <p>
            A modern gym membership platform designed to help users explore
            fitness plans, register seamlessly, and stay committed to their
            health goals.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Framer Motion</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
