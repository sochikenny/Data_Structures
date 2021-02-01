//A function that takes in a string and reverses it 

function reverseString(str){
    let result = ''
    for(let i = str.length - 1; i>=0; i--){
        result += str[i]
    }
    return result
}
console.log(reverseString('ikenna'))
