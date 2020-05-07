/*
* Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2]
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
   Hide Hint #1
Array was originally in ascending order. Now that the array is rotated, there would be a point in the array where there is a small deflection from the increasing sequence. eg. The array would be something like [4, 5, 6, 7, 0, 1, 2].
   Hide Hint #2
You can divide the search space into two and see which direction to go. Can you think of an algorithm which has O(logN) search complexity?
   Hide Hint #3
All the elements to the left of inflection point > first element of the array.
All the elements to the right of inflection point < first element of the array.
*
* */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }

    let left = 0, right = nums.length - 1;

    if (nums[right] > nums[0]) {
        return nums[0];
    }

    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }

        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        if (nums[mid] > nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};

findMin([3,4,5,6,7,1,2])