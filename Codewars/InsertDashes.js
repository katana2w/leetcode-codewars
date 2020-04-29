/*
* Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Note that the number will always be non-negative (>= 0).
*
* */


// MY SOLUTION

function insertDash(num) {
    let numArr = num.toString();
    let res = '';
    let prev = '';
    for(const x of numArr) {
        if((prev && prev %2 !== 0) && (x && x%2 !== 0)) {
            res+='-' + x;
        } else{
            res+= x;
        }
        prev = x;
    }

    return res
}

//BEST SOLUTIONS

function insertDash(num) {
    return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}


function insertDash(num) {
    var s = num + '', output = '';
    for (var i = 0; i < s.length; i++) { output += s[i] + (s[i] % 2 * s[i+1] % 2 ? '-' : '') }
    return output;
}