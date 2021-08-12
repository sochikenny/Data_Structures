/*
Question: Count the number of prime numbers less than a non-negative number, n.

Example:
Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example:
Input: n = 0
Output: 0

Example:
Input: n = 1
Output: 0
*/

//Solution
function countPrimes(n) {
    let nums = new Array(n).fill(true), count = 0
   
    for(let i = 2; i*i < n; i++){
        if(nums[i]===true){
            for(let j = 2; j * i < n; j++){
                nums[j*i] = false
            }
        }
    }
    
    for(let i = 2; i < n; i++){
        if(nums[i]===true){
            count += 1
        }
    }
    
    return count
};