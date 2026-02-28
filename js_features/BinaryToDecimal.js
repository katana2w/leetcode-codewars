let bin = "1011";

function bin_to_dec(bin) {
    let dec = 0,
        pow = 1,
        len = bin.length;
    for (let i = len - 1; i >= 0 ; i--) {
        dec += bin[i] * pow;
        pow*=2;
    }
    return dec;
}

console.log(bin_to_dec(bin));