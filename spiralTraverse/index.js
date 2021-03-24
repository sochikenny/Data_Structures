// function spiralStuff(array){
//     let result = []
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array[i].length; j++){
//             result.push(array[i][j])
//         }
//     }
//     result.sort((a,b)=> a - b)
//     return result 
// }

function spiralStuff(array){
    let result = []
    let startRow = 0, endRow = array.length - 1
    let startCol = 0, endCol = array[0].length - 1

    while(startRow <= endRow && startCol <= endCol){
        for(let col = startCol; col <= endCol; col++){
            result.push(array[startRow][col])
        }
        for (let row = startRow + 1; row <= endRow; row++){
            result.push(array[row][endCol])
        }
        for(let col = endCol - 1; col >= startCol; col--){
            if(startRow === endRow) break
            result.push(array[endRow][col])
        }
        for(let row = endRow - 1; row > startRow; row--){
            if(startCol === endCol) break
            result.push(array[row][startCol])
        }
        startRow ++
        endRow--
        startCol++
        endCol--
    }
   return result
}

console.log(spiralStuff([ [1,2,3,4],
              [12,13,14,5],
              [11,16,15,6],
              [10,9,8,7] ]))