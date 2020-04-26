/*
*Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.



If there is no common subsequence, return 0.



Example 1:

Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
   Hide Hint #1
Try dynamic programming. DP[i][j] represents the longest common subsequence of text1[0 ... i] & text2[0 ... j].
   Hide Hint #2
DP[i][j] = DP[i - 1][j - 1] + 1 , if text1[i] == text2[j] DP[i][j] = max(DP[i - 1][j], DP[i][j - 1]) , otherwise
*
*
* */


/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length, n = text2.length;

    // lookup table stores solution to already computed sub-problems
    // i.e. T[i][j] stores the length of LCS of substring
    // X[0..i-1] and Y[0..j-1]
    let T = new Array();
    for (let j = 1; j <= m+1; j++) {
        T.push(new Array(n+1))
    }

    for (let i=0; i<=m; i++)
    {
        for (let j=0; j<=n; j++)
        {
            if (i == 0 || j == 0){
                T[i][j] = 0;
            } else if (text1[i-1] == text2[j-1]) {
                T[i-1][j-1] === undefined?T[i-1][j-1]=0:T[i-1][j-1];
                T[i][j] = T[i-1][j-1] + 1;
            } else {
                T[i-1][j]===undefined?T[i-1][j]=0:T[i-1][j];
                T[i][j-1]===undefined?T[i][j-1]=0:T[i][j-1];
                T[i][j] = Math.max(T[i-1][j], T[i][j-1]);
            }
        }
    }
    return T[m][n];
};

console.log(longestCommonSubsequence("XMJYAUZ", "MZJAWXU"));