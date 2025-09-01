import React from "react";
import { motion } from "framer-motion";

const ProjectTimeline = ({
  projects,
  selectedProject,
  handleProjectClick,
  isMobile,
}) => {
  // Group projects by category and sort by ID
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  // Sort projects within each category by ID
  Object.keys(groupedProjects).forEach(category => {
    groupedProjects[category].sort((a, b) => a.id - b.id);
  });

  const categories = ["Ads", "Music Video", "Long Format", "Short Films"];

  const displayNames = {
    "Ads": "Advertisement",
    "Music Video": "Music Video",
    "Long Format": "Long Format",
    "Short Films": "Short Films"
  };

  return (
    <div
      className={
        isMobile
          ? "timeline-area"
          : "relative w-[25%] ml-[40%] overflow-y-scroll hide-scrollbar bg-[#3F3124] py-0 timeline-section"
      }
    >
      {isMobile ? (
        <div className="timeline-content">
          <div className="project-timeline-heading-mobile">
            Project
            <br />
            Timeline
            <p className="text-sm mt-1 font-normal">
              Click on any project to get a preview!
            </p>
          </div>
          <div className="project-timeline-list">
            {categories.map((category) => (
              <React.Fragment key={category}>
                {groupedProjects[category] && (
                  <>
                    <div className="category-header-mobile">
                      <h2 className="text-lg font-bold text-orange-500 mb-2 text-left">
                      {displayNames[category]}
                      </h2>
                    </div>
                    {groupedProjects[category].map((project, index) => (
                      <div key={project.id} className="project-item">
                        <span
                          className={`project-number${
                            selectedProject?.id === project.id ? " selected" : ""
                          }`}
                        >
                          {String(project.id).padStart(2, "0")}
                        </span>
                        <div
                          className={`project-details${
                            selectedProject?.id === project.id ? " selected" : ""
                          }`}
                          onClick={() => handleProjectClick(project)}
                        >
                          {project.logo && (
                            <img src={project.logo} alt={`${project.title} logo`} />
                          )}
                          <h3 className="text-lg font-semibold mb-1">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="vertical-strip"></div>
          <div className="flex flex-col py-12" style={{ rowGap: "6vw" }}>
            {categories.map((category) => (
              <React.Fragment key={category}>
                {groupedProjects[category] && (
                  <>
                    <div className="category-header">
                      <h2 className="text-2xl font-bold text-orange-500 mb-4 text-left">
                      {displayNames[category]}
                      </h2>
                    </div>
                    {groupedProjects[category].map((project, index) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.02 }}
                        className="project-item cursor-pointer flex items-start"
                        onClick={() => handleProjectClick(project)}
                      >
                        <div
                          className={`project-number ${
                            selectedProject?.id === project.id ? "selected" : ""
                          }`}
                          style={{ flexShrink: 0 }}
                        >
                          {String(project.id).padStart(2, "0")}
                        </div>
                        <div
                          className={`project-details ${
                            selectedProject?.id === project.id ? "selected" : ""
                          }`}
                          style={{ marginLeft: "0.5vw" }}
                        >
                          {project.logo && (
                            <img
                              src={project.logo}
                              alt={`${project.title} logo`}
                              className="mb-1"
                            />
                          )}
                          <h3 className="text-xl font-semibold mb-1">
                            {project.title}
                          </h3>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectTimeline;
