import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { StatBlock } from "./stat-block";

test("renders heading and all stats", () => {
  render(<StatBlock heading="真实增效" accentColor="blue" stats={[
    { value: "30", unit: "%", label: "产能提升" },
    { value: "99.9", unit: "%", label: "可用性" },
  ]} />);
  expect(screen.getByText("真实增效")).toBeInTheDocument();
  expect(screen.getByText("产能提升")).toBeInTheDocument();
  expect(screen.getByText("可用性")).toBeInTheDocument();
});
