// Destructuring

let a = 1;
let b = 2;

[a, b] = [b, a];

a; // => 2
b; // => 1

// Temporary var

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

a; // => 2
b; // => 1

// Addition and difference

let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

a; // => 2
b; // => 1

// XOR

let a = 1;
let b = 2;

a = a ^ b;
b = a ^ b;
a = a ^ b;

a; // => 2
b; // => 1