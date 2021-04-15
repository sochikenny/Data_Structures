//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0. Return array that
//includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr){
    let leftIdx = 0
    let rightIdx = arr.length - 1
    while(leftIdx < rightIdx){
        if((arr[leftIdx] + arr[rightIdx]) === 0){
           return [arr[leftIdx], arr[rightIdx]]
        }else if((arr[leftIdx] + arr[rightIdx]) > 0){
            rightIdx --
        }else{
            left ++
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))