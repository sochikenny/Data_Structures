/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example:
Input: digit = [1,2,9]
Output: [1,3,0]

Example:
Input: digit = [9,9,9]
Output: [1,0,0,0]

Approach:
1) loop thru the digits array from the last element to the first
 - if a digit is 9, update it to 0 
 - Otherwise, add 1 to digit and immedidiately return the digits array
2) Once, the loop is done and over with (pertaining to if we hit a case where the digit is 9), 
we can add 1 onto the front of the array
*/

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
  return [1, ...digits];
}
