/*
* Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
* */

function smartSum(){
    const args = Array.from(arguments).toString().split(',');
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + +args[i];
    }
    return sum;
}

const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);

function smartSum(...a){
    return eval((a+"").replace(/,/g,"+"))
}

console.log(smartSum(1,2,[[3,4],5],6))