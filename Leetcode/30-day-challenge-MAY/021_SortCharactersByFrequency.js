/*
*  Sort Characters By Frequency
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
* */


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = {}
    for (c of s) {
        if (map[c]) {
            map[c]++
        } else {
            map[c] = 1
        }
    }

    const toStr = (c, count) => {
        let current = c
        while (count > 1) {
            current += c
            count--
        }
        return current
    }
    return Object.keys(map)
        .sort((keyA, keyB) => map[keyB] - map[keyA])
        .map(key => toStr(key, map[key]))
        .join('')
};

console.log(frequencySort('Mymommaalwayssaid,\\"Lifewaslikeaboxofchocolates.Youneverknowwhatyou\'regonnaget.'))
// console.log(frequencySort('Aabb'))
// console.log(frequencySort('tree'))
