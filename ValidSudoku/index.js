/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1) Each row must contain the digits 1-9 without repetition.
2) Each column must contain the digits 1-9 without repetition.
3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

//solution

function isValidSudoku(board){
    for(let i = 0; i < board.length; i++){
        let objRow = {}
        for(let j = 0; j < board[i].length; j++){
            let itemRow = board[i][j]
            if(itemRow === '.'){
                continue
            }
            if(itemRow in objRow){
                return false
            }
            objRow[itemRow] = 1
        }
    }

    for(let i = 0; i < board.length; i++){
        let objCol = {}
        for(let j = 0; j < board[i].length; j++){
            let itemCol = board[j][i]
            if(itemCol === '.'){
                continue
            }
            if(itemCol in objCol){
                return false
            }
            objCol[itemCol] = 1
        }
    }

    for(let i = 0; i < board.length; i++){
        let objBox = {}
        for(let j = 0; j < board[i].length; j++){
            let itemBox = board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)]
            if(itemBox === '.'){
                continue
            }
            if(itemBox in objBox){
                return false
            }
            objBox[itemBox] = 1
        }
    }
    return true
}