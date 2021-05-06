/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

//First Solution
function groupAnagrams(strs){
    let obj = {}
    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join('')
        if(key in obj){
            obj[key].push(strs[i])
        }else{
            obj[key] = [strs[i]]
        }
    }
    return Object.values(obj)
}

//Second Solution
function _groupAnagrams(strs){
    let obj = {}
    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join('')
        obj[key] ? obj[key].push(strs[i]) : obj[key] = [strs[i]]
    }
    return Object.values(obj)
}

//Optimal Solution
function groupAnagramsOpt(strs){
    let obj = {}
    for(let i = 0; i < strs.length; i++) {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
         41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

        let key = strs[i].split('')
                         .reduce((total, acc) => total*primes[acc.charCodeAt() - 97], 1);
        //console.log(key)

        if(key in obj){
            obj[key].push(strs[i])
        }else{
            obj[key] = [strs[i]]
        }
    }
    return Object.values(obj)
}

//console.log('b'.charCodeAt())
// 'a'.charCodeAt() - 97 = 0 (this will be my index)

console.log(groupAnagramsOpt(["eat","tea","tan","ate","nat","bat"]))