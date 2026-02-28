/**
 * https://leetcode.com/problems/kth-missing-positive-number/description/?envType=study-plan-v2&envId=binary-search
 *
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
 *
 * Return the kth positive integer that is missing from this array.
 *
 *
 *
 * Example 1:
 *
 * Input: arr = [2,3,4,7,11], k = 5
 * Output: 9
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
 * Example 2:
 *
 * Input: arr = [1,2,3,4], k = 2
 * Output: 6
 * Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 *
 *
 * Constraints:
 *
 * 1 <= arr.length <= 1000
 * 1 <= arr[i] <= 1000
 * 1 <= k <= 1000
 * arr[i] < arr[j] for 1 <= i < j <= arr.length
 *
 *
 * Follow up:
 *
 * Could you solve this problem in less than O(n) complexity?
 */

function findKthPositive(arr: number[], k: number): number {
    const n = arr.length;

    const missing = (i: number) => arr[i] - (i + 1);

    const missLast = missing(n - 1);
    if (k > missLast) {
        return arr[n - 1] + (k - missLast);
    }

    let left = 0, right = n - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (missing(mid) >= k) right = mid;
        else left = mid + 1;
    }

    return left + k;
};
