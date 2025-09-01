import React, { useState, useEffect, useMemo } from "react"; // Add useMemo
import { motion, AnimatePresence } from "framer-motion";
import projectTimelineIcon from "./assets/images/project_timeline.svg";
import { projects, projectSpecificContent } from "./projectMedia";
import Header from "./Header";
import About from "./About";
import ProjectTimeline from "./ProjectTimeline";
import ProjectDetails from "./ProjectDetails";
import MediaModal from "./MediaModal";
import Styles from "./Styles";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mediaLoadStates, setMediaLoadStates] = useState([]);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  // Memoize mediaContent to ensure stable reference
  const mediaContent = useMemo(
    () =>
      selectedProject ? projectSpecificContent[`${selectedProject.category}_${selectedProject.id}`] || [] : [],
    [selectedProject]
  );

  useEffect(() => {
    setMediaLoadStates(new Array(mediaContent.length).fill(false));
  }, [mediaContent]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isVideoModalOpen || isImageModalOpen) {
        if (event.key === "ArrowLeft") {
          setSelectedImageIndex((prev) =>
            prev === 0 ? mediaContent.length - 1 : prev - 1
          );
        } else if (event.key === "ArrowRight") {
          setSelectedImageIndex((prev) =>
            prev === mediaContent.length - 1 ? 0 : prev + 1
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVideoModalOpen, isImageModalOpen, mediaContent.length]);

  const handleProjectClick = (project) => setSelectedProject(project);
  const resetView = () => setSelectedProject(null);
  const handleMediaLoad = (index) => {
    setMediaLoadStates((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <>
      <Styles />
      <div className="h-screen overflow-hidden font-sans text-gray-800">
        <Header resetView={resetView} />
        {isMobile ? (
          <MobileLayout
            selectedProject={selectedProject}
            resetView={resetView}
            mediaContent={mediaContent}
            mediaLoadStates={mediaLoadStates}
            handleMediaLoad={handleMediaLoad}
            setSelectedImageIndex={setSelectedImageIndex}
            setIsVideoModalOpen={setIsVideoModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            sortedProjects={sortedProjects}
            handleProjectClick={handleProjectClick}
          />
        ) : (
          <DesktopLayout
            selectedProject={selectedProject}
            resetView={resetView}
            mediaContent={mediaContent}
            mediaLoadStates={mediaLoadStates}
            handleMediaLoad={handleMediaLoad}
            setSelectedImageIndex={setSelectedImageIndex}
            setIsVideoModalOpen={setIsVideoModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            sortedProjects={sortedProjects}
            handleProjectClick={handleProjectClick}
            projectTimelineIcon={projectTimelineIcon}
          />
        )}
      </div>
      <MediaModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        mediaContent={mediaContent}
        selectedImageIndex={selectedImageIndex}
        handlePreviousMedia={() =>
          setSelectedImageIndex((prev) =>
            prev === 0 ? mediaContent.length - 1 : prev - 1
          )
        }
        handleNextMedia={() =>
          setSelectedImageIndex((prev) =>
            prev === mediaContent.length - 1 ? 0 : prev + 1
          )
        }
        isVideo={true}
      />
      <MediaModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        mediaContent={mediaContent}
        selectedImageIndex={selectedImageIndex}
        handlePreviousMedia={() =>
          setSelectedImageIndex((prev) =>
            prev === 0 ? mediaContent.length - 1 : prev - 1
          )
        }
        handleNextMedia={() =>
          setSelectedImageIndex((prev) =>
            prev === mediaContent.length - 1 ? 0 : prev + 1
          )
        }
        isVideo={false}
      />
    </>
  );
};

// MobileLayout and DesktopLayout remain unchanged
const MobileLayout = ({
  selectedProject,
  resetView,
  mediaContent,
  mediaLoadStates,
  handleMediaLoad,
  setSelectedImageIndex,
  setIsVideoModalOpen,
  setIsImageModalOpen,
  sortedProjects,
  handleProjectClick,
}) => (
  <div className="content-container">
    <div className="main-mobile-layout">
      <div className="about-row">
        <AnimatePresence initial={false} mode="wait">
          {selectedProject ? (
            <ProjectDetails
              project={selectedProject}
              resetView={resetView}
              mediaContent={mediaContent}
              mediaLoadStates={mediaLoadStates}
              handleMediaLoad={handleMediaLoad}
              setSelectedImageIndex={setSelectedImageIndex}
              setIsVideoModalOpen={setIsVideoModalOpen}
              setIsImageModalOpen={setIsImageModalOpen}
            />
          ) : (
            <About />
          )}
        </AnimatePresence>
      </div>
      <ProjectTimeline
        projects={sortedProjects}
        selectedProject={selectedProject}
        handleProjectClick={handleProjectClick}
        isMobile={true}
      />
    </div>
  </div>
);

const DesktopLayout = ({
  selectedProject,
  resetView,
  mediaContent,
  mediaLoadStates,
  handleMediaLoad,
  setSelectedImageIndex,
  setIsVideoModalOpen,
  setIsImageModalOpen,
  sortedProjects,
  handleProjectClick,
  projectTimelineIcon,
}) => (
  <div className="flex pt-[12vh] h-full bg-[#3F3124]">
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-[40%] bg-white p-[2vh] fixed top-[12vh] bottom-0 flex items-center justify-center text-center overflow-hidden hide-scrollbar pt-[6vh]"
    >
      <AnimatePresence initial={false} mode="wait">
        {selectedProject ? (
          <ProjectDetails
            project={selectedProject}
            resetView={resetView}
            mediaContent={mediaContent}
            mediaLoadStates={mediaLoadStates}
            handleMediaLoad={handleMediaLoad}
            setSelectedImageIndex={setSelectedImageIndex}
            setIsVideoModalOpen={setIsVideoModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
          />
        ) : (
          <About />
        )}
      </AnimatePresence>
    </motion.section>
    <ProjectTimeline
      projects={sortedProjects}
      selectedProject={selectedProject}
      handleProjectClick={handleProjectClick}
      isMobile={false}
    />
    <motion.section
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="w-[35%] fixed right-[5vw] top-[0px] bottom-0 text-white px-6 py-0 relative"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="project-timeline-heading text-center">
          Project
          <br />
          Timeline
          <p className="text-sm text-white mt-[1vh] font-normal px-[0.5vw]">
            Click on any project to get a preview!
          </p>
        </div>
        <img
          src={projectTimelineIcon}
          alt="Project Timeline Icon"
          className="pb-35 ml-75 w-300 h-300 opacity-10"
        />
      </div>
    </motion.section>
  </div>
);

export default App;
