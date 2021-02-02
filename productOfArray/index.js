function productOfArray(arr){
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.splice(1))
}

console.log(productOfArray([1,2,3,4,5,6,7,8,9,10]))