/**
 * https://leetcode.com/explore/learn/card/binary-search/125/template-i/950/
 *
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 *
 * Example 1:
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 * Example 2:
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 *
 *
 * Constraints:
 *
 * 0 <= x <= 231 - 1
 */

function mySqrt(x: number): number {
    if (x < 2) return x;

    let left = 1;
    let right = x;
    let ans = 0;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (mid <= Math.floor(x / mid)) {
            ans = mid;        // mid² ≤ x — кандидат
            left = mid + 1;   // пробуем больше
        } else {
            right = mid - 1;  // mid² > x — уменьшаем
        }
    }

    return ans
};
