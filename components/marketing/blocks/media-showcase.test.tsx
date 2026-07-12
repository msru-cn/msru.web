import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MediaShowcase } from "./media-showcase";

test("renders media with title and caption", () => {
  render(<MediaShowcase media="https://x/y.jpg" title="全域数字孪生" caption="WebGPU 实时渲染" />);
  expect(screen.getByRole("heading", { name: "全域数字孪生" })).toBeInTheDocument();
  expect(screen.getByText("WebGPU 实时渲染")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "全域数字孪生");
});
