/*
*  Easy; Make a box
Given a number as a parameter, return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]
* */

function box(n){
    //your code here
    let arr = [];
    let f = Array.from(Array(n)).fill('-').join('');
    let m = '-'+Array.from(Array(n-2)).fill(' ').join('')+'-';
    for (let i = 0; i < n; i++) {
        ((i === 0) || (i == (n-1))) ? arr.push(f) : arr.push(m);
    }
    return arr;
}

function box(n) {
    const outB = '-'.repeat(n);
    const inB = `-${' '.repeat(n-2)}-`;

    return [outB, ...Array(n-2).fill(inB), outB];
}

function box(length){
    return Array.from({length}, (item, i) => (i == 0 || i == length - 1)?
        `${'-'.repeat(length)}`:`-${' '.repeat(length - 2)}-`)
}

console.log(box(5))