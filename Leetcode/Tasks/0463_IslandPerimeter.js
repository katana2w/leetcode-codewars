/*
* https://leetcode.com/problems/island-perimeter/
*
* You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:


* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for(let i = 0 ; i<grid.length ; i++) {
        for(let j = 0 ; j<grid[i].length ; j++) {
            let num = grid[i][j];
            if(num == 1) {
                // Over the sea
                if(i == 0 || grid[i-1][j]==0) perimeter++;
                // On the left, facing the sea
                if(j == 0 || grid[i][j-1]==0) perimeter++;
                // On the right, facing the sea
                if(i == grid.length-1 || grid[i+1][j]==0) perimeter++;
                // Facing the sea below
                if(j == grid[i].length-1 || grid[i][j+1]==0) perimeter++;
            }
        }
    }
    return perimeter;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));
