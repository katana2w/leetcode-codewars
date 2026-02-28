/*
* Напишите функцию, которая проверяет, что в отсортированном массиве встречается такая пара чисел, которая даёт нужную сумму.

Примеры:
check([1, 2, 3, 6], 9) // true: 6+3=9
check([1, 1, 3, 4], 2) // true: 1+1=2
check([-1, 1, 4, 8], 3) // true: -1+4=3
check([1, 4, 8, 9], 6) // false
* */

function check(array, number) {
    const comp = {};
    for(let i = 0; i < array.length; i++) {
        if(comp[array[i]] >= 0) {
            return true;
        }
        comp[number - array[i]] = i;
    }
    return false;
}

check([1, 2, 3, 6], 9);