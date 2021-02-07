//Selection Sort

//Pseudo-code
//1) Store the first element as the smallest value you've seen so far
//2) Compare this item to the next item in the array until you find a smaller number
//3) If a smaller number is found, designate that smaller numner to be the new "minimum" and continue until the end of the array
//4) If the 'minimum' is not the value(index) you initially began with, swap the two values.
//5) Repeat this with the next element until the array is sorted

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let lowest = i; //initializing the lowest index
        for (let j = i + 1; j < arr.length; j++){
            if (arr[lowest] > arr[j]){
                lowest = j //updating the lowest index based on our given condition
            }
        }
        if (i !== lowest) //if original starting index isn't the lowest, then we swap
        swap(arr, i, lowest)
    }
    return arr
}

function swap(arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

console.log(selectionSort([3,1,4,2,5]))