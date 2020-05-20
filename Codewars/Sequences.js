/*
*  Description:
An array might have many values. These are ordererd in a specific way. However, it's possible to display them in other order.

Your Task
Given a multi-dimensional array of integers, your goal is to find how many ways you can arrange that same array, so that the values are in a different sequence.

findCombos([1, 2, 3]);
// 6 -> [1, 2, 3], [1, 3, 2],
//      [2, 1, 3], [2, 3, 1],
//      [3, 1, 2], [3, 2, 1]

findCombos([1,2,2]);
// 3 -> [1, 2, 2], [2, 1, 2]
//      [2, 2, 1]

findCombos([2,2,2,2]);
// 1 -> [2, 2, 2, 2]
However, an array might contain another array containing other values. You still have to find the number of possible sequences for these.

Multi-dimensional arrays

findCombos([[1, 2]]);
// 2 -> [[1, 2]], [[2, 1]]

findCombos([[1, 2], [3]]);
// 6 -> [[1, 2], [3]], [[1, 3], [2]],
//      [[2, 1], [3]], [[2, 3], [1]],
//      [[3, 1], [2]], [[3, 2], [1]]
Arrays might be empty. These should be ignored and don't belong to any sequence.

findCombos([1, 2, []]);
// 2 -> [1, 2], [2, 1]

findCombos([[], [2, 2], [3]]);
// 3 -> [2, 2, 3], [3, 2, 2]
//      [2, 3, 2]
The number of nested arrays don't influence the result. The number of sequences only depends on the integers.

findCombos([1, 2, 3]) == findCombos([[1, 2], [3]]);  // true
findCombos([2, 3])    == findCombos([[1, 2], [3]]);  // false

var c1 = findCombos([[[[4]], 5]]); // 2 -> [4, 5], [5, 4]
var c2 = findCombos([1, [2]]);     // 2 -> [1, 2], [2, 1]

c2 == c1; // true
Take note
The array might have nested arrays of any length.
If the array contains less than two values (or just has empty arrays) return 1.
Good luck!
findCombos([312,[333],[3,3,3,[],[[3], 44, [2, []]], 2, []]]); // 7560
*
*  */


const factorial = n => n < 2 ? 1 : n * factorial(n - 1);
const flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;

const findCombos = array => {
    let flarArr = flatten(array);
    if(!flarArr.length) return 1;
    let counts = flarArr.reduce((a, b) => (a[b] = a[b] || 0, a[b]++, a) ,{})
    let denom = 1;
    for (let num in counts)
        denom *= factorial(counts[num]);

    return factorial(flarArr.length) / denom;

}
