//Collecting Odd Values

function collectOddValues(arr){
    let result = []
    helper(arr)
    return result

    function helper(arrInput){
        if(arrInput.length === 0){
          return
        }
        if(arrInput[0] % 2 !== 0){
          result.push(arrInput[0])
        }
        helper(arrInput.slice(1), result)
      }
}



console.log(collectOddValues([1,2,3,4,5]))