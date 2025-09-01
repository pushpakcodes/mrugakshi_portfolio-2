import React from "react";
import { motion } from "framer-motion";
import { FiInstagram, FiMail, FiPhone } from "react-icons/fi";

const Header = ({ resetView }) => (
  <motion.header
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    onClick={resetView}
    className="flex justify-between items-start p-6 bg-white border-b-2 border-[#E45310] fixed w-full top-0 z-50 cursor-pointer"
  >
    <div className="pl-7 pt-4">
      <h1 className="text-3xl font-bold text-[#E45310]">
        {Array.from("Mrugakshi Nadkarni").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <p className="text-2xl font-thin text-[#E45310]">
        Design | Space | Creation | Balance
      </p>
    </div>
    <div className="flex flex-col items-center gap-4 text-orange-500 text-xl mt-1 pr-10">
      <a
        href="https://instagram.com/mrugakshi18"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a href="mailto:mrugakshi18@gmail.com">
        <FiMail />
      </a>
      <a href="tel:9820408075">
        <FiPhone />
      </a>
    </div>
  </motion.header>
);

export default Header;
