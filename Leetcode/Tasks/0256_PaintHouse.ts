/**
 * https://leetcode.com/problems/paint-house/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.
 *
 * The cost of painting each house with a certain color is represented by an n x 3 cost matrix costs.
 *
 * For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on...
 * Return the minimum cost to paint all houses.
 *
 *
 *
 * Example 1:
 *
 * Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
 * Output: 10
 * Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
 * Minimum cost: 2 + 5 + 3 = 10.
 * Example 2:
 *
 * Input: costs = [[7,6,2]]
 * Output: 2
 *
 *
 * Constraints:
 *
 * costs.length == n
 * costs[i].length == 3
 * 1 <= n <= 100
 * 1 <= costs[i][j] <= 20
 */

function minCost(costs: number[][]): number {
    let red = costs[0][0];
    let blue = costs[0][1];
    let green = costs[0][2];

    for (let i = 1; i < costs.length; i++) {
        const newRed = costs[i][0] + Math.min(blue, green);
        const newBlue = costs[i][1] + Math.min(red, green);
        const newGreen = costs[i][2] + Math.min(red, blue);

        red = newRed;
        blue = newBlue;
        green = newGreen;
    }

    return Math.min(red, blue, green);
};