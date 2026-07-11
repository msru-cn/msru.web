import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { LogoWall } from "./logo-wall";

test("renders logo names", () => {
  render(<LogoWall items={[{ name: "宁德时代" }, { name: "比亚迪" }]} />);
  expect(screen.getByText("宁德时代")).toBeInTheDocument();
  expect(screen.getByText("比亚迪")).toBeInTheDocument();
});
