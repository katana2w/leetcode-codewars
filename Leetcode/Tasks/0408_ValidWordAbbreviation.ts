/**
 * https://leetcode.com/problems/valid-word-abbreviation/description/
 *
 * A string can be abbreviated by replacing any number of non-adjacent, non-empty substrings with their lengths. The lengths should not have leading zeros.
 *
 * For example, a string such as "substitution" could be abbreviated as (but not limited to):
 *
 * "s10n" ("s ubstitutio n")
 * "sub4u4" ("sub stit u tion")
 * "12" ("substitution")
 * "su3i1u2on" ("su bst i t u ti on")
 * "substitution" (no substrings replaced)
 * The following are not valid abbreviations:
 *
 * "s55n" ("s ubsti tutio n", the replaced substrings are adjacent)
 * "s010n" (has leading zeros)
 * "s0ubstitution" (replaces an empty substring)
 * Given a string word and an abbreviation abbr, return whether the string matches the given abbreviation.
 *
 * A substring is a contiguous non-empty sequence of characters within a string.
 *
 *
 *
 * Example 1:
 *
 * Input: word = "internationalization", abbr = "i12iz4n"
 * Output: true
 * Explanation: The word "internationalization" can be abbreviated as "i12iz4n" ("i nternational iz atio n").
 * Example 2:
 *
 * Input: word = "apple", abbr = "a2e"
 * Output: false
 * Explanation: The word "apple" cannot be abbreviated as "a2e".
 *
 *
 * Constraints:
 *
 * 1 <= word.length <= 20
 * word consists of only lowercase English letters.
 * 1 <= abbr.length <= 10
 * abbr consists of lowercase English letters and digits.
 * All the integers in abbr will fit in a 32-bit integer.
 */

function validWordAbbreviation(word: string, abbr: string): boolean {
    let i = 0;
    let j = 0;

    while (i < word.length && j < abbr.length) {
        const ch = abbr[j];

        if (ch >= "0" && ch <= "9") {
            if (ch === "0") return false;

            let num = 0;
            while (j < abbr.length) {
                const c = abbr[j];
                if (c < "0" || c > "9") break;
                num = num * 10 + (c.charCodeAt(0) - 48);
                j++;
            }

            i += num;
            if (i > word.length) return false;
        } else {
            if (word[i] !== ch) return false;
            i++;
            j++;
        }
    }

    return i === word.length && j === abbr.length;
};
