import { render, screen } from "@testing-library/react";
import { BarChart } from "lucide-react";
import { expect, test } from "vitest";
import { FeatureList } from "./feature-list";

test("renders each feature item", () => {
  render(<FeatureList items={[{ icon: BarChart, title: "咨询", description: "战略蓝图" }]} />);
  expect(screen.getByText("咨询")).toBeInTheDocument();
  expect(screen.getByText("战略蓝图")).toBeInTheDocument();
});
