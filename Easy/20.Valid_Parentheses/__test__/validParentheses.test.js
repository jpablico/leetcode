import { isValid } from "../validParentheses";

test("Input s = '()'", () => {
  expect(isValid("()")).toBe(true);
});

test("Valid case: ()[]{}", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("Invalid case: (]", () => {
  expect(isValid("(]")).toBe(false);
});

test("Valid case: ([]) (nested brackets)", () => {
  expect(isValid("([])")).toBe(true);
});