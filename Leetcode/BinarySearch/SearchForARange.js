/*
* Search for a Range

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;
    let res2 = [];
    if(right === 0) return [-1, -1];
    if(nums.indexOf(target) === -1) return [-1, -1];
    if(right === 1 && nums[0] === target) return [0, 0]

    while(left < right) {
        mid = Math.floor((left + right)/2);
        if(nums[mid] === target) {
            left = mid;
            right = mid;
            res2.push(mid);
            do {
                left = (left - 1) > -1 ? left - 1 : 0;
                right = (right + 1) > -1 ? right + 1 : 0;
                if(nums[left] === target) {
                    res2.push(left);
                } else {
                    left = 0;
                }
                if(nums[right] === target) {
                    res2.push(right);
                } else {
                    right = nums.length - 1
                }
            } while (left !== 0 || right !== nums.length - 1);
            res2 = res2.sort((a, b) => a - b)
            return [res2[0], res2[res2.length - 1]]
        }
        if(nums[mid] > target) {
            right = mid;
        } else if(nums[mid] < target) {
            left = mid+1
        }

    }

    return [-1,-1];
};

// searchRange([5,7,7,8,8,10], 6);
// searchRange([2, 2], 2);
// console.log(searchRange([1,3], 1))
// console.log(searchRange([1,2,3], 3))
console.log(searchRange([0,0,1,1,2,2,2,2,3,3,4,4,4,5,6,6,6,7,8,8], 4))
// console.log(searchRange([2,2], 3))