function validateSubsequence(array, sequence){
    //initialize both array and sequence indexes at 0
    let arrIdx = 0  
    let seqIdx = 0
    while(arrIdx < array.length && seqIdx < sequence.length){ //while loop on both
     if(array[arrIdx] === sequence[seqIdx])//if values in both arrays equal, increment both array
        seqIdx ++
        arrIdx ++
    }

    return seqIdx === sequence.length  //afterwards set seqIdx to its length
}

//Time --> O(N) where N is the size of array
//Space --> O(1)