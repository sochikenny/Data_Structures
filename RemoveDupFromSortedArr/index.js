/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


Example:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Approach:
1) initialize a variable i at the zeroth index
2) start looping with another variable, j, from the next index
 - In this loop, if the value at the ith index equal to the value at the jth index, j automatically moves because of the loop -> [nothing happens] (no need to even worry about this condition)
 -HOWEVER, if the value at the ith index is not equal to the value at the jth index, we increment i and assign it jth indes value.
3) Once this loop is done and we break out of it, we return i + 1
*/

//Solution
function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

//Time & Space Complexities: O(N) time and O(1) space where N is the number of inputs in the array
