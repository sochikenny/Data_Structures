function validateSubsequence(array, sequence){
    let arrIdx = 0
    let seqIdx = 0

    while(arrIdx < array.length && seqIdx < sequence.length){
        if(array[arrIdx] === sequence[seqIdx])
        seqIdx ++
        arrIdx ++
    }

    return seqIdx === sequence.length
}

//Time --> O(N) where N is the size of array
//Space --> O(1)