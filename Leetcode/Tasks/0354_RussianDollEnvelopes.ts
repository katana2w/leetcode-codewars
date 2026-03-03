/**
 * https://leetcode.com/problems/russian-doll-envelopes/description/?envType=study-plan-v2&envId=binary-search
 *
 * You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.
 *
 * One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.
 *
 * Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).
 *
 * Note: You cannot rotate an envelope.
 *
 *
 *
 * Example 1:
 *
 * Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
 * Output: 3
 * Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 * Example 2:
 *
 * Input: envelopes = [[1,1],[1,1],[1,1]]
 * Output: 1
 *
 *
 * Constraints:
 *
 * 1 <= envelopes.length <= 105
 * envelopes[i].length == 2
 * 1 <= wi, hi <= 105
 */

function maxEnvelopes(envelopes: number[][]): number {
    if (envelopes.length === 1) return 1;
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const dp: number[] = [];
    for (const [, h] of envelopes) {
        let l: number = 0, r: number = dp.length;
        while (l < r) {
            const m = (l + r) >> 1;
            if (dp[m] < h) l = m + 1;
            else r = m;
        }
        dp[l] = h;
    }
    return dp.length;
};