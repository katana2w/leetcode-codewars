/**
 * https://leetcode.com/problems/minimum-falling-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
 *
 * A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
 */

function minFallingPathSum(matrix: number[][]): number {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (j === 0) {
                matrix[i][0] = Math.min(matrix[i][0] + matrix[i - 1][0], matrix[i][0] + matrix[i - 1][1])
            } else if (j === matrix.length - 1) {
                matrix[i][j] = Math.min(matrix[i][j] + matrix[i - 1][j], matrix[i][j] + matrix[i - 1][j - 1])
            } else {
                matrix[i][j] = Math.min(matrix[i][j] + matrix[i - 1][j], matrix[i][j] + matrix[i - 1][j - 1], matrix[i][j] + matrix[i - 1][j + 1])
            }
        }
    }
    return Math.min(...matrix[matrix.length - 1])
};