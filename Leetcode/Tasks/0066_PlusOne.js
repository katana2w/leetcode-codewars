/*
* https://leetcode.com/problems/plus-one/
*
* Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
* */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = '', c = 0, i = 1;

    while (digits.length || c) {
        c += ~~digits.pop() + (i > 0? 1 : 0);
        res = c % 10 + res;
        c = c > 9;
        i--;
    }
    return res.replace(/^0+/, '').split('');
};

console.log(plusOne([1,2,3]));
console.log(plusOne([9,9,9]));
