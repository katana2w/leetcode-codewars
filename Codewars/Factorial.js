function factorial(n){
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1)
}

let factorial = n => n ? n * factorial(n-1) : 1;