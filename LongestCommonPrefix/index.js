/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Approach:
 - initialize prefix as an empty string to return at the end
 - set an edge case: if strs.length is 0 the return ''
 - loop thru the first item in the array
 - while looping thru the first item, also loop thru the remaining elements in the array
 - In this loop, compare each element of the first item to each element of the remaining items in the array
 - If an element does not equal the element in the first item, immediately return prefix.
 - Else, break out of inner loop and append the each element to the prefix
 - Break out of all loops entirely, and return the prefix
*/

//Solution
function longestCommonPrefix(strs) {
  let prefix = "";
  if (strs.length === 0) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      let item = strs[j][i];
      if (item !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
}
