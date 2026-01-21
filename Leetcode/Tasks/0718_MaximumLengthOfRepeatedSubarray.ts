/**
 * https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
 *
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
 *
 *
 *
 * Example 1:
 *
 * Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
 * Output: 3
 * Explanation: The repeated subarray with maximum length is [3,2,1].
 * Example 2:
 *
 * Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
 * Output: 5
 * Explanation: The repeated subarray with maximum length is [0,0,0,0,0].
 *
 *
 * Constraints:
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 100
 */

function findLength(nums1: number[], nums2: number[]): number {
    if (nums2.length > nums1.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums2.length;
    const dp = new Array<number>(m + 1).fill(0);
    let ans = 0;

    for (let i = 1; i <= nums1.length; i++) {
        for (let j = m; j >= 1; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                if (dp[j] > ans) ans = dp[j];
            } else {
                dp[j] = 0;
            }
        }
    }

    return ans;
}
