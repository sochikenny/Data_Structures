/*Question:
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example:
Input: s = "III"
Output: 3

Example:
Input: s = "IV"
Output: 4

Example:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

//Solution
/*
 Approach:
 1) Create a cache to store all the Roman numeral and their values 
 2) Initialize result to 0
 3) Loop through the string
    - In this loop, if you are at the next value(s[i+1]) and the roman numeral value before (s[i]) is less than it, then you subtract the value at cache[s[i]] from the result. 
    THIS IS BECAUSE ROMAN NUMERALS ARE SUPPOSED TO GO FROM LARGER TO SMALLER BUT IN THIS CASE IT GOES FROM SMALLER TO LARGER and that's not what we want
    - Otherwise, just add the value at cache[s[i]] to the result 
 4) When done, return the result
*/

//Solution:
function romanToInt(s){
    let cache = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000},
        result = 0
    for(let i = 0; i < s.length; i++){
        if(s[i+1] && cache[s[i]] < cache[s[i+1]]){
            result -= cache[s[i]]
        }else{
            result += cache[s[i]]
        }
    }
    return result
}