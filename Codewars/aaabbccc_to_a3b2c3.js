function compress(str) {
    let result = '';
    let sum = 1;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]) {
            sum++;
        } else {
            result += str[i] + sum;
        }
        sum = 1;
    }
    return result;
}

