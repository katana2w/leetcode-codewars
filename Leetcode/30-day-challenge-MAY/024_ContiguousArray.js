/*

https://leetcode.com/problems/contiguous-array/solution/
*  Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000.
* */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let map = new Map();
    map.set(0, -1);
    let maxlen = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] == 1 ? 1 : -1);
        if (map.has(count)) {
            maxlen = Math.max(maxlen, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }
    return maxlen;
};

console.log(findMaxLength([1,0,1,1,1,0,1,1,0,0]))
