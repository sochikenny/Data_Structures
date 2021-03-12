//Game of Life
//The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). 
//Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

//Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
//Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

function gameOfLife(board){
    let r = board.length  //row of board
    let c = board[0].length  //col of board

    //initialize new array and fill it with zeros
    let b = new Array(r).fill(0).map(()=> new Array(c).fill(0))

    let directions = [
        [-1,0], [-1,1], [0,1], [1,1], 
        [1,0], [1,-1], [0,-1], [-1,-1]
    ]  //all 8 neighbors of every single cell we visit

    for (let i = 0; i < r; i++){     //traverse through every cell in the given board
        for(let j = 0; j < c; j++){  //row and column
            
            let liveCount = 0   //initialize a live count to 0 to keep track of live cells for the current cell we are iterating over
            
            for(let dir of directions){     //iterate thru neighbors of each cell
                let x = dir[0] + i          //using x&y as coordinates for the neighbors 
                let y = dir[1] + j
                if(x >= 0 && x < r && y >= 0 && y < c && board[x][y] === 1){
                    liveCount ++
                }
            }

             //using conditionals to transform our b array(initialized array set to zeros)
             if(board[i][j] === 1){
                if(liveCount === 2 || liveCount === 3){
                    b[i][j] = 1
                }
            }else if(board[i][j] === 0 && liveCount === 3){
                b[i][j] = 1
            }    
        }
    }

    //we are transferring all the items from the transformed b array into the original(board)
    for (let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            board[i][j] = b[i][j]
        }
    }
    console.log(board[i][j])
}


