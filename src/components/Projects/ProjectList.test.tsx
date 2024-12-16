import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectList from "./ProjectList";
import projects from "../../data/projects.json";

describe("components/Projects/ProjectList.tsx", () => {
  it("renders empty project list", () => {
    render(<ProjectList projects={[]} />);
  });

  it("renders project list when projects are provided", () => {
    render(<ProjectList projects={projects} />);
    expect(screen.getByText("zoe-bot")).toBeDefined();
  });
});
