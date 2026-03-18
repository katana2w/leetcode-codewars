/**
 * https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * Given two strings s1 and s2, return the lowest ASCII sum of deleted characters to make two strings equal.
 *
 *
 *
 * Example 1:
 *
 * Input: s1 = "sea", s2 = "eat"
 * Output: 231
 * Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
 * Deleting "t" from "eat" adds 116 to the sum.
 * At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
 * Example 2:
 *
 * Input: s1 = "delete", s2 = "leet"
 * Output: 403
 * Explanation: Deleting "dee" from "delete" to turn the string into "let",
 * adds 100[d] + 101[e] + 101[e] to the sum.
 * Deleting "e" from "leet" adds 101[e] to the sum.
 * At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
 * If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
 *
 *
 * Constraints:
 *
 * 1 <= s1.length, s2.length <= 1000
 * s1 and s2 consist of lowercase English letters.
 */

function minimumDeleteSum(s1: string, s2: string): number {
    const m = s1.length;
    const n = s2.length;

    const dp: number[][] = Array.from({ length: m + 1 }, () =>
        new Array(n + 1).fill(0)
    );

    for (let i = m - 1; i >= 0; i--) {
        dp[i][n] = dp[i + 1][n] + s1.charCodeAt(i);
    }

    for (let j = n - 1; j >= 0; j--) {
        dp[m][j] = dp[m][j + 1] + s2.charCodeAt(j);
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s1[i] === s2[j]) {
                dp[i][j] = dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.min(
                    s1.charCodeAt(i) + dp[i + 1][j],
                    s2.charCodeAt(j) + dp[i][j + 1]
                );
            }
        }
    }

    return dp[0][0];
}