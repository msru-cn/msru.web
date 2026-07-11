import { render, screen } from "@testing-library/react";
import { Shield } from "lucide-react";
import { expect, test } from "vitest";
import { SubPageHero } from "./sub-page-template";

test("renders dark hero with badge, title, subtitle", () => {
  render(
    <SubPageHero
      badge={{ icon: Shield, text: "Multi-Tenant Security" }}
      title="多租户安全架构"
      subtitle="物理级数据隔离、零信任网络与端到端加密。"
      accentColor="purple"
    />,
  );
  expect(screen.getByRole("heading", { level: 1, name: "多租户安全架构" })).toBeInTheDocument();
  expect(screen.getByText("Multi-Tenant Security")).toBeInTheDocument();
  expect(screen.getByText(/物理级数据隔离/)).toBeInTheDocument();
});

test("renders without badge", () => {
  render(<SubPageHero title="全球合规矩阵" subtitle="覆盖全球主要监管区域。" />);
  expect(screen.getByRole("heading", { level: 1, name: "全球合规矩阵" })).toBeInTheDocument();
});
