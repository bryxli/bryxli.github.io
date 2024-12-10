import { render, fireEvent, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import Summary from "./Content.vue";

describe("SummaryContent.vue", () => {
  it("renders content", () => {
    render(Summary);
    expect(screen.getByAltText("portrait")).toBeDefined();
    expect(screen.getByText(/Hey there! I'm Bryan/i)).toBeDefined();
  });

  it("increments 'y' text when clicked and yCount is less than 13", async () => {
    render(Summary);
    const y = screen.getByTestId("y");
    expect(y.textContent).toBe("y");

    await fireEvent.click(y);
    expect(y.textContent).toBe("yy");
  });

  //   it("renders class 'success' when yValue is true and yCount is greater than 12", () => {

  //   });

  //   it("renders class 'falling-y' when yValue is false and yCount is greater than 12", () => {

  //   });
});
