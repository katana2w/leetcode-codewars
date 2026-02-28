/*
*   Majority Element
Solution
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
* */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let arr = nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length/2)]
};

function majorityElement(nums: number[]): number {
    let candidate;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1
    }

    return candidate;
};
