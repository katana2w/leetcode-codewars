/*
* Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
isLucky(n) = true;
For n = 239017, the output should be
isLucky(n) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A ticket number represented as a positive integer with an even number of digits.

Guaranteed constraints:
10 ≤ n < 106.

[output] boolean

true if n is a lucky ticket number, false otherwise.
[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
*
* */


function isLucky(n) {
    let str = n.toString();
    let res = false;
    if (str.length % 2 === 0) {
        let str1 = str.slice(0, str.length/2);
        let str2 = str.slice(-str.length/2);
        if(str1.split('').reduce((acc, it) => (acc+=+it), 0) === str2.split('').reduce((acc, it) => (acc+=+it), 0)) return true;
    }
    return res;
}

isLucky(1230);