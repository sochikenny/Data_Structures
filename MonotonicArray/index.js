function isMonotonic(array){
    let increasing = true
    let decreasing = true

    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i+1]){
            increasing = false
        }
        if(array[i] < array[i+1]){
            decreasing = false
        }
    }
    return increasing || decreasing 
}

//Time -> O(N) where N is the length of the array
//Space -> O(1) 