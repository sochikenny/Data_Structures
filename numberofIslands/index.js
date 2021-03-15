//Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
//You may assume all four edges of the grid are all surrounded by water.

function numberofIslands(grid){
    let countIslands = 0
    if(grid === null || grid.length === 0){
        return 0
    } //edge case

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j]=== '1'){
                countIslands += syncIsland(i, j, grid)
            }
        }
    }
    return countIslands
}

function syncIsland(i, j, grid){
    if(i < 0 || j < 0 || i >= grid.length || j > grid[i].length || grid[i][j]=== '0'){
        return
    }
    grid[i][j] = '0'
    syncIsland(i+1, j, grid)
    syncIsland(i-1, j, grid)
    syncIsland(i, j+1, grid)
    syncIsland(i, j-1, grid)

    return 1
}

console.log(numberofIslands([ ["1","1","0","0","0"], ["1","1","0","0","0"], ["0","0","1","0","0"], ["0","0","0","1","1"] ]))