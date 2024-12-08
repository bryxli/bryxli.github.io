import React from "react";
import Card from "react-bootstrap/cjs/Card.js";
import Icon from "./Icon";
import type { ProjectProps } from "./types";

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
                flexDirection: "row",
                justifyContent: "center",
                paddingBottom: "0.5rem",
              }}
            >
              {technologies.map((technology) => {
                return (
                  <div style={{ paddingRight: "1em" }} key={technology}>
                    <Icon name={technology} />
                  </div>
                );
              })}
            </div>
          )}
          {repoLink && (
            <div>
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          )}
          {liveLink && (
            <div>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectInfo;
