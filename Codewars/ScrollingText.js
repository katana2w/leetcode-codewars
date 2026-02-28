/*
* Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
Good luck!
* */

function scrollingText(text){
    let arr = [text.toUpperCase()];
    for (let i = 0; i < text.length-1; i++) {
        text = text.slice(-(text.length - 1)).toUpperCase() + text[0].toUpperCase();
        arr.push(text)
    }
    return arr;
}

function scrollingText(text){
    let result = []

    for( var i = 0; i < text.length; i++){
        result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
    }

    return result
}

function scrollingText(text){
    text = text.toUpperCase();

    return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}