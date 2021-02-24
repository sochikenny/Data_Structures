function twoNumSum(arr, target){
    let obj = {} //initialize obj

    for(let i = 0; i < arr.length; i++){ //loop thru array
        let match = target - arr[i] //create a match(involing a little math)
        if(match in obj){   //if match is in object then return it with the arr value
            return [match, arr[i]]
        }else{              //if not, then construct the initialized object with the arr val
            obj[arr[i]] = true
        }
    }
}

console.log(twoNumSum([1,2,3,4,5], 9))