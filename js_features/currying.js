function sum(a) {

    let currentSum = a;
    function f(b) {
        console.log('b ', b);
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}

var add = function (a) {
    var sum = a;

    var inner = function (b) {
        sum += b;
        return inner;
    };

    inner.valueOf = function () {
        return sum;
    };

    return inner;
};



// console.log('sum ', sum(3)(4));
console.log('sum ', sum(3)(4)(1)(7));

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function sum22(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum22);

// alert( curriedSum(1, 2, 3) ); // 6, still callable normally
// alert( curriedSum(1)(2,3) ); // 6, currying of 1st arg
// alert( curriedSum(1)(2)(3) ); // 6, full currying


function sum5(a) {
    let sumx = (b) => sum(a+b);
    sumx.toString = () => a;
    return sumx;
}

// Почему это работает
//
//
// let sumx = (b) => sum(a+b); //благодаря тому, что суммирование организовано так, аргументом sum всегда выступает сумма, следовательно аргумент sum по завершению хранит в себе искомую сумму.
// sumx.toString = () => a; //использую замыкание, обращаюсь к самому последнему аргументу sum, то есть к искомой сумме.

console.log('sum 5 ', sum5(3)(4)(1)(7));