/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/

/*
Approach #1:
 1) sort thru nums1 and nums 2
 2) initialize an empty array and indeces i and j to 0
 3) create a while loop for both nums1 and nums2 
 4) if this loop, if the value of num1 and num2 are equal, we push onto the result array and increment both indeces
 5) else if the value of num1 is less than num2's value then we increment the i index 
 6) else, if the value of num2 is less than num1's value then we increment the j index 
 7) After everything, we can break out of the loop and return the result
*/

//Solution
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let result = [];

  let i = 0,j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

/*
Approach #2:
1) initialize an object(hash map) and a result array
2) use the nums1 array to construct the obj:
  i) loop thru nums1. if the value at an index of nums1 array has a value in obj, then increment. if       not, set it to one. ---> this is how the obj is constructed using the first input array
3) loop thru the second array(nums2). if the value at the index of nums2 has a value in the obj greater than zero, then we decrement.
4) Then we push than value from the nums2 array into the result. 
5) Once we are done, we return the result
*/

//Solution
function intersect(nums1, nums2){
    let obj = {}, result = []

    for (let num of nums1){
        obj[num] ? obj[num] += 1 : obj[num] = 1
    }

    for(let i = 0; i < nums2.length; i++){
        if(obj[nums2[i]] > 0){
            obj[nums2[i]]--
            result.push(nums2[i])
        }
    }
    return result
}
