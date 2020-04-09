function sum(a) {

    let currentSum = a;
    console.log('currentSum ', currentSum);
    function f(b) {
        console.log('b ', b);
        console.log('currentSum before ', currentSum);
        currentSum += b;
        console.log('currentSum after', currentSum);
        return f;
    }

    f.toString = function() {
        return currentSum;
    };
    console.log('f ', f);

    return f;
}



// console.log('sum ', sum(3)(4));
console.log('sum ', sum(3)(4)(1)(7));