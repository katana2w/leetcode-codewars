/**
 * https://leetcode.com/problems/3sum-smaller/description/
 *
 * Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.
 *
 *
 *
 * Example 1:
 *
 * Input: nums = [-2,0,1,3], target = 2
 * Output: 2
 * Explanation: Because there are two triplets which sums are less than 2:
 * [-2,0,1]
 * [-2,0,3]
 * Example 2:
 *
 * Input: nums = [], target = 0
 * Output: 0
 * Example 3:
 *
 * Input: nums = [0], target = 0
 * Output: 0
 */

function threeSumSmaller(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    if (n >= 3 && nums[0] + nums[1] + nums[2] >= target) return 0;
    let res = 0;
    for (let k = n - 1; k > 1; k--) {
        let lo = 0, hi = k - 1;
        while (lo < hi) {
            if (nums[lo] + nums[hi] < target - nums[k]) {
                res += hi - lo;
                lo++;
            } else {
                hi--;
            }
        }
    }
    return res;
};
