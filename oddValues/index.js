//Iterative Solution
function odd(arr){
    let oddVals = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddVals.push(arr[i])
        }
    }
    return oddVals
}

console.log(odd([1,2,3,4,5]))
console.log(odd([]))