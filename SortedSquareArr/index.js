//Write a function that takes in a non-empty array of integers that are sorted
//in ascending order and returns a new array of the same length with the squares 
//of the original integers also sorted in ascending order

//UNOPTIMIZED SOLUTION --> O(nlogn) time; O(n) space 
function sortedSquare(array){
    let result = []
    for(let i = 0; i < array.length; i++){
        let num = array[i]**2
        result.push(num)
    }
    result.sort((a,b)=>a-b);
    return result 
}
//console.log(sortedSquare([-3,-2,-1,0,2]))

//OPTIMIZED SOLUTION --> O(n) time; O(n) space
function sortedSquare(array){
    let result = []
    let i = 0
    let j = array.length - 1 
    while(i <= j){
        if(Math.abs(array[i]) > Math.abs(array[j])){
            let left = array[i]**2
            result.unshift(left)
            i++
        }else{
            let right = array[j]**2
            result.unshift(right)
            j--
        }
    }
    return result
}
console.log(sortedSquare([-3,-2,-1,0,2]))
console.log(sortedSquare([1,2,3,4,5,6]))