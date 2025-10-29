import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span>Copyright &copy; {new Date().getFullYear()} Shoeb Shaikh</span>
      <motion.div className="social-links">
        <motion.a
          href="https://www.linkedin.com/in/shoebshaikh555"
          target="_blank"
        >
          <i className="fab fa-linkedin"> </i>
        </motion.a>
        <motion.a href="https://github.com/shoebshaikh555" target="_blank">
          <i className="fab fa-github"> </i>
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};
