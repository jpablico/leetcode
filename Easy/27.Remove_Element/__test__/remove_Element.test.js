import { removeElement } from "../remove_Element";

test("removes elements from [3,2,2,3] with value 3", () => {
  let nums = [3, 2, 2, 3];
  let val = 3;
  let k = removeElement(nums, val);
  expect(k).toBe(2);
  expect(nums.slice(0, k)).toEqual([2, 2]);
});