// //NAIVE SOLUTION without returning as array instead the difference
// function smallestDiff(arr1, arr2){
//     let smallest = Infinity
//     for(let i = 0; i < arr1.length; i++){
//         for (let j = 0; j < arr2.length; j++){
//         let current = Math.abs(arr1[i] - arr2[j])
//             if(smallest > current){
//                 smallest = current
//                 console.log(smallest)
//             }
//         }
//     }
//     return smallest
// }

// console.log(smallestDiff([-1,5,10,20,28,3], [26,134,135,15,17]))

//OPTIMAL SOLUTION
function smallestDifference(arrayOne, arrayTwo){
    arrayOne.sort((a,b)=> a-b) //sort array one
    arrayTwo.sort((a,b)=> a-b) //sort array two

    //initialize result, smallest to infinity, current, i and j indexes to 0
    let result = [], current, smallest = Infinity, i = 0, j = 0
    while(i < arrayOne.length && j < arrayTwo.length){ //while loop on both arrays 
        let firstNum = arrayOne[i]
        let secondNum = arrayTwo[j]
         if(firstNum < secondNum){
            current = secondNum - firstNum
            i++
        }else if(secondNum < firstNum){
            current = firstNum - secondNum
            j++
        }else{
            return [firstNum, secondNum]
        }
        if(smallest > current){
            smallest = current
            result = [firstNum, secondNum]
        }
    }
    return result  
}


console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17]))




