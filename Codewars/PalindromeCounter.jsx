/**
 * Background
 * Palindromes are a special type of number (in this case a non-negative integer) that reads the same backwards as forwards. A number defined this way is called palindromic.
 *
 * The following numbers are palindromes: 0, 252, 769967, 1111111.
 *
 * The following numbers are not palindromes: 123, 689, 565656, 12345432.
 *
 * Problem Description
 * In this kata, you are required to build a function that receives two arguments, a and b, and returns the number of integer palindromes between a and b inclusive.
 *
 * Examples
 * If a is 6 and b is 11, the function should output 5 because there are 5 palindromes between 6 and 11 inclusive: 6, 7, 8, 9 and 11.
 *
 * If a is 150 and b is 250, the function should output 10 because there are 10 palindromes between 150 and 250 inclusive: 151, 161, 171, 181, 191, 202, 212, 222, 232 and 242.
 *
 * If a is 1002 and b is 1110, the function should output 0: there are no palindromes between 1002 and 1110 inclusive.
 *
 * Input Constraints
 * Fixed test cases: 0 ≤ a, b ≤ 100 (one hundred)
 *
 * Small test cases: 0 ≤ a, b ≤ 10^5 (one hundred thousand)
 *
 * Medium test cases: 0 ≤ a, b ≤ 10^10 (ten billion)
 *
 * Large test cases: 0 ≤ a, b ≤ 10^15 (one quadrillion)
 *
 * Ideally, a program should pass all the test cases in no more than 800 milliseconds.
 *
 * Edge Cases
 * Note that 0 is palindromic.
 *
 * Numbers starting with the digit 0 do not count, with the exception of 0 itself.
 *
 * This is my first kata created. Hope you enjoy! <3
 */

function countPalUpTo(n) {
    if (n < 0) return 0;
    if (n < 10) return n + 1;

    const s = String(n);
    const L = s.length;
    const halfLen = Math.ceil(L / 2);
    const left = s.slice(0, halfLen); // первая половина как строка

    // Палиндром из первой половины
    const leftNoCenter = left.slice(0, L - halfLen); // отбросить центр для нечётной длины
    const candidate = Number(leftNoCenter + [...left].reverse().join(''));

    // Сколько палиндромов той же длины с «левой половиной» от минимальной до left
    const minLeft = 10 ** (halfLen - 1);
    let sameLen = Number(left) - minLeft + 1;
    if (candidate > n) sameLen -= 1; // если «перебрали» — откатить

    // Сколько палиндромов меньших длин
    const shorter =
        (L % 2 === 0)
            ? Number('10' + '9'.repeat((L - 1) / 2 | 0))
            : Number('1'  + '9'.repeat((L - 1) / 2 | 0));

    return shorter + sameLen;
}

function countPalindromes(a, b) {
    if (a > b) return 0;
    const lo = Math.ceil(a) - 1;
    const hi = Math.floor(b);
    return countPalUpTo(hi) - countPalUpTo(lo);
}


console.log(countPalindromes(21.1,76.2));
