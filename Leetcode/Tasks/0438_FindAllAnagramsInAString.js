/*
*  Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
* */


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];

    if (s === null || s.length === 0) return result;

    let c_count = Array.from({length: 26}).fill(0);
    for(let c of p) {
        c_count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
    }
    let left = 0;
    let kk = 0;
    let count = p.length;
    while (kk < s.length) {
        if (c_count[s.charAt(kk++).charCodeAt(0) - 'a'.charCodeAt(0)]-- >= 1) {
            count--;
        }
        if (count === 0) {
            result.push(left);
        }
        if (kk - left === p.length && c_count[s.charAt(left++).charCodeAt(0) - 'a'.charCodeAt(0)]++ >= 0) {
            count++;
        }
    }

    return result;
};

console.log(findAnagrams("cbaebabacd", "abc"))
