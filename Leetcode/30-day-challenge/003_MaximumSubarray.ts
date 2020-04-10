/*
* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums: Number[]) {

    let maxSum = 0;
    let partialSum = 0;
    if(nums.length === 1) return nums[0];
    if(nums.every(isNegative)) {
        return Math.max.apply(null, nums)
    }

    for (let item of nums) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }

    return maxSum;

};

function isNegative(element: number) {
    return Math.sign(element) === -1 || Math.sign(element) === 0;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([-2,-1]));
console.log(maxSubArray([-2,-1, 0]));
