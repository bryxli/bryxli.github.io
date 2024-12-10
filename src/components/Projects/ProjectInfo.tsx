import React from "react";
import Card from "react-bootstrap/cjs/Card.js";
import Icon from "../common/react/Icon";
import type { ProjectProps } from "../common/types";

const ProjectInfo: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  repoLink,
  liveLink,
  image,
  isSelected,
  onSelect,
}) => {
  return (
    <div style={{ paddingBottom: "1rem", margin: "auto", maxWidth: "50%" }}>
      <Card
        style={{
          width: "100%",
          cursor: "pointer",
          border: isSelected ? "3px solid #FFD700" : "3px solid #eee",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "border 0.3s ease, transform 0.3s ease",
        }}
        onClick={onSelect}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Card.Body>
          {image && (
            <Card.Img
              src={image}
              alt={`${title} thumbnail`}
              style={{
                height: "10%",
                width: "10%",
                objectFit: "cover",
              }}
            />
          )}
          <Card.Title style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            {title}
          </Card.Title>
          <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
            {description}
          </Card.Text>
          {technologies && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                paddingBottom: "0.5rem",
              }}
            >
              {technologies.map((technology) => (
                <Icon name={technology} nametag={true} key={technology} />
              ))}
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <Icon name="github" />
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <Icon name="live" />
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectInfo;
