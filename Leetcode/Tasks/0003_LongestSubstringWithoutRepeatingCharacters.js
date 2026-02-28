/*
* Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*
* */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length, ans = 0;
    let numsMap = new Map(); // current index of character
    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        if (numsMap.has(s.charAt(j))) {
            i = Math.max(numsMap.get(s.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        numsMap.set(s.charAt(j), j + 1);
    }
    return ans;
};

console.log(lengthOfLongestSubstring("abcabcbb"))