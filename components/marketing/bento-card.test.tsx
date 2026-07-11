import { render, screen } from "@testing-library/react";
import { Cpu } from "lucide-react";
import { expect, test } from "vitest";
import { BentoCard, BentoGrid } from "./bento-card";

test("renders title, tagline, description", () => {
  render(<BentoCard icon={Cpu} accentColor="blue" title="MES 执行" tagline="生产的艺术" description="全流程追溯" />);
  expect(screen.getByText("MES 执行")).toBeInTheDocument();
  expect(screen.getByText("生产的艺术")).toBeInTheDocument();
  expect(screen.getByText("全流程追溯")).toBeInTheDocument();
});

test("wide span applies col-span classes", () => {
  const { container } = render(
    <BentoCard icon={Cpu} accentColor="fuchsia" title="AI" tagline="t" description="d" span="wide" />,
  );
  expect(container.firstChild).toHaveClass("lg:col-span-3");
});

test("BentoGrid renders children", () => {
  render(<BentoGrid><div>child</div></BentoGrid>);
  expect(screen.getByText("child")).toBeInTheDocument();
});
