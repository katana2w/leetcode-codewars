/*
*  Task
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
* */

function deleteDigit(n) {
    //coding and coding..
    let res = 0;
    for (let i = 0; i < n.toString().length; i++) {
        let ns = n.toString().slice(0, i) + n.toString().slice(i + 1, n.toString().length);
        res = Math.max(+ns, res);
    }
    return res;
}

function deleteDigit(n) {
    const s = String(n)
    return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
}

console.log(deleteDigit(152))