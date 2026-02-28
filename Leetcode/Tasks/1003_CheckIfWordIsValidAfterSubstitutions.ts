/**
 * https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/submissions/1891362217/
 *
 * Given a string s, determine if it is valid.
 *
 * A string s is valid if, starting with an empty string t = "", you can transform t into s after performing the following operation any number of times:
 *
 * Insert string "abc" into any position in t. More formally, t becomes tleft + "abc" + tright, where t == tleft + tright. Note that tleft and tright may be empty.
 * Return true if s is a valid string, otherwise, return false.
 *
 *
 *
 * Example 1:
 *
 * Input: s = "aabcbc"
 * Output: true
 * Explanation:
 * "" -> "abc" -> "aabcbc"
 * Thus, "aabcbc" is valid.
 * Example 2:
 *
 * Input: s = "abcabcababcc"
 * Output: true
 * Explanation:
 * "" -> "abc" -> "abcabc" -> "abcabcabc" -> "abcabcababcc"
 * Thus, "abcabcababcc" is valid.
 * Example 3:
 *
 * Input: s = "abccba"
 * Output: false
 * Explanation: It is impossible to get "abccba" using the operation.
 */

function isValid(s: string): boolean {
    const st: string[] = [];

    for (const ch of s) {
        st.push(ch);

        const n = st.length;
        if (
            n >= 3 &&
            st[n - 3] === "a" &&
            st[n - 2] === "b" &&
            st[n - 1] === "c"
        ) {
            st.pop();
            st.pop();
            st.pop();
        }
    }

    return st.length === 0;
};
