import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Icon from "./Icon";

const iconName = "live";

describe("components/common/react/Icon.tsx", () => {
  it("renders the correct icon", () => {
    render(<Icon name={iconName} />);
    const iconElement = screen.getByTestId(`icon-${iconName}`);
    expect(iconElement).toBeDefined();
  });

  it("renders the nametag when enabled", () => {
    render(<Icon name={iconName} nametag />);
    expect(screen.getByText(`${iconName}`)).toBeDefined();
  });

  it("renders nothing when an unknown icon is used", () => {
    const { container } = render(<Icon name="foo" />);
    expect(container.firstChild).toMatchInlineSnapshot(`<div />`);
  });
});
