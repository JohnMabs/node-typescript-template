import { foo } from "#utils.js";
import { expect, test } from "vitest";

test("foo is 42", () => {
  expect(foo).toBe(42);
});
