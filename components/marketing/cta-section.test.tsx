import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { CTASection } from "./cta-section";

test("renders title and primary cta", () => {
  render(<CTASection title="准备好了吗" description="聊聊" primaryCta={{ label: "预约", href: "/contact" }} />);
  expect(screen.getByText("准备好了吗")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "预约" })).toHaveAttribute("href", "/contact");
});
