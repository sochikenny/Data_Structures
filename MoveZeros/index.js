/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Approach:
 1) initialize indeces i and j as the first in the nums array
 2) create a while loop that as i is less than the nums array
    - if the value of nums[i] is not 0, we can swap(helper method) the the values at i and j, then      increment j
    - otherwise, increment i
 3) Once we are done with this loop, then we return the nums array
*/

var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      swap(nums, i, j);
      j++;
    }
    i++;
  }
  return nums;
};

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//Same solution with a REGULAR FOR LOOP
function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, i, j);
      j++;
    }
  }
  return nums;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
