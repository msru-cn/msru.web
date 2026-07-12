import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ConnectivityGlobe } from "./connectivity-globe";

test("renders heading and canvas container", () => {
  render(
    <ConnectivityGlobe
      heading="全球工业节点"
      subtitle="实时互联"
      markers={[{ lat: 22.3, lng: 113.5, label: "珠海" }]}
    />,
  );
  expect(screen.getByRole("heading", { name: "全球工业节点" })).toBeInTheDocument();
  expect(screen.getByText("实时互联")).toBeInTheDocument();
});
