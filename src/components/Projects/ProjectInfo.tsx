import React from "react";
import Card from "react-bootstrap/Card";
import type { ProjectProps } from "./types";

const ProjectInfo: React.FC<ProjectProps> = ({
  title,
  text,
  isSelected,
  onSelect,
}) => {
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <Card
        style={{
          width: "100%",
          border: isSelected ? "3px solid yellow" : "3px solid white",
          cursor: "pointer",
          transition: "border 0.3s ease",
        }}
        onClick={onSelect}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectInfo;
