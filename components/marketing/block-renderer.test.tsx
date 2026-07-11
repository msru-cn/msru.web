import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BlockRenderer } from "./block-renderer";

test("renders hero + statBand from data", () => {
  render(
    <BlockRenderer
      blocks={[
        { type: "hero", title: "工业底座", variant: "dark" },
        { type: "statBand", heading: "规模", stats: [{ value: "99", unit: "%", label: "可用性" }] },
      ]}
    />,
  );
  expect(screen.getByRole("heading", { level: 1, name: "工业底座" })).toBeInTheDocument();
  expect(screen.getByText("可用性")).toBeInTheDocument();
});
