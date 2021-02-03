//write an iterative solution to a factorial function
function fact(num){
    let total = 1
    for(let i = num; i > 1; i--){
        total *= i
    }   
    return total
}
// console.log(fact(5))

//Recursice Solution
function factorial(num){
    if(num===1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(6))