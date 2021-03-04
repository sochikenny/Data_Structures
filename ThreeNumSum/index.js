function threeNumSum(arr, targetSum){
    let sortedArr = arr.sort((a,b)=> a - b);
    let result = []
    for(let i = 0; i < sortedArr.length - 2; i++){
        let left = 0
        let right = sortedArr.length - 1
        while(left < right){
            let currentSum = sortedArr[i] + sortedArr[left] + sortedArr[right]
            if(currentSum === targetSum){
                result.push([sortedArr[i], sortedArr[left], sortedArr[right]])
                left ++
                right --
            }else if(currentSum > targetSum){
                right --
            }else{
                left ++
            }
        }
    }
    return result
}

//arr = [12, 3, 1, 2, -6, 5, -8, 6]; targetSum = 0

console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0))