import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ListBlock } from "./list-block";

test("renders rows with title/meta/desc", () => {
  render(
    <ListBlock
      variant="timeline"
      items={[{ title: "v5.4.0", meta: "2026-02-15", desc: "AI 质检模型发布", tag: "Latest" }]}
    />,
  );
  expect(screen.getByText("v5.4.0")).toBeInTheDocument();
  expect(screen.getByText("2026-02-15")).toBeInTheDocument();
  expect(screen.getByText("AI 质检模型发布")).toBeInTheDocument();
  expect(screen.getByText("Latest")).toBeInTheDocument();
});
