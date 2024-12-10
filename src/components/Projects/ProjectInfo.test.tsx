import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import ProjectInfo from "./ProjectInfo";
import type { ProjectProps } from "../common/types";

describe("components/Projects/ProjectInfo.tsx", () => {
  const project: ProjectProps = {
    title: "Foo",
    description: "Bar",
  };

  it("renders the project title and description", () => {
    render(<ProjectInfo {...project} />);
    expect(screen.getByText(project.title)).toBeDefined();
    expect(screen.getByText(project.description)).toBeDefined();
  });

  it("renders the project image if provided", () => {
    render(<ProjectInfo {...project} image="/projects/foobar.svg" />);
    const img = screen.getByAltText(`${project.title} thumbnail`);
    expect(img).toBeDefined();
  });

  it("renders technology icons when technologies are provided", () => {
    render(<ProjectInfo {...project} technologies={["foo", "bar"]} />);
    project.technologies?.forEach((tech) => {
      expect(screen.getByText(tech)).toBeDefined();
    });
  });

  it("renders repo and live links when provided", () => {
    const repo = "https://github.com/bryxli/foobar";
    const live = "https://foobar.live";

    render(<ProjectInfo {...project} repoLink={repo} liveLink={live} />);
    const repoLink = screen.getByRole("link", { name: /github/i });
    const liveLink = screen.getByRole("link", { name: /live/i });

    expect(repoLink.getAttribute("href")).toBe(
      "https://github.com/bryxli/foobar",
    );
    expect(liveLink.getAttribute("href")).toBe("https://foobar.live");
  });

  it("calls onSelect when the card is clicked", () => {
    const onSelect = vi.fn();
    render(<ProjectInfo {...project} onSelect={onSelect} />);
    const card = screen.getByText(project.title);

    fireEvent.click(card);
    expect(onSelect).toHaveBeenCalled();
  });

  // it("applies the selected border style when isSelected is true", () => {

  // });

  // it("applies the default border style when isSelected is false", () => {

  // });
});
