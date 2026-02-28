/**
 * https://leetcode.com/problems/long-pressed-name/description/
 *
 * Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
 *
 * You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.
 *
 *
 *
 * Example 1:
 *
 * Input: name = "alex", typed = "aaleex"
 * Output: true
 * Explanation: 'a' and 'e' in 'alex' were long pressed.
 * Example 2:
 *
 * Input: name = "saeed", typed = "ssaaedd"
 * Output: false
 * Explanation: 'e' must have been pressed twice, but it was not in the typed output.
 */
function isLongPressedName(name: string, typed: string): boolean {
    let i = 0; // pointer in name
    let j = 0; // pointer in typed

    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {
            // long press of previous typed char
            j++;
        } else {
            return false;
        }
    }

    return i === name.length;
};
