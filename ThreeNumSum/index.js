function threeNumSum(arr, targetSum){
    let sortedArr = arr.sort((a,b)=> a - b);  //sort input array
    let result = []  //initialize an empty array that will eventually be returned
    for(let i = 0; i < sortedArr.length - 2; i++){ //loop thru sorted array until the last two digits
        let left = i + 1
        let right = sortedArr.length - 1
        while(left < right){  //set up inner while loop
            let currentSum = sortedArr[i] + sortedArr[left] + sortedArr[right]
            if(currentSum === targetSum){ //at this condition, push values to result then left++ & right--
                result.push([sortedArr[i], sortedArr[left], sortedArr[right]])
                left ++
                right --
            }else if(currentSum > targetSum){ //else, at this condition, right --
                right --
            }else{ //else at this condition, left++
                left ++
            }
        }
    }
    return result
}

//arr = [12, 3, 1, 2, -6, 5, -8, 6]; targetSum = 0
//Time --> O(N^2) where N is the length of the input array
//Space --> O(N)

console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0))