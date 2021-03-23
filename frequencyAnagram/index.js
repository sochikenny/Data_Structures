//Given two strings, write a function to determine if the second string in an anagram of the first.
//An anagram is a word, phrase, or name formed from rearranging the letters of another, such as 
//CINEMA formed as ICEMAN
//Examples: validAnagram('','')->true; validAnagram('aaz','zza')->false; validAnagram('anagram','nagaram')->true

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let freqObj1 = {}
    let freqObj2 = {}

    for(let val of str1){
        freqObj1[val] ? freqObj1[val] += 1 : freqObj1[val] = 1
    }
    for(let val of str2){
        freqObj2[val] ? freqObj2[val] += 1 : freqObj2[val] = 1
    }

    for (let key in freqObj1){
        if(!(key in freqObj2)){
            return false
        }
        if(freqObj2[key] !== freqObj1[key]){
            return false
        }
    }
    return true
}

// function validAnagram(str1, str2){
//  if(str1.length !== str2.length){
//      return false
//  }
//  let obj1 = {}
//  let obj2 = {}

//  for(let i = 0; i < str1.length; i++){
//     let valOne = str1[i]
//     if(valOne in obj1){
//         obj1[valOne] += 1
//     }else{
//         obj1[valOne] = 1
//     }
//  }

//  for(let i = 0; i < str2.length; i++){
//     let valTwo = str2[i]
//     if(valTwo in obj2){
//         obj2[valTwo] += 1
//     }else{
//         obj2[valTwo] = 1
//     }
//  }

//  for(let key in obj1){
//      if(!(key in obj2)){
//          return false
//      }
//      if(obj2[key]!== obj1[key]){
//          return false
//      }
//  }

//  return true
// }
console.log(validAnagram('',''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))