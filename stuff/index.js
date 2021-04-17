function solution(A){
    let product = 1
    for(let i = 0; i < A.length; i++){
        product *= A[i]
        // console.log(product)
    }
    if(product > 0){
        return 1
    }else if(product < 0){
        return -1
    }else{
        return 0
    }
}

console.log(solution([1,2,-3,-5, 0]))