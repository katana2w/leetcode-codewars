// Find the value of a given bit

valueAtBit = function(num, bit) {
    let n = num.toString(2);

    return bit > n.length
        ? 0
        : parseInt(n.toString(2)[n.length - bit], 2)
}

// Return the base10 representation of a binary string

base10 = function(str) {
    return parseInt(str, 2);
}

// Convert an eight-bit number to a binary string

convertToBinary = function(num) {
    return ("00000000"+num.toString(2)).substr(-8)
}

// Multiply with precision

multiply = function(a, b) {
    return +(a * b).toFixed(8)
}