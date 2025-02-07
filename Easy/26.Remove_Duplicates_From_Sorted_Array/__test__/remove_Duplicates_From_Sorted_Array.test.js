import { removeDuplicates } from '../remove_Duplicates_From_Sorted_Array';

describe('removeDuplicates', () => {
  test('removes duplicates from [1,1,2]', () => {
    let nums = [1, 1, 2];
    let k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  test('removes duplicates from [0,0,1,1,1,2,2,3,3,4]', () => {
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  test('handles already unique array [1,2,3,4,5]', () => {
    let nums = [1, 2, 3, 4, 5];
    let k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles array with all identical elements [1,1,1,1,1]', () => {
    let nums = [1, 1, 1, 1, 1];
    let k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test('handles empty array []', () => {
    let nums = [];
    let k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });

  test('removes duplicates from [1,1,2,2,3,3,4,4,5,5]', () => {
    let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    let k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });
});