/*
* Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.



Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False


Note:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
   Hide Hint #1
Obviously, brute force will result in TLE. Think of something else.
   Hide Hint #2
How will you check whether one string is a permutation of another string?
   Hide Hint #3
One way is to sort the string and then compare. But, Is there a better way?
   Hide Hint #4
If one string is a permutation of another string then they must one common metric. What is that?
   Hide Hint #5
Both strings must have same character frequencies, if one is permutation of another. Which data structure should be used to store frequencies?
   Hide Hint #6
What about hash table? An array of size 26?
* */


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1 === null || s1.length === 0) return false;
    if (s2 === null || s2.length === 0) return false;
    let c_count = Array.from({length: 26}).fill(0);
    for(let c of s1) {
        c_count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    let left = 0;
    let kk = 0;
    let count = s1.length;
    while (kk < s2.length) {
        if (c_count[s2.charAt(kk++).charCodeAt(0) - 'a'.charCodeAt(0)]-- >= 1) {
            count--;
        }
        if (count === 0) {
            return true;
        }
        if (kk - left === s1.length && c_count[s2.charAt(left++).charCodeAt(0) - 'a'.charCodeAt(0)]++ >= 0) {
            count++;
        }
    }

    return false;
};
