function isPalindrom1(str) {
    if (str.toLowerCase().replace(/[^а-яА-ЯёЁ]/g, '') === str.toLowerCase().replace(/[^а-яА-ЯёЁ]/g,
        '').split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}


// or


function isPalindrom(str) {
    var str = str.toLowerCase(),
        lim = str.length - 1,
        i = 0,
        j = str.length - 1;

    while (i <= lim) {
        if (/[^а-яА-ЯёЁ]/.test(str[i])) {
            i += 1;
        }
        if (/[^а-яА-ЯёЁ]/.test(str[j])) {
            j -= 1;
        }
        if (str[i] != str[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
}
console.log(isPalindrom('А роза упала на лапу Азора'));