import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Options from "./Options";

describe("components/Options.tsx", () => {
  it("cycles through color options on click", () => {
    render(<Options initialColor="blue" />);
    const button = screen.getByTestId("options");
    expect(button.style.getPropertyValue("color")).toBe("");

    fireEvent.click(button);
    expect(["", "red", "orange", "yellow"]).not.contains(
      button.style.getPropertyValue("color"),
    );
    fireEvent.click(button);
    expect(button.style.getPropertyValue("color")).toBe("red");
    fireEvent.click(button);
    expect(button.style.getPropertyValue("color")).toBe("orange");
    fireEvent.click(button);
    expect(button.style.getPropertyValue("color")).toBe("yellow");
    fireEvent.click(button);
    expect(button.style.getPropertyValue("color")).toBe("");
  });
});
