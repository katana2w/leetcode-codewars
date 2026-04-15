/**
 * https://leetcode.com/problems/paint-house-ii/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.
 *
 * The cost of painting each house with a certain color is represented by an n x k cost matrix costs.
 *
 * For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on...
 * Return the minimum cost to paint all houses.
 *
 *
 *
 * Example 1:
 *
 * Input: costs = [[1,5,3],[2,9,4]]
 * Output: 5
 * Explanation:
 * Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5;
 * Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5.
 * Example 2:
 *
 * Input: costs = [[1,3],[2,4]]
 * Output: 5
 *
 *
 * Constraints:
 *
 * costs.length == n
 * costs[i].length == k
 * 1 <= n <= 100
 * 2 <= k <= 20
 * 1 <= costs[i][j] <= 20
 *
 *
 * Follow up: Could you solve it in O(nk) runtime?
 */

function minCostII(costs: number[][]): number {
    if (!costs || costs.length === 0) return 0;

    const n = costs.length;
    const k = costs[0].length;

    if (k === 0) return 0;
    if (k === 1) return n === 1 ? costs[0][0] : Infinity;

    let prev = [...costs[0]];

    for (let i = 1; i < n; i++) {
        let min1 = Infinity;
        let min2 = Infinity;
        let idx1 = -1;

        for (let j = 0; j < k; j++) {
            const val = prev[j];

            if (val < min1) {
                min2 = min1;
                min1 = val;
                idx1 = j;
            } else if (val < min2) {
                min2 = val;
            }
        }

        const curr = new Array(k);

        for (let j = 0; j < k; j++) {
            if (j === idx1) {
                curr[j] = costs[i][j] + min2;
            } else {
                curr[j] = costs[i][j] + min1;
            }
        }

        prev = curr;
    }

    return Math.min(...prev);
};