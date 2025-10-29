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

export const ProfessionalProjects = () => {
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
        Professional Projects
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
          }}
        >
          <h3>Hollywood ERP Project</h3>
          <p>
            This is an ERP platform designed for Hollywood production
            houses, streamlining operations, asset management, and workflow
            coordination to deliver faster and more efficient film production.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TypeScript</span>
            <span>Fluent UI</span>
            <span>React Hook Form</span>
            <span>Yup</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>Learning Management System</h3>
          <p>
            Collaborative Learning Management System that
            empowers students and teachers to create and attend online classes
            seamlessly from anywhere.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>Material UI</span>
            <span>TypeScript</span>
            <span>RTK Query</span>
            <span>React Big Calendar</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>FinTech Application</h3>
          <p>
            Loan management web application designed to
            enhance efficiency and ensure transparency in Shariah-compliant loan
            processing and approval workflows.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Sendgrid</span>
            <span>Framer Motion</span>
            <span>React Query</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>Business Analysis Platform</h3>
          <p>
            This business analysis platform delivers product insights, feasibility projections, decision-making tools, activity tracking, and detailed report generation through smart parameters and data-driven calculations.
          </p>
          <div className="project-tech">
            <span>Fluent UI</span>
            <span>TypeScript</span>
            <span>React Query</span>
            <span>Firebase</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>SaaS Application</h3>
          <p>
            SaaS task management platform designed to
            streamline daily workflows, enhance productivity, and improve team
            collaboration through an organized and intuitive system.
          </p>
          <div className="project-tech">
            <span>Bootstrap</span>
            <span>React Apex Charts</span>
            <span>TypeScript</span>
            <span>Axios</span>
            <span>RTK</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>On-Demand Service Application</h3>
          <p>
            On-demand service application that connects
            customers with trusted technicians, delivering fast and convenient
            repair services right at their doorstep.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Sendgrid</span>
            <span>Framer Motion</span>
            <span>React Query</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>Emergency Management Platform</h3>
          <p>
            Web platform that manages SOS alerts and
            coordinates real-time responses, connecting citizens with
            authorities to ensure faster and more effective emergency support.
          </p>
          <div className="project-tech">
            <span>Bootstrap</span>
            <span>React Apex Charts</span>
            <span>TypeScript</span>
            <span>Axios</span>
            <span>RTK</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>E-commerce Web Applicatio</h3>
          <p>
            E-commerce web application that connects
            customers with local sellers, enabling easy product browsing, secure
            purchasing, and a seamless online shopping experience.
          </p>
          <div className="project-tech">
            <span>TypeScript</span>
            <span>Bootstrap</span>
            <span>React Apex Charts</span>
            <span>Axios</span>
            <span>RTK</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          <h3>Social Media App</h3>
          <p>
            Social networking platform that helps people connect
            over shared interests, discover nearby coffee meetups, and build
            meaningful conversations in a casual community space.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Express.js</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
