import { longestCommonPrefix } from "../longestCommonPrefix";

let strs = ["flower", "flow", "flight"];

test("Longest common prefix of ['flower', 'flow', 'flight'] should return 'fl'", () => {
  expect(longestCommonPrefix(strs)).toBe("fl");
});

test("No common prefix in ['dog', 'racecar', 'car']", () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});

test("Longest common prefix of ['interspecies', 'interstellar', 'interstate'] should return 'inters'", () => {
  expect(longestCommonPrefix(["interspecies", "interstellar", "interstate"])).toBe("inters");
});

test("Single word in array should return the word itself", () => {
  expect(longestCommonPrefix(["single"])).toBe("single");
});

test("An empty array should return an empty string", () => {
  expect(longestCommonPrefix([])).toBe("");
});

test("Prefix should return 'a' when all strings start with 'a'", () => {
  expect(longestCommonPrefix(["ab", "a"])).toBe("a");
});