function combinationSum(candidates, target, index = 0, curr=[], combination = []){
    if(target <= 0){
        if(target===0){
            combination.push(curr.slice())
        }
        return
    }

    if(index < candidates.length){
        const value = candidates[index]
        curr.push(value)
        combinationSum(candidates, target - value, index, curr, combination)
        curr.pop()
        combinationSum(candidates, target, index + 1, curr, combination)
    }

    return combination
}

console.log(combinationSum([2,3,5], 8))