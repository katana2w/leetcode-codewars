/**
 * https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/description/?envType=study-plan-v2&envId=binary-search
 *
 * You are given three positive integers: n, index, and maxSum. You want to construct an array nums (0-indexed) that satisfies the following conditions:
 *
 * nums.length == n
 * nums[i] is a positive integer where 0 <= i < n.
 * abs(nums[i] - nums[i+1]) <= 1 where 0 <= i < n-1.
 * The sum of all the elements of nums does not exceed maxSum.
 * nums[index] is maximized.
 * Return nums[index] of the constructed array.
 *
 * Note that abs(x) equals x if x >= 0, and -x otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: n = 4, index = 2,  maxSum = 6
 * Output: 2
 * Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
 * There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2].
 * Example 2:
 *
 * Input: n = 6, index = 1,  maxSum = 10
 * Output: 3
 *
 *
 * Constraints:
 *
 * 1 <= n <= maxSum <= 109
 * 0 <= index < n
 *
 */
function maxValue(n: number, index: number, maxSum: number): number {
    // рахує мінімальну суму на одній стороні,
    // якщо біля центру стоїть peak, а з цього боку cnt елементів
    function sideSum(peak: number, cnt: number): number {
        if (cnt < peak) {
            // можемо спадати: peak-1, peak-2, ..., peak-cnt
            const largest = peak - 1;
            const smallest = peak - cnt;
            return ((largest + smallest) * cnt) / 2;
        } else {
            // дійшли до 1, решта будуть одиницями
            const decreasingSum = ((peak - 1) * peak) / 2; // peak-1 + ... + 1
            const ones = cnt - (peak - 1);
            return decreasingSum + ones;
        }
    }

    function can(peak: number): boolean {
        const leftCount = index;
        const rightCount = n - index - 1;

        const total =
            peak +
            sideSum(peak, leftCount) +
            sideSum(peak, rightCount);

        return total <= maxSum;
    }

    let left = 1;
    let right = maxSum;

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);

        if (can(mid)) {
            left = mid; // mid підходить, пробуємо більше
        } else {
            right = mid - 1; // mid завелике
        }
    }

    return left;
}

function maxValue(n: number, index: number, maxSum: number): number {
    const h1 = 1;
    let remain = maxSum - n;

    const h2 = Math.min(index + 1, n - index);
    const sum2 = h2 * h2;
    if (remain < sum2) {
        return h1 + Math.floor(Math.sqrt(remain));
    }
    remain -= sum2;

    const h3 = n - 2 * h2;
    const sum3 = ((n + 2 * h2 - 1) * h3) / 2;
    if (remain < sum3) {
        const b = (4 * h2 - 1) / 2;
        return h1 + h2 + Math.floor(Math.sqrt(Math.pow(b, 2) + 2 * remain) - b);
    }

    return h1 + h2 + h3 + Math.floor((remain - sum3) / n);
}