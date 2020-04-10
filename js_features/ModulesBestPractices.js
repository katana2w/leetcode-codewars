// DONT USER EXPORT DEFAULT

// greeter.js
export class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

import { Greeter } from './greeter';

// NO WORK DURING IMPORT

// greeter.js
export class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

// Bad: parsing happens when the module is imported
import { configuration } from 'configuration';

export function AboutUs() {
    return <p>{configuration.data.siteName}</p>;
}

// configuration.js
let parsedData = null;

export const configuration = {
    // Good
    get data() {
        if (parsedData === null) {
            parsedData = JSON.parse(bigJsonString);
        }
        return parsedData;
    }
};

// Good: JSON parsing doesn't happen when the module is imported
import { configuration } from 'configuration';

export function AboutUs() {
    // JSON parsing happens now
    return <p>{configuration.data.companyDescription}</p>;
}

// Favor high cohesion modules whose functions, classes, variables are closely related and
// perform a common task. Refactor big low cohesion modules by splitting them into multiple high cohesion ones.

// Use absolute paths instead of the long relative paths.


// VARIANT

import moduleA from 'path';
import moduleB from 'path';
import moduleC from 'path';

// moduleA, moduleB and moduleC are equal

// moduleA === moduleB; // => true
// moduleB === moduleC; // => true

