/*
*  Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
* */

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = Math.trunc(x / 10);
        if (rev > Number.MAX_SAFE_INTEGER/10 || (rev == Number.MAX_SAFE_INTEGER / 10 && pop > 7)) return 0;
        if (rev < Number.MIN_SAFE_INTEGER/10 || (rev == Number.MIN_SAFE_INTEGER / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
}

// 1534236469
// -2147483412

// console.log(reverse(-900000))
// console.log(reverse(-123))
// console.log(reverse(123))
console.log(reverse(1534236469))
// console.log(reverse(-2147483412))
