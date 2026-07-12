import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { AnimatedBeams } from "./animated-beams";

test("renders node labels and heading", () => {
  render(
    <AnimatedBeams
      heading="架构数据流"
      nodes={[
        { icon: "Network", label: "IoT 采集" },
        { icon: "Cpu", label: "MES" },
      ]}
      edges={[{ from: 0, to: 1 }]}
    />,
  );
  expect(screen.getByRole("heading", { name: "架构数据流" })).toBeInTheDocument();
  expect(screen.getByText("IoT 采集")).toBeInTheDocument();
  expect(screen.getByText("MES")).toBeInTheDocument();
});
