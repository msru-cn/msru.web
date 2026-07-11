import { render, screen } from "@testing-library/react";
import { Shield } from "lucide-react";
import { expect, test } from "vitest";
import { LegalDoc } from "./legal-doc";

test("renders legal doc hero with title, meta and prose children", () => {
  render(
    <LegalDoc icon={Shield} title="隐私策略" meta="最后更新：2026 年 1 月 1 日">
      <h2>1. 数据控制者</h2>
      <p>MSRU Inc. 是您个人数据的控制者。</p>
    </LegalDoc>,
  );
  expect(screen.getByRole("heading", { level: 1, name: "隐私策略" })).toBeInTheDocument();
  expect(screen.getByText("最后更新：2026 年 1 月 1 日")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 2, name: "1. 数据控制者" })).toBeInTheDocument();
  expect(screen.getByText(/您个人数据的控制者/)).toBeInTheDocument();
});
