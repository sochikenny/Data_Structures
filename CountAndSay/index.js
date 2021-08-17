/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251"

Example:
 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211


 Approach:
 1) Base case--> if n is 1, return 1
 2) Put countAndSay(n - 1) inside a variable called prev
 3) initialize an empty string called result and count to 1
 4) Loop thru prev
- In this loop, if prev[i] is not equal to prev[i+1] or i gets to the last element of the loop,
we can append count to it along with prev[i]. We then set count back to 1
- Otherwise, if prev[i] is the same as the next, prev[i + 1], we can add count and continue the loop until we hit a case like what the one before
5) Once we are done with the loop, we can finally return result
*/

//Solution
function countAndSay(n) {
  if (n === 1) {
    return "1";
  }
  let prev = countAndSay(n - 1);
  let result = "",
    count = 1;

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== prev[i + 1] || i === prev.length - 1) {
      result += count.toString() + prev[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  return result;
}
