import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Statement } from "./statement";

test("renders statement title and body", () => {
  render(<Statement title="每一次抽检，都将驱动流程进化。" body="不解决根因，流程永不关停。" />);
  expect(screen.getByRole("heading", { name: /每一次抽检/ })).toBeInTheDocument();
  expect(screen.getByText(/不解决根因/)).toBeInTheDocument();
});
