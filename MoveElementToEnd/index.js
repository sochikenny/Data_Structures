function moveElementToEnd(array, toMove){
    let result = [] //initialize empty array

    for(let i = 0; i < array.length; i++){
        if(array[i]!==toMove){
            result.push(array[i])
        }
    }
    
    for(let j = 0; j < array.length; j++){
        if(array[j]===toMove){
            result.push(array[j])
        }
    }
    
    return result
}