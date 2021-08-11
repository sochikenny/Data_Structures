/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Example:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 
2 is the missing number in the range since it does not appear in nums.
*/

/*
Approach: 
Approach(Brute Force)
 1) if there's no nums then return null (error checking)
 2) Sort the input nums
 3) Initialize a result variable to return and create a for loop
 4) In this loop, if the first element in the sorted nums array is not zero, return 0
 5) Else if the next element does not equal the previous element plus 1, then put the previous element plus 1 in the result variable to be immediately returned
 
 Time Complexity: O(nlogn) due to sorting; Space: O(1)
*/

//Solution ONE
function missingNumber(nums) {
    if(!nums) return null //error checking
    
    let newNums = nums.sort((a,b) => a - b)
    
    let result
    for(let i = 0; i < newNums.length; i++){
        if(newNums[0] !== 0){
            return 0
        }
        if(newNums[i+1] !== (newNums[i] + 1)){
            result = newNums[i] + 1
            return result
        }   
    }    
};

/*
Optimal Solution: 
1) initialize expected and actual sums to zero
2) Loop thru the nums array and add up all the values into actual sum
3) Loop thru the nums array again and add up all the indeces which will be in the expected sum
4) Return the difference between both sums 

Time Complexity: O(N) where n is the number of elements in the input array
Space Complexity: O(1)

[3,0,1] --> 4 actual sum

nums.length = 3 --> 0, 1, 2, 3 --> add everything--> 6 expected sum
*/

function missingNumber(nums) {
    let expectedSum = 0, actualSum = 0;
    
    for(let i=0; i<nums.length; i++){
        actualSum += nums[i]
    }
    
    for(let i=0; i<=nums.length; i++){
        expectedSum += i
    }
    
    return expectedSum - actualSum;
};