function arrayOfProducts(array) {
    let result = []
    for(let i = 0; i < array.length; i++){
		let multiplier = 1
        for(let j = 0; j < array.length; j++){
            if(i!==j){
                multiplier *= array[j]
            }
            result[i] = multiplier
        }
    }
    return result
}

console.log(arrayOfProducts([5,1,4,2]))