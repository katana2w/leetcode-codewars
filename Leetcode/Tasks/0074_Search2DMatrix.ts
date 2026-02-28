/**
 * https://leetcode.com/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=binary-search
 *
 * You are given an m x n integer matrix matrix with the following two properties:
 *
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 *
 * You must write a solution in O(log(m * n)) time complexity.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 * Example 2:
 *
 *
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 *
 *
 * Constraints:
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -104 <= matrix[i][j], target <= 104
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    if (m == 0) return false;
    let n = matrix[0].length;
    let left = 0,
        right = m * n - 1;
    let pivotIdx, pivotElement;
    while (left <= right) {
        pivotIdx = Math.floor((left + right) / 2);
        pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n];
        if (target == pivotElement) return true;
        else {
            if (target < pivotElement) right = pivotIdx - 1;
            else left = pivotIdx + 1;
        }
    }
    return false;
};
