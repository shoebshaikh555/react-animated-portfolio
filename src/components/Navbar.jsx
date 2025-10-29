import { useState } from "react";
import { motion } from "framer-motion";

const sidebarVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </motion.div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shoebshaikh555" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/shoebshaikh555" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>

      {/* Hamburger Button */}
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.ul
          className="mobile-sidebar"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={fadeInUp}>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </motion.li>
          <motion.li variants={fadeInUp}>
            <div className="mobile-sidebar-social-links">
              <a
                href="https://www.linkedin.com/in/shoebshaikh555"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/shoebshaikh555" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </motion.li>
        </motion.ul>
      )}
    </motion.nav>
  );
};
