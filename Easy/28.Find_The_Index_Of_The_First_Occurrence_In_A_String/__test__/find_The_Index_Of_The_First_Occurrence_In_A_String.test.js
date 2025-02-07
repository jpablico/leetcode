import { strStr } from "../find_The_Index_Of_The_First_Occurrence_In_A_String";

describe("Find the Index of the First Occurrence in a String", () => {
  
  test("Find 'll' in 'hello' (should return 2)", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });

  test("Find 'abc' in 'abc' (should return 0)", () => {
    expect(strStr("abc", "abc")).toBe(0);
  });

  test("Find 'world' in 'hello' (should return -1)", () => {
    expect(strStr("hello", "world")).toBe(-1);
  });

  test("Find 'pi' in 'mississippi' (should return 9)", () => {
    expect(strStr("mississippi", "pi")).toBe(9);
  });

  test("Find empty string in 'hello' (should return 0)", () => {
    expect(strStr("hello", "")).toBe(0);
  });

  test("Find 'a' in 'a' (should return 0)", () => {
    expect(strStr("a", "a")).toBe(0);
  });

  test("Find 'b' in 'a' (should return -1)", () => {
    expect(strStr("a", "b")).toBe(-1);
  });

  test("Find 'aaaa' in 'aaaaa' (should return 0)", () => {
    expect(strStr("aaaaa", "aaaa")).toBe(0);
  });

  test("Find 'aaab' in 'aaaaa' (should return -1)", () => {
    expect(strStr("aaaaa", "aaab")).toBe(-1);
  });

  test("Find 'issip' in 'mississippi' (should return 4)", () => {
    expect(strStr("mississippi", "issip")).toBe(4);
  });

  test("Find 'needle' in long string with repeated patterns (should return 10)", () => {
    expect(strStr("abcabcabcaneedleabcabc", "needle")).toBe(10);
  });

});