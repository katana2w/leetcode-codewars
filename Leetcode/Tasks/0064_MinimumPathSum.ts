/**
 * https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
 * Output: 7
 * Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
 * Example 2:
 *
 * Input: grid = [[1,2,3],[4,5,6]]
 * Output: 12
 *
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 200
 * 0 <= grid[i][j] <= 200
 */

function minPathSum(grid: number[][]): number {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let lastVisitedRow: number[] | undefined = [];
    for (let rowId = rowCount - 1; rowId >= 0; rowId--) {
        const currentRow = [ ...grid[rowId] ];
        for (let colId = colCount - 1; colId >= 0; colId--) {
            const rightValue = colId === colCount - 1 ? undefined : currentRow[colId + 1];
            const bottomValue = lastVisitedRow === undefined ? undefined : lastVisitedRow[colId];
            if (rightValue === undefined && bottomValue !== undefined) {
                currentRow[colId] = currentRow[colId] + bottomValue;
            } else if (rightValue !== undefined && bottomValue === undefined) {
                currentRow[colId] = currentRow[colId] + rightValue;
            } else if (rightValue !== undefined && bottomValue !== undefined) {
                currentRow[colId] = currentRow[colId] + Math.min(bottomValue, rightValue);
            }
        }
        lastVisitedRow = currentRow;
    }

    return lastVisitedRow[0];
}