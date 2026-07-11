import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { resetLedger } from "./component-ledger";
import { makeUnknownTagFallback } from "./unknown-tag-fallback";

describe("makeUnknownTagFallback (未知标签降级)", () => {
  beforeEach(() => resetLedger());

  test("透传 children：有子内容时渲染子内容（真文档不被藏起）", () => {
    const Fallback = makeUnknownTagFallback("AppOnly", { sourceId: "nextjs", slug: "x" });
    render(<Fallback>这里是真文档正文</Fallback>);
    expect(screen.getByText("这里是真文档正文")).toBeInTheDocument();
  });

  test("代码化：无 children 时退到标签占位展示（最后一档）", () => {
    const Fallback = makeUnknownTagFallback("CustomChart", { sourceId: "nextjs", slug: "x" });
    const { container } = render(<Fallback />);
    expect(container.textContent).toContain("CustomChart");
  });
});
