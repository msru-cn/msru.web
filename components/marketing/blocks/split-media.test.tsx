import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { SplitMedia } from "./split-media";

test("renders title, body, image and bullets", () => {
  render(
    <SplitMedia
      image="https://x/y.jpg"
      side="right"
      title="电芯追溯"
      body="全链路数字化"
      bullets={["极片质检", "循环寿命建模"]}
    />,
  );
  expect(screen.getByRole("heading", { name: "电芯追溯" })).toBeInTheDocument();
  expect(screen.getByText("极片质检")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("alt", "电芯追溯");
});
