/*
*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*
* */

// decision with O(n)
//
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     return nums.indexOf(target)
// };

// decision woth O(log n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function(nums, target, start = 0, end = nums.length - 1) {
//     let mid = Math.round((start + end) / 2);
//
//     if (start > end) return -1;
//
//     if (nums[mid] === target) return mid;
//     if (nums.length === 2) {
//         if (nums[0] === target) {
//             return 0;
//         } else if (nums[1] === target) {
//             return 1;
//         } else {
//             return -1;
//         }
//     }
//     if(nums[start] <= nums[mid]) {
//         if(nums[start] <= target && nums[mid] >= target) {
//             return search(nums, target, start, mid - 1);
//         } else {
//             return search(nums, target, mid + 1, end);
//         }
//     } else {
//         if(nums[mid] <= target && nums[end] >= target) {
//             return search(nums, target, mid+1, end);
//         } else {
//             return search(nums, target, start, mid+1);
//         }
//     }
// };

var search = function(nums, target, start = 0, end = nums.length - 1) {
    let mid = Math.round((start + end) / 2);

    if (start > end) return -1;

    if (nums[mid] === target) return mid;
    if (nums[start] <= nums[mid]) {
        if (target >= nums[start] && target <= nums[mid]) {
            return search(nums, target, start,mid-1);
        }
        return search(nums, target,mid+1, end);
    }

    if (target >= nums[mid] && target <= nums[end]) {
        return search(nums, target,mid+1, end);
    }

    return search(nums, target, start,mid-1);
}

// public int search(int[] nums, int target) {
//     int left = 0;
//     int right= nums.length-1;
//
//     while(left<=right){
//         int mid = left + (right-left)/2;
//         if(target==nums[mid])
//             return mid;
//
//         if(nums[left]<=nums[mid]){
//             if(nums[left]<=target&& target<nums[mid]){
//                 right=mid-1;
//             }else{
//                 left=mid+1;
//             }
//         }else{
//             if(nums[mid]<target&& target<=nums[right]){
//                 left=mid+1;
//             }else{
//                 right=mid-1;
//             }
//         }
//     }
//
//     return -1;
// }

console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([4,5,6,7,0,1,2], 3))
// console.log(search([3,1], 0))
// console.log(search([5,1,3], 0))