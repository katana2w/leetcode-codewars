/*
*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*
* */

//my solution
function humanReadable(seconds) {
    return (Math.trunc(seconds/3600).toString().length === 1 ? "0" + Math.trunc(seconds/3600) : Math.trunc(seconds/3600))  + ":" + (Math.trunc(seconds % 3600 / 60).toString().length === 1 ? "0" + Math.trunc(seconds % 3600 / 60) : Math.trunc(seconds % 3600 / 60)) + ":" + ((seconds % 3600 % 60).toString().length === 1 ? "0" + (seconds % 3600 % 60) : (seconds % 3600 % 60));
}

//best solution
function humanReadable(seconds) {
    return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
}

function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}
