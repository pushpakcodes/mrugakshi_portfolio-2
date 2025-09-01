import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const About = () => (
  <motion.div
    key="about"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.5 }}
    className="about-text"
  >
    <h2 className="about-title">Hi! A little about myself,</h2>
    <p className="about-description">
      Based in the heart of architectural wonders, Having an extensive
      knowledge and education in architecture I dedicate my passion to crafting
      stories through the attention to spatial detail and understanding of the
      character narrative. From concept to completion, I'd like to say I drive
      the visual identity of design and space creation. With a combination of
      problem-solving balance, technical expertise and artistic vision I achieve
      to bring to the table a unique and captivating visual design stratum.
    </p>
    <div className="contact-info ml-8 font-semibold">
      <a
        href="https://instagram.com/mrugakshi18"
        className="contact-item hover:text-orange-500 transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram /> mrugakshi18
      </a>
      <a
        href="mailto:mrugakshi18@gmail.com"
        className="contact-item hover:text-orange-500 transition-colors"
      >
        <FiMail /> mrugakshi18@gmail.com
      </a>
      <a
        href="tel:9820408075"
        className="contact-item hover:text-orange-500 transition-colors"
      >
        <FiPhone /> 9820408075
      </a>
    </div>
  </motion.div>
);

export default About;
