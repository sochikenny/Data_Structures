/*
Question: Given an integer numRows, return the first numRows of Pascal's triangle.

Example:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/*
Approach:
1) Initialize an empty array named triangle & if theres nothing in the input return the empty array
 2) Otherwise, manually push 1 into the triangle
 3) Create a for loop starting from index 1 
    - In this loop, first create a variable that will serve as the previous element
    - Then create an empty array and manually push 1 into it
    - Create another loop that will loop thru the prev element, adding its elements based on our current index in the second loop. 
    - While in this second loop, push the result into the second empty array. Keep doing that until the loop is finished.
    - Break out of this second loop, then push 1 into the initialzed second empty array.
    - Then push the array into the triangle array that was initialized in the beginning 
4) Finally, break out of the loop and return triangle 
*/

function generate(numRows) {
    let triangle = []
    
    if (numRows === 0){
        return triangle
    }
    
    triangle.push([1])
    
    for (let i = 1; i < numRows; i++){
        let prevRow = triangle[i - 1]
        let newRow = []
        newRow.push(1)
        for(let j = 1; j < prevRow.length; j++){
            let sum = prevRow[j - 1] + prevRow[j] 
            newRow.push(sum)
        }
        newRow.push(1)
        triangle.push(newRow)
    }
    
    return triangle
};