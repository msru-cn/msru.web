import { render, screen } from "@testing-library/react";
import { Sparkles } from "lucide-react";
import { expect, test } from "vitest";
import { Hero } from "./hero";

test("renders title, description, primary cta", () => {
  render(
    <Hero
      title="让工厂心跳"
      titleAccent="精准到秒。"
      accentColor="blue"
      description="颠覆传统的制造执行系统"
      primaryCta={{ label: "获取报价", href: "/contact" }}
    />,
  );
  expect(screen.getByText("让工厂心跳")).toBeInTheDocument();
  expect(screen.getByText("精准到秒。")).toBeInTheDocument();
  const cta = screen.getByRole("link", { name: "获取报价" });
  expect(cta).toHaveAttribute("href", "/contact");
});

test("renders badge when provided", () => {
  render(
    <Hero badge={{ icon: Sparkles, text: "MES 5.0" }} title="t" description="d" primaryCta={{ label: "c", href: "/x" }} />,
  );
  expect(screen.getByText("MES 5.0")).toBeInTheDocument();
});
