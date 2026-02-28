/*
* You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.



Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10


Note: Your solution should run in O(log n) time and O(1) space.
*
* */


/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left)/2);
        let half_even = (right - mid) % 2 == 0;
        if (nums[mid] === nums[mid + 1]) {
            if (half_even) {
                left = mid + 2;
            } else {
                right = mid - 1;
            }
        } else if(nums[mid] === nums[mid - 1]) {
            if (half_even) {
                right = mid - 2;
            } else {
                left = mid + 1;
            }
        } else {
            return nums[mid];
        }
    }

    return nums[left];
};

console.log(singleNonDuplicate([1,1,3,3,4,4,8,8]))
