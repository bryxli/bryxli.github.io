import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import type { ProjectListProps, ProjectProps } from "../common/types";

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [currentlySelected, setCurrentlySelected] =
    useState<ProjectProps | null>(null);

  const handleSelect = (project: ProjectProps) => {
    currentlySelected === project
      ? setCurrentlySelected(null)
      : setCurrentlySelected(project);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectInfo
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          repoLink={project.repoLink}
          liveLink={project.liveLink}
          image={project.image}
          isSelected={currentlySelected === project}
          onSelect={() => handleSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
