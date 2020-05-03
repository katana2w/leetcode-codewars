/*
*https://leetcode.com/problems/product-of-array-except-self/
*
* Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

Accepted
471,123
Submissions
795,733
*
* https://leetcode.com/problems/product-of-array-except-self/solution/
* */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let length = nums.length;

    let answer = new Array(length);

    answer[0] = 1;
    for (let i = 1; i < length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    let R = 1;
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * R;
        R *= nums[i];
    }

    return answer;
};

console.log(productExceptSelf([1,2,3,4]))