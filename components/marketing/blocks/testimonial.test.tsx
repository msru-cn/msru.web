import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Testimonial } from "./testimonial";

test("renders quote and author", () => {
  render(<Testimonial quote="MSRU 让我们告别 Excel 排程。" author="张工" role="制造总监" />);
  expect(screen.getByText(/告别 Excel 排程/)).toBeInTheDocument();
  expect(screen.getByText("张工")).toBeInTheDocument();
  expect(screen.getByText("制造总监")).toBeInTheDocument();
});
