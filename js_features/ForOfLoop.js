// Array iteration

const products = ['oranges', 'apples'];

for (const product of products) {
    console.log(product);
}
// 'oranges'
// 'apples'

const products = ['oranges', 'apples'];

for (const [index, product] of products.entries()) {
    console.log(index, product);
}
// 0, 'oranges'
// 1, 'apples'

// In-place destructuring

const persons = [
    { name: 'John Smith' },
    { name: 'Jane Doe' }
];

for (const { name } of persons) {
    console.log(name);
}
// 'John Smith'
// 'Jane Doe'


// Array-like iteration

function sum() {
    let sum = 0;
    for (const number of arguments) {
        sum += number;
    }
    return sum;
}

sum(1, 2, 3); // => 6

// A quick overview of iterables

const array = [1, 2, 3];
const iterator1 = array[Symbol.iterator]();
iterator1.next(); // => { value: 1, done: false }

// String characters iteration

const message = 'hello';

for (const character of message) {
    console.log(character);
}
// 'h'
// 'e'
// 'l'
// 'l'
// 'o'

// Iterate plain JavaScript objects

const person = {
    name: 'John Smith',
    job: 'agent'
};

Object.keys(person).forEach(prop => {
    console.log(prop, person[prop]);
});
// 'name', 'John Smith'
// 'job', 'agent'

const person = {
    name: 'John Smith',
    job: 'agent'
};

for (const [prop, value] of Object.entries(person)) {
    console.log(prop, value);
}
// 'name', 'John Smith'
// 'job', 'agent'

// Iterate DOM collections

const children = document.body.children;

for (const child of children) {
    console.log(child); // logs each child of <body>
}

const allImages = document.querySelectorAll('img');

for (const image of allImages) {
    console.log(image); // log each image in the document
}