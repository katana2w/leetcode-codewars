/*
* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*
* */


function findShort(s){
    return s.split(' ').reduce((acc, it) => (acc > it.length ? acc = it.length : acc), 100)
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}