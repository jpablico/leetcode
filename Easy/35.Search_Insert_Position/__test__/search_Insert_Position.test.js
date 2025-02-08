import { searchInsert } from "../search_Insert_Position";

describe("Search Insert Position", () => {
  
  test("Insert position for target 5 in [1, 3, 5, 6] (should return 2)", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  test("Insert position for target 2 in [1, 3, 5, 6] (should return 1)", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  test("Insert position for target 7 in [1, 3, 5, 6] (should return 4)", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  test("Insert position for target 0 in [1, 3, 5, 6] (should return 0)", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });

  test("Insert position for target 0 in [1] (should return 0)", () => {
    expect(searchInsert([1], 0)).toBe(0);
  });

  test("Insert position for target 2 in [1] (should return 1)", () => {
    expect(searchInsert([1], 2)).toBe(1);
  });

  test("Insert position for target 3 in [] (should return 0)", () => {
    expect(searchInsert([], 3)).toBe(0);
  });

});