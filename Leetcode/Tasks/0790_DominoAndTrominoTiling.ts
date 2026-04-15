/**
 * https://leetcode.com/problems/domino-and-tromino-tiling/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.
 *
 *
 * Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.
 *
 * In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: 5
 * Explanation: The five different ways are shown above.
 * Example 2:
 *
 * Input: n = 1
 * Output: 1
 */

function numTilings(n: number): number {
    const MOD = 1000000007;

    if (n === 1) return 1;
    if (n === 2) return 2;

    let f0 = 1; // f(0)
    let f1 = 1; // f(1)
    let f2 = 2; // f(2)

    for (let i = 3; i <= n; i++) {
        const cur = (2 * f2 + f0) % MOD;
        f0 = f1;
        f1 = f2;
        f2 = cur;
    }

    return f2;
};