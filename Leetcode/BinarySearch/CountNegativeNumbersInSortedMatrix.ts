/**
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/editorial/?envType=study-plan-v2&envId=binary-search
 *
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
 *
 *
 *
 * Example 1:
 *
 * Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
 * Output: 8
 * Explanation: There are 8 negatives number in the matrix.
 * Example 2:
 *
 * Input: grid = [[3,2],[1,0]]
 * Output: 0
 *
 *
 * Constraints:
 *
 * m == grid.length
 * n == grid[i].length
 * 1 <= m, n <= 100
 * -100 <= grid[i][j] <= 100
 *
 *
 * Follow up: Could you find an O(n + m) solution?
 */

function countNegatives(grid: number[][]): number {
    let count = 0;
    const n = grid[0].length;
    for (const row of grid) {
        let left = 0;
        let right = n - 1;
        while (left <= right) {
            const mid = Math.floor((right + left) / 2);
            if (row[mid] < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        count += n - left;
    }
    return count;
};
