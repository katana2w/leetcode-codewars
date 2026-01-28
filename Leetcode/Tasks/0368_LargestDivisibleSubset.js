/**
 * https://leetcode.com/problems/largest-divisible-subset/description/
 *
 * Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
 *
 * answer[i] % answer[j] == 0, or
 * answer[j] % answer[i] == 0
 * If there are multiple solutions, return any of them.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [1,2,3]
 * Output: [1,2]
 * Explanation: [1,3] is also accepted.
 * Example 2:
 *
 * Input: nums = [1,2,4,8]
 * Output: [1,2,4,8]
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * 1 <= nums[i] <= 2 * 109
 * All the integers in nums are unique.
* */


function largestDivisibleSubset(nums: number[]): number[] {
    const n = nums.length;
    if (n === 0) return [];

    nums.sort((a, b) => a - b);

    const dp = new Array<number>(n).fill(1);
    const parent = new Array<number>(n).fill(-1);

    let bestLen = 1;
    let bestEnd = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }
        }

        if (dp[i] > bestLen) {
            bestLen = dp[i];
            bestEnd = i;
        }
    }

    const result: number[] = [];
    let cur = bestEnd;
    while (cur !== -1) {
        result.push(nums[cur]);
        cur = parent[cur];
    }

    result.reverse();
    return result;
};
