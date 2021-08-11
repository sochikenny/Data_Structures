/*
Question: Write a function that takes an unsigned integer and returns the number of '1' bits 
it has (also known as the Hamming weight).

Example:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.


Approach(Zero -- EASY and straight forward):
 1) Turn n into a binary string
 2) Initialize count to 0
 3) loop thru string
    - In this loop, if the value is 1 then add to count
 4) Once we are done with the loop, return count 
 
 Approach(First -- Good for Bit Manipulation concept):
 1) Initialize a count var to 0 and a mask to 1
 2) Create a for loop that starts at 0 until 32(representing bits)
    - In this loop, if n & mask is not 0 then increment count
    - And shift mask one place to the left (mask = mask << 1)
 3) After breaking out of the loop, return count
 
 Approach(Second -- Fastest Method):
 1) Initialize a count var to 0
 2) Create a while loop (while n)
    - In this loop, If we do n & (n - 1), the insignificant 1 flips to zero
    - When that happens, Increment the count
 3) Return Count when done

*/

//SOLUTION
function hammingWeight(n){
    let arr = n.toString(2), count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==="1"){
            count += 1
        }
    }
    return count
}

function hammingWeight(n){
    let count = 0, mask = 1
    for(let i = 0; i < 32; i++){
        if((n & mask)!== 0){
            count += 1
        }
        mask = mask << 1
    }
    return count
}

function hammningWeight(n) {
    let count = 0
    while(n){
        n = n & (n - 1)
        count += 1
    }
    return count
};

