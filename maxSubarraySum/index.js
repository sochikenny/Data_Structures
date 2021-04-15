//Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array
//Examples:
//maxSubarraySum([1,2,5,2,8,1,5], 2) --> 10
//maxSubarraySum([1,2,5,2,8,1,5], 4) --> 17
//maxSubarraySum([4,2,1,6], 1) --> 6

function maxSubarraySum(arr, num){
    //initialize a maxSum and tempSum
    let maxSum = 0
    let tempSum = 0
    //create an edge case 
    if(arr.length < num) return null

    //loop through arr until you arrive at the number in the input
    //add up all the numbers under the num input
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    //set tempSum to current maxSum
    tempSum = maxSum

    //create another for loop that starts at the num input and goes to the end of the array
    //in this loop, update tempSum to taking to the current tempSum, adding the next item in the array
    //and subtracting the previous item in the array
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i -num] + arr[i] //-->newly updated tempSum
        //now, we gotta compare it to the maxSum
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4))

