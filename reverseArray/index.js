//simple function reversing an array

function reverseArr(arr){
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(reverseArr(['ikenna',2,3, null, 5]))