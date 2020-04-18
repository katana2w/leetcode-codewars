/*
*Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*
* */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let sumPathMatrix = Array.from(grid);

    let sum = 0;
    let rowsLength = grid.length - 1;
    let colsLength = grid[0].length - 1;
    for(let i=0; i <= colsLength ; i++){
        sumPathMatrix[0][i] = sum + grid[0][i];
        sum = sumPathMatrix[0][i];
    }
    sum = 0;
    for(let i=0; i <= rowsLength; i++){
        sumPathMatrix[i][0] = sum + grid[i][0];
        sum = sumPathMatrix[i][0];
    }
    for (let i = 1; i <= rowsLength; i++) {
        for (let j = 1; j <= colsLength; j++) {
            sumPathMatrix[i][j] = grid[i][j] + Math.min(sumPathMatrix[i-1][j],sumPathMatrix[i][j-1]);
        }
    }
    return sumPathMatrix[rowsLength][colsLength];
};

// console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum([[1,3,5,8],[4,2,1,7],[4,3,2,3]]))