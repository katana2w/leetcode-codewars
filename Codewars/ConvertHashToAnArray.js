/*
* Description:
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.

Good Luck!
*
* */

const convertHashToArray = o => Object.entries(o).sort();