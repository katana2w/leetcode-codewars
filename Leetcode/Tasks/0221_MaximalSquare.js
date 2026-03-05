/*
* Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*
* */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let result = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i !== 0 && j !== 0 && matrix[i][j] > 0) {
                matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]) + 1;
            }
            if(matrix[i][j] > result) result = matrix[i][j];
        }
    }
    return result*result;
};

function maximalSquare(matrix: string[][]): number {
    const m = matrix.length;
    const n = matrix[0].length;

    // dp[j] = dp для поточного рядка в колонці j (сторона квадрату)
    const dp = new Array<number>(n + 1).fill(0);

    let maxSide = 0;

    // prevDiag = dp[j-1] з попереднього рядка (тобто dp[i-1][j-1])
    for (let i = 1; i <= m; i++) {
        let prevDiag = 0;
        for (let j = 1; j <= n; j++) {
            const temp = dp[j]; // збережемо dp[i-1][j] (зверху), бо dp[j] зараз перезапишемо

            if (matrix[i - 1][j - 1] === "1") {
                dp[j] = 1 + Math.min(
                    dp[j],      // зверху: dp[i-1][j]
                    dp[j - 1],  // зліва: dp[i][j-1] (вже оновлений у цьому рядку)
                    prevDiag    // діагональ: dp[i-1][j-1]
                );
                if (dp[j] > maxSide) maxSide = dp[j];
            } else {
                dp[j] = 0;
            }

            prevDiag = temp; // для наступної колонки діагональ буде старим "зверху"
        }
    }

    return maxSide * maxSide;
}