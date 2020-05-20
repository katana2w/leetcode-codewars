/*
*  Given a sorted array arr, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.



Example 1:

Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
Example 2:

Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]


Constraints:

1 <= k <= arr.length
1 <= arr.length <= 10^4
Absolute value of elements in the array and x will not exceed 104
* */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let res = [];
    if(x < arr[0]) {
        arr.length = k;
        return arr;
    }
    if(x > arr[arr.length - 1]) {
        return arr.slice(-k);
    }
    if(arr.length === 1) return arr;
    let start = 0, end = arr.length, mid = 0;


    while(start < end) {
        mid = Math.floor(start + (end - start) / 2);


        if (x - arr[mid] > arr[mid + k] - x) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return arr.slice(start, start + k);
};

// console.log(findClosestElements([1,1,1,10,10,10], 1, 9))
console.log(findClosestElements([1,2,3,4,5], 4, 3))
