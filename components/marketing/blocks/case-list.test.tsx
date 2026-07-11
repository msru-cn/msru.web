import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { CaseList } from "./case-list";

test("renders a case card", () => {
  render(
    <CaseList
      cases={[{ company: "某电池集团", industry: "新能源", result: "OEE +22%", quote: "三个月回本", image: "https://x/y.jpg" }]}
    />,
  );
  expect(screen.getByRole("heading", { name: "某电池集团" })).toBeInTheDocument();
  expect(screen.getByText("新能源")).toBeInTheDocument();
  expect(screen.getByText("OEE +22%")).toBeInTheDocument();
  expect(screen.getByText(/三个月回本/)).toBeInTheDocument();
});
