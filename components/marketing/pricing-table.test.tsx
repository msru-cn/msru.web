import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { PricingTable } from "./pricing-table";
import type { PricingPlan } from "./pricing-table";

const plans: PricingPlan[] = [
  { name: "Starter", price: "¥9,800", unit: "/月/站点", description: "快速起步", features: ["MES 基础模块", "最多 50 用户"], cta: { label: "开始试用", href: "/contact" } },
  { name: "Enterprise", price: "¥39,800", unit: "/月/站点", description: "全面部署", popular: true, features: ["全模块", "不限用户数"], cta: { label: "开始试用", href: "/contact" } },
];

test("renders each plan name, price and features", () => {
  render(<PricingTable plans={plans} />);
  expect(screen.getByText("Starter")).toBeInTheDocument();
  expect(screen.getByText("Enterprise")).toBeInTheDocument();
  expect(screen.getByText("¥39,800")).toBeInTheDocument();
  expect(screen.getByText("最多 50 用户")).toBeInTheDocument();
});

test("marks the popular plan with a badge", () => {
  render(<PricingTable plans={plans} />);
  expect(screen.getByText("最受欢迎")).toBeInTheDocument();
});

test("renders a cta link per plan", () => {
  render(<PricingTable plans={plans} />);
  const links = screen.getAllByRole("link", { name: "开始试用" });
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAttribute("href", "/contact");
});
