/**
 * https://leetcode.com/problems/split-array-largest-sum/description/?envType=study-plan-v2&envId=binary-search
 *
 * Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.
 *
 * Return the minimized largest sum of the split.
 *
 * A subarray is a contiguous part of the array.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [7,2,5,10,8], k = 2
 * Output: 18
 * Explanation: There are four ways to split nums into two subarrays.
 * The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.
 * Example 2:
 *
 * Input: nums = [1,2,3,4,5], k = 2
 * Output: 9
 * Explanation: There are four ways to split nums into two subarrays.
 * The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
 *
 *
 * Constraints:
 *
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 106
 * 1 <= k <= min(50, nums.length)
 */

function splitArray(nums: number[], m: number): number {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);
    let answer = right;

    function requiredSubarrays(maxAllowed: number): number {
        let count = 1;
        let currentSum = 0;

        for (const num of nums) {
            if (currentSum + num <= maxAllowed) {
                currentSum += num;
            } else {
                count++;
                currentSum = num;
            }
        }

        return count;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const needed = requiredSubarrays(mid);

        if (needed <= m) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}