import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MediaModal = ({
  isOpen,
  onClose,
  mediaContent,
  selectedImageIndex,
  handlePreviousMedia,
  handleNextMedia,
  isVideo,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-[#1A0D00] opacity-90"
          onClick={onClose}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-[80vw] max-w-4xl z-10"
        >
          <button
            className="absolute -top-[5vh] right-0 text-white text-2xl hover:text-orange-500 transition-colors"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
          <button className="nav-button left" onClick={handlePreviousMedia}>
            <FaChevronLeft />
          </button>
          <button className="nav-button right" onClick={handleNextMedia}>
            <FaChevronRight />
          </button>
          {mediaContent[selectedImageIndex].type === "video" ? (
            <video
              src={mediaContent[selectedImageIndex].src}
              className="w-full rounded-lg shadow-lg max-h-full object-contain"
              autoPlay
              controls
            />
          ) : (
            <img
              src={mediaContent[selectedImageIndex].src}
              alt={`Media ${selectedImageIndex}`}
              className="w-full rounded-lg shadow-lg max-h-full object-contain"
            />
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MediaModal;
