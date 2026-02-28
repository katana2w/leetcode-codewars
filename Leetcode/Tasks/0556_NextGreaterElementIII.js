/*
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.



Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1


Constraints:

1 <= n <= 231 - 1
 */

function nextGreaterElement(n: number): number {
    const INT_MAX = 2147483647;

    const digits = String(n).split("").map(ch => ch.charCodeAt(0) - 48);
    const m = digits.length;

    // 1) find pivot
    let i = m - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;
    if (i < 0) return -1;

    // 2) find rightmost successor bigger than pivot
    let j = m - 1;
    while (j > i && digits[j] <= digits[i]) j--;

    // 3) swap
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // 4) reverse suffix (i+1..end)
    let l = i + 1, r = m - 1;
    while (l < r) {
        [digits[l], digits[r]] = [digits[r], digits[l]];
        l++;
        r--;
    }

    // 5) build number with overflow check
    let res = 0;
    for (const d of digits) {
        res = res * 10 + d;
        if (res > INT_MAX) return -1;
    }

    return res > n ? res : -1;
};
