// Dot property accessor

const hero = {
    name: 'Batman'
};

// Dot property accessor
// hero.name; // => 'Batman'

//--------------- PROBLEM --------------------

/*
* The dot property accessor works correctly when the property name is a valid identifier.
* An identifier in JavaScript contains Unicode letters, $, _, and digits 0..9, but cannot start with a digit.
* */

const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
};

// weirdObject.prop-3; // => NaN
// weirdObject.3;      // throws SyntaxError: Unexpected number

// Square brackets property accessor -- expression[expression]

const property = 'name';
const hero = {
    name: 'Batman'
};

// Square brackets property accessor:
// hero['name'];   // => 'Batman'
// hero[property]; // => 'Batman'

// Object destructuring -- const { identifier } = expression;

const hero = {
    name: 'Batman'
};

// Object destructuring:
// const { name } = hero;
// name; // => 'Batman'


// Alias variable -- const { identifier: aliasIdentifier } = expression;

const hero = {
    name: 'Batman'
};

// Object destructuring:
// const { name: heroName } = hero;
// heroName; // => 'Batman'

// Dynamic property name -- const { [expression]: identifier } = expression;

const property = 'name';
const hero = {
    name: 'Batman'
};

// Object destructuring:
// const { [property]: heroName } = hero;
// heroName; // => 'Batman'

// When the property doesn’t exist

const hero = {
    characterName: 'Batman'
};

// hero.name;    // => undefined
// hero['name']; // => undefined
// const { name } = hero;
// name;         // => undefined