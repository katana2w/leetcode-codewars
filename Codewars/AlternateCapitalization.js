/*
* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*
* */


function capitalize(s){
    return s.split('').reduce((acc, it, i) => {
        if(i % 2 === 0) {
            acc[0]+= it.toUpperCase();
            acc[1]+= it.toLowerCase();
        } else {
            acc[0]+= it.toLowerCase();
            acc[1]+= it.toUpperCase();
        }
        return acc;
    }, ['', '']);
};

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};

function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
        [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}