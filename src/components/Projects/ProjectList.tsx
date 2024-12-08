import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import type { ProjectListProps, ProjectProps } from "./types";

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [currentlySelected, setCurrentlySelected] =
    useState<ProjectProps | null>(null);

  const handleSelect = (project: ProjectProps) => {
    setCurrentlySelected(project);
  };

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectInfo
          key={index}
          title={project.title}
          text={project.text}
          isSelected={currentlySelected === project}
          onSelect={() => handleSelect(project)}
        />
      ))}
    </div>
  );
};

export default ProjectList;
