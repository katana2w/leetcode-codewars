/*
* Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
* */

var capitals = function (word) {
    // Write your code here
    let res = [];
    for (let i = 0 ; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            res.push(i);
        }
    }
    return res;
};

var capitals = function (word) {
    return word.split('').reduce(function(n, l, i){
        return /[A-Z]/.test(l) && n.push(i), n;
    }, []);
};