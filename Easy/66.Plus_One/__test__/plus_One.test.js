import { plusOne } from "../plus_One";

describe("Plus One Function", () => {

  test("Incrementing a normal number [1,2,3] should return [1,2,4]", () => {
    expect(plusOne([1,2,3])).toEqual([1,2,4]);
  });

  test("Incrementing a number with carry-over [1,2,9] should return [1,3,0]", () => {
    expect(plusOne([1,2,9])).toEqual([1,3,0]);
  });

  test("Incrementing a number that turns into a new digit [9] should return [1,0]", () => {
    expect(plusOne([9])).toEqual([1,0]);
  });

  test("Incrementing a large number with multiple 9s [9,9,9] should return [1,0,0,0]", () => {
    expect(plusOne([9,9,9])).toEqual([1,0,0,0]);
  });

  test("Incrementing a number with zeros in between [1,0,9] should return [1,1,0]", () => {
    expect(plusOne([1,0,9])).toEqual([1,1,0]);
  });

  test("Incrementing [4,3,2,1] should return [4,3,2,2]", () => {
    expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
  });

  test("Incrementing [0] should return [1]", () => {
    expect(plusOne([0])).toEqual([1]);
  });

  test("Incrementing [2,9,9] should return [3,0,0]", () => {
    expect(plusOne([2,9,9])).toEqual([3,0,0]);
  });

  test("Incrementing [5,6,7] should return [5,6,8]", () => {
    expect(plusOne([5,6,7])).toEqual([5,6,8]);
  });

});