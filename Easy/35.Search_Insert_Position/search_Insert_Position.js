/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export var searchInsert = function(nums, target) {
  for(let j = 0; j < nums.length; j++) {
      if(nums[j] === target) {
          return j;
      } else if (nums[j] > target) {
          return j;
      }
  }
  return nums.length;
};