/*
*The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*
* */

//my solution
function rgb(r, g, b){
    var pad = function(x) { return x.length === 1? "0"+x : x; }
    return pad(Number(r < 0 ? 0 : r > 255 ? 255 : r).toString(16).toUpperCase()) + pad(Number(g < 0 ? 0 : g > 255 ? 255 : g).toString(16).toUpperCase()) + pad(Number(b < 0 ? 0 : b > 255 ? 255 : b).toString(16).toUpperCase());
}

//best solution

function rgb(r, g, b){
    return [r,g,b].map(function(x) {
        return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join('').toUpperCase();
}

function rgb(r, g, b){
    return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}