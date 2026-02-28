/*
*
*  Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true
Example 2:

Input: 14
Output: false
*
*
* */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0;
    let right = num
    if(num === 1) return true;
    if(num === 0) return true;

    while (left+1 < right) {
        let mid = Math.floor((left + right) / 2);
        if((mid*mid) === num) return true;
        if(mid * mid > num) {
            right = mid
        } else if(mid * mid < num) {
            left = mid
        }
    }
    return false
};

console.log(isPerfectSquare(14))
