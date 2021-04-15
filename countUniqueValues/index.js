//Implement a function called countUniqueValues which accepts a sorted array,
//and counts the unique values in the array. There can be negative numbers in
//the array, but it will always be sorted.

function countUniqueValues(array){
    if(array.length === 0) return 0

    let i = 0
    for(let j = 1; j < array.length; j++){
        if(array[i] !== array[j]){
            i++
            array[i] = array[j]
        }
    }
    return i + 1
}

console.log(countUniqueValues([-2,-1,-1,0,1]))