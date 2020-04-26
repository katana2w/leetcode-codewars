/*
* There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*
* */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//     var merged = [];
//     while(nums1.length || nums2.length){
//         if(nums1.length && nums2.length){
//             if(nums1[0] < nums2[0]){
//                 merged.push(nums1.shift());
//             }else{
//                 merged.push(nums2.shift());
//             }
//         }else if(nums1.length){
//             merged = merged.concat(nums1.splice(0));
//         }else{
//             merged = merged.concat(nums2.splice(0));
//         }
//     }
//     let answer;
//     if(merged.length % 2 == 0){
//         let halfWayIndex = merged.length/2;
//         answer = (merged[halfWayIndex - 1] + merged[halfWayIndex])/2;
//     }else{
//         answer = merged[Math.floor(merged.length/2)];
//     }
//
//     return answer;
// }

var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    if(nums1[m - 1] <= nums2[0]) {
        return (nums1[m - 1] + nums2[0])/2;
    }
    if(nums2[n - 1] <= nums1[0]) {
        return (nums2[n - 1] + nums1[0])/2;
    }
    if (m > n) { // to ensure m<=n
        let temp = nums1; nums1 = nums2; nums2 = temp;
        let tmp = m; m = n; n = tmp;
    }
    let iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && nums2[j-1] > nums1[i]){
            iMin = i + 1; // i is too small
        }
        else if (i > iMin && nums1[i-1] > nums2[j]) {
            iMax = i - 1; // i is too big
        }
        else { // i is perfect
            let maxLeft = 0;
            if (i == 0) { maxLeft = nums2[j-1]; }
            else if (j == 0) { maxLeft = nums1[i-1]; }
            else { maxLeft = Math.max(nums1[i-1], nums2[j-1]); }
            if ( (m + n) % 2 == 1 ) { return maxLeft; }

            let minRight = 0;
            if (i == m) { minRight = nums2[j]; }
            else if (j == n) { minRight = nums1[i]; }
            else { minRight = Math.min(nums2[j], nums1[i]); }

            return (maxLeft + minRight) / 2.0;
        }
    }
    return 0;
};

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
// console.log(findMedianSortedArrays([1,3,8,9,15], [7,11,18,19,21,25]));