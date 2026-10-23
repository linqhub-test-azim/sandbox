import { test } from "node:test";
import assert from "node:assert/strict";
import { add, multiply } from "./math.js";

test("adds two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("multiplies two numbers", () => {
  assert.equal(multiply(2, 3), 6);
  assert.equal(multiply(-4, 5), -20);
  assert.equal(multiply(7, 0), 0);
});
