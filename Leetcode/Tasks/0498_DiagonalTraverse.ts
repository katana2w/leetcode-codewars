/**
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,4,7,5,3,6,8,9]
 * Example 2:
 *
 * Input: mat = [[1,2],[3,4]]
 * Output: [1,2,3,4]
 *
 *
 * Constraints:
 *
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 104
 * 1 <= m * n <= 104
 * -105 <= mat[i][j] <= 105
 */

function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length;
    const n = mat[0].length;

    let row = 0, col = 0;
    let dir = 1; // 1 = вгору-праворуч, -1 = вниз-ліворуч
    const result: number[] = [];

    for (let k = 0; k < m * n; k++) {
        result.push(mat[row][col]);

        if (dir === 1) {
            // рух вгору-праворуч
            if (col === n - 1) {
                row++;
                dir = -1;
            } else if (row === 0) {
                col++;
                dir = -1;
            } else {
                row--;
                col++;
            }
        } else {
            // рух вниз-ліворуч
            if (row === m - 1) {
                col++;
                dir = 1;
            } else if (col === 0) {
                row++;
                dir = 1;
            } else {
                row++;
                col--;
            }
        }
    }

    return result;
};
