// Return what fn returns using arr as arguments
argsAsArray = function(fn, arr) {
    return fn.apply(this, arr)
}

// Return a function that takes an argument
// and concats 'str' and the argument
functionFunction = function(str) {
    return function () {
        return str.concat(...arguments)
    }
}

// Return an array of closures calling fn on array items

makeClosures = function(arr, fn) {
    var funcs = [];
    for (var i = 0, l = arr.length; i < l; i++) {
        (function(i) {
            funcs[i] = function() {
                return fn(arr[i]);
            };
        }(i));
    }
    return funcs
}

// Return a function that takes one arg
// and return the result of fn with str1,
// str2 and arg.
partial = function(fn, str1, str2) {
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
        var remainingArgs = Array.prototype.slice.call(arguments)
        return fn.apply(null, args.concat(remainingArgs))
    }
}

// Returns sum of all arguments
sumArguments = function() {
    let sum = 0;
    for (let i of arguments) {
        sum += i;
    }
    return sum;
}

// Call fn with all the arguments
// and return results
callIt = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args)
}

