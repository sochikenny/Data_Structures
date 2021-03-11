function palindrome(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left]!==str[right]){
            return false
        } 
            left ++
            right --
    }
    return true
}

// function palindrome(str){
//     let left = 0;
//     let right = str.length - 1;
//     while(left < right){
//         if(str[left]===str[right]){
//             return true
//         } 
//             left ++
//             right --
//     }
//     return false
// }

console.log(palindrome('tacocat'))
console.log(palindrome('tacocatk'))