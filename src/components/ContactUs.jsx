import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const ContactUs = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Let&apos;s build something <span className="quote-text">great</span>{" "}
        together!
      </motion.h2>
      <motion.p className="contact-subtitle" variants={fadeInUp}>
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals.
      </motion.p>
      <motion.div className="submit-btn-container" variants={fadeInUp}>
        <a href="mailto:shoebshaikh555@gmail.com">
          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lets get in touch
            <i
              className="fa fa-paper-plane paper-plane-icon"
              aria-hidden="true"
            ></i>
          </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
};
