import { selector, y } from "./optionsStore";
import { describe, it, expect } from "vitest";

describe("store/optionsStore.ts", () => {
  it("initializes selector with 0", () => {
    expect(selector.get()).toBe(0);
  });

  it("initializes y with false", () => {
    expect(y.get()).toBe(false);
  });
});
