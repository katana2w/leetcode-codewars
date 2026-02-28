/*
* To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
Here's a nice Youtube video about currying, which might help you if this is new to you.
* */

// const multiplyAll = array => int => array.map(number => number * int)
//
// function multiplyAll(arr) {
//     return function(n) {
//         return arr.map(x => x * n);
//     }
// }


var a = 4, b = 5, c = 8;
var term = [a++, ++a, --b, ++b, c++];
console.log(a, b, c, term)