/*
* https://medium.com/@nick3499/codefights-shape-area-challenge-3319d3e6dc62
*
* */

function shapeArea(n) {
    let init = 1;
    return init + (n * ((n - 1) * 2));
}
console.log(shapeArea(4));