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

//Recursive Solution
function oddValues(arr){
    let newArr = []
    if(arr.length === 0){
        return newArr
    }
    if(arr[0]%2 !== 0){
        newArr.push(arr[0])
    }
    newArr = newArr.concat(oddValues(arr.slice(1)))
    return newArr
}

console.log(oddValues([1,2,3,4,5]))

