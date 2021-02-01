//A function that takes in an array and target and outputs its index in the array

function binarySearch(arr, target){
    let leftIdx = 0;
    let rightIdx = arr.length - 1
    let midVal = Math.floor((leftIdx+rightIdx)/2)
//Dealing with all the initial indices

    while(leftIdx < rightIdx){
        if (target < arr[midVal]){
            rightIdx = midVal - 1
        }else{
            leftIdx = midVal + 1
        }
            midVal = Math.floor((leftIdx+rightIdx)/2)
    }
    if(target === arr[midVal]){
        return midVal
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 3))
//Time Complexity: O(log(n)); Space Complexity: O(1)

//-------------------------- Prinamry Solution---------------------------//
function binary(arr, target){
    for(let i = 0; i < arr.length; i++){
        if (target === arr[i]) return i
    }
    return -1
}
// console.log(binary([1,2,3,4,5], 3))


