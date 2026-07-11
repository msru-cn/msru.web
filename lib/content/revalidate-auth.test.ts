import { expect, test } from "vitest";
import { isAuthorized } from "./revalidate-auth";

function reqWith(secret: string) {
  return new Request("http://x/api/revalidate", { headers: { "x-revalidate-secret": secret } });
}

test("authorizes matching secret", () => {
  expect(isAuthorized(reqWith("s3cr3t"), "s3cr3t")).toBe(true);
});

test("rejects mismatched or missing secret", () => {
  expect(isAuthorized(reqWith("wrong"), "s3cr3t")).toBe(false);
  expect(isAuthorized(new Request("http://x"), "s3cr3t")).toBe(false);
});

test("rejects when server secret unset", () => {
  expect(isAuthorized(reqWith("anything"), undefined)).toBe(false);
});
