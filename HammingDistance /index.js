/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, return the Hamming distance between them.

Example:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.


Approach:
1) change both inputs to binary
2) Initialize coount to be returned later. Also create a while loop that starts at
the end of both inputs. The while loop is an OR conditional as well
    - In this loop, take the index at each converted input and apply XOR to them 
    - Afterwards, add them to the count, (count += xBit[i] ^ yBit[j]) then decrement i and j in the loop
3) Once done, break out of the loop and return count 
*/

//Solution

function hammingDistance(x, y){
    let xBit = x.toString(2), 
        yBit = y.toString(2)
    
    let i = xBit.length - 1, j = yBit.length - 1, count = 0
    while (i >= 0 || j >= 0) {
	    count += xBit[i] ^ yBit[j]
	    i--
	    j--
    }
    return count
}