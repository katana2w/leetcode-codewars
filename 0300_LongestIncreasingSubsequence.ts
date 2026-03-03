/**
 * https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=binary-search
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 * Example 2:
 *
 * Input: nums = [0,1,0,3,2,3]
 * Output: 4
 * Example 3:
 *
 * Input: nums = [7,7,7,7,7,7,7]
 * Output: 1
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 2500
 * -104 <= nums[i] <= 104
 *
 *
 * Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 */

function lengthOfLIS(nums: number[]): number {
    const tails: number[] = [];

    for (const x of nums) {
        // lower_bound: перший idx, де tails[idx] >= x
        let l = 0, r = tails.length; // r = length (не length-1), бо шукаємо позицію вставки
        while (l < r) {
            const m = (l + r) >> 1;
            if (tails[m] >= x) r = m;
            else l = m + 1;
        }

        if (l === tails.length) tails.push(x);
        else tails[l] = x;
    }

    return tails.length;
};