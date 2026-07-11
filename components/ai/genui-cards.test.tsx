import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { GenUiToolPart } from "./genui-cards";

test("renders product comparison cards", () => {
  render(
    <GenUiToolPart
      type="tool-provideProductComparison"
      data={{ products: [{ slug: "mes", title: "MES 执行", tagline: "生产的艺术", accentColor: "blue" }] }}
    />,
  );
  expect(screen.getByText("MES 执行")).toBeInTheDocument();
});

test("renders pricing cards", () => {
  render(
    <GenUiToolPart
      type="tool-providePricing"
      data={{ plans: [{ name: "Pro", price: "￥999", unit: "/月", features: ["A"], href: "/pricing" }] }}
    />,
  );
  expect(screen.getByText("Pro")).toBeInTheDocument();
  expect(screen.getByText("A")).toBeInTheDocument();
});

test("returns null for unknown tool type", () => {
  const { container } = render(<GenUiToolPart type="tool-unknown" data={{}} />);
  expect(container).toBeEmptyDOMElement();
});
