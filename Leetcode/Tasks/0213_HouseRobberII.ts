/**
 * https://leetcode.com/problems/house-robber-ii/description/
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [2,3,2]
 * Output: 3
 * Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
 * Example 2:
 *
 * Input: nums = [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * Total amount you can rob = 1 + 3 = 4.
 * Example 3:
 *
 * Input: nums = [1,2,3]
 * Output: 3
 */

function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    const robLinear = (l: number, r: number): number => {
        // rob houses in [l..r] inclusive
        let prev2 = 0; // dp[i-2]
        let prev1 = 0; // dp[i-1]
        console.log('l', l);
        console.log('r', r);
        for (let i = l; i <= r; i++) {
            console.log('i', i);
            const take = prev2 + nums[i];
            console.log('take', take);
            const skip = prev1;
            console.log('skip', skip);
            const cur = Math.max(take, skip);
            console.log('cur', cur);
            prev2 = prev1;
            prev1 = cur;
        }
        return prev1;
    };

    return Math.max(
        robLinear(0, n - 2),
        robLinear(1, n - 1)
    );
};

rob([1, 2, 3, 1]);
