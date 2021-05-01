//Given an array of positive integers representing the values of coins in your 
//possession, write a function that returns the minimum amount of change
//(the minimum sum of money) that you cannot create. 
//For e.g, if you're given coins = [1,2,5], the minimum amount of change that you
//can't create is 4. If youre given no coins the minimum amount of change that you 
//can't create is 1

//-----SOLUTION------//
function nonChange(coins){
    coins.sort((a,b)=>a-b)

    let change = 0
    for(let i = 0; i < coins.length; i++){
        if(coins[i] > change + 1){
            return change + 1
        }else{
            change += coins[i]
        }
    }
    return change + 1
}

// console.log(nonChange([1,1,1]))

console.log(nonChange([5,7,1,1,2,3,22]))

//Time --> O(nlogn) where n is the length of the array
//Space --> O(1)