import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { DataTable } from "./data-table";

const columns = [
  { key: "cert", header: "认证/标准" },
  { key: "scope", header: "区域" },
  { key: "status", header: "状态" },
];

const rows = [
  { cert: "ISO 27001:2022", scope: "全球", status: "已认证" },
  { cert: "SOC 2 Type II", scope: "全球", status: "已认证" },
];

test("renders headers and rows", () => {
  render(<DataTable columns={columns} rows={rows} rowKey="cert" />);
  expect(screen.getByText("认证/标准")).toBeInTheDocument();
  expect(screen.getByText("ISO 27001:2022")).toBeInTheDocument();
  expect(screen.getByText("SOC 2 Type II")).toBeInTheDocument();
});

test("renders one row per data item plus header row", () => {
  render(<DataTable columns={columns} rows={rows} rowKey="cert" />);
  // header row + 2 data rows
  expect(screen.getAllByRole("row")).toHaveLength(3);
  expect(screen.getAllByRole("columnheader")).toHaveLength(3);
});
