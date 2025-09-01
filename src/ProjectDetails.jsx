import React from "react";
import { motion } from "framer-motion";
import { BsPlayCircle } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";

const ProjectDetails = ({
  project,
  resetView,
  mediaContent,
  mediaLoadStates,
  handleMediaLoad,
  setSelectedImageIndex,
  setIsVideoModalOpen,
  setIsImageModalOpen,
}) => (
  <motion.div
    key="project"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5 }}
    className="w-full h-full overflow-y-scroll hide-scrollbar p-4"
  >
    <div className="mb-6 mt-6 text-left">
      <div className="flex items-center gap-4">
        <button
          onClick={resetView}
          className="bg-[#E45310] text-white rounded-full p-2 hover:bg-[#e44d00] transition-colors"
        >
          <FaChevronLeft size={20} />
        </button>
        <h2 className="text-[#E45310] text-2xl font-bold">{project.title}</h2>
      </div>
      {/* <p className="text-[#E45310] text-md mb-4 mt-2">{project.details}</p> */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700 font-poppins mt-4">
        {project.productionHouse && (
          <div className="flex">
            <span className="font-semibold">Production House</span>
            <span>| {project.productionHouse}</span>
          </div>
        )}
        {project.year && (
          <div className="flex">
            <span className="font-semibold">Year</span>
            <span>| {project.year}</span>
          </div>
        )}
        {project.director && (
          <div className="flex">
            <span className="font-semibold">Director</span>
            <span>| {project.director}</span>
          </div>
        )}
        {project.Cinematographer && (
          <div className="flex">
            <span className="font-semibold">Cinematographer</span>
            <span>| {project.Cinematographer}</span>
          </div>
        )}
        {project.productionDesigner && (
          <div className="flex">
            <span className="font-semibold">Production Designer</span>
            <span>| {project.productionDesigner}</span>
          </div>
        )}
        {project.designation && (
          <div className="flex">
            <span className="font-semibold">Designation</span>
            <span>| {project.designation}</span>
          </div>
        )}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {mediaContent.map((media, index) => (
        <motion.div
          key={index}
          className={`relative w-full ${
            media.span ? "col-span-2 aspect-video mb-4" : "h-[25vh]"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {!mediaLoadStates[index] && (
            <div className="absolute inset-0 z-10 w-full h-full rounded-lg skeleton" />
          )}
          {media.type === "video" ? (
            <div className="relative w-full h-full">
              {!mediaLoadStates[index] && (
                <div className="absolute inset-0 rounded-lg skeleton z-10" />
              )}
              <video
                src={media.src}
                className={`w-full h-full rounded-lg shadow-lg object-cover transition-opacity duration-300 ${
                  mediaLoadStates[index] ? "opacity-100" : "opacity-0"
                }`}
                onLoadedData={() => handleMediaLoad(index)}
                muted
                loop
              />
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-20"
                onClick={() => {
                  setSelectedImageIndex(index);
                  setIsVideoModalOpen(true);
                  setIsImageModalOpen(false);
                }}
              >
                <BsPlayCircle className="text-white text-6xl hover:text-orange-500 transition-colors" />
              </div>
            </div>
          ) : (
            <img
              src={media.src}
              alt={`Media ${index}`}
              className={`w-full h-full rounded-lg shadow-lg object-cover cursor-pointer transition-opacity duration-300 ${
                mediaLoadStates[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleMediaLoad(index)}
              onClick={() => {
                setSelectedImageIndex(index);
                setIsImageModalOpen(true);
                setIsVideoModalOpen(false);
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default ProjectDetails;
