/*
* Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s1.length < 15.

[input] string s2

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ s2.length < 15.

[output] integer
* */

function commonCharacterCount(s1, s2) {
    let res = 0;
    if(s2.length < s1.length) {
        let temp = s1;
        s1 = s2;
        s2 = temp;
    }
    while(s1.length){
        if(s2.includes(s1.charAt(0))){
            res++;
            s2 = s2.replace(s1.charAt(0),"");
            s1 = s1.slice(1);
        }
        else {
            s1 = s1.slice(1);
        }
    }
    return res;
}