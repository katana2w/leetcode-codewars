// Let’s say you write a simple JavaScript module:
//


// // stringUtils.js
    export function equalsIgnoreCase(string1, string2) {
        return string1.toLowerCase() === string2.toLowerCase();
    }


// This is a module stringUtils. The module has a named export equalsIgnoreCase, which is a function that compares 2 strings ignoring the case.
//
// Everything looks good so far.
//
//     Now, let’s try to import equalsIgnoreCase function from stringUtils module inside of another JavaScript module app:
//


// // app.js
    import { equalsIgnoreCase } from './stringUtils';

    equalsIgnoreCase('Hello', 'hello'); // => true


// Most likely you would write the code the following way:
//
//     JavaScript Import Module Difficult Autocomplete
//
// First, you have to write the import names import { }. At this step, the IDE cannot give any suggestions about the available names to import.
//
//     Then you continue writing from './stringUtils'. Then move back to curly brackets and expand autocomplete to select the names to import.
//
//     Despite all the good things about ES2015 modules, the import module syntax makes difficult to use autocomplete.