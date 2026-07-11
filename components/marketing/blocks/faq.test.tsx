import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Faq } from "./faq";

test("renders question and answer", () => {
  render(<Faq items={[{ q: "支持私有化部署吗？", a: "支持云端与本地部署。" }]} />);
  expect(screen.getByText("支持私有化部署吗？")).toBeInTheDocument();
  expect(screen.getByText("支持云端与本地部署。")).toBeInTheDocument();
});
