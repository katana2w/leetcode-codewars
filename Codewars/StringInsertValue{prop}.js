/*
* Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

Inherited object properties should not be applied

An example says more than a thousand words..

Example using object

var s = 'Hello {foo} - make me a {bar}';
var o = {
  foo : 'Jack',
  bar : 'sandwich'
};

format(s, o); // "Hello Jack - make me a sandwich"
Example using array

var s = 'Hello {0} - make me a {1}';
var a = ['Jack', 'sandwich'];

format(s, a); // "Hello Jack - make me a sandwich"
See tests for more information.
*
* */


var format = function (str, obj) {
    Object.keys(obj).forEach(prop => {
        if(obj[prop].indexOf('{')) {
            obj[prop] = obj[prop].split('{').join('[').split('}').join(']')
        }
        str = str.split('{' + prop +  '}').join(obj[prop])
    });
    return str.replace('[', '{').replace(']', '}');
};


var format = function (str, obj) {
    var re = new RegExp('{(' + Object.keys(obj).join('|') + ')}', 'g');
    return str.replace(re, function (match, capture) { return obj[capture] });
};

var format = function (str, obj) {
    return str.replace(/{([^}]+)}/g, function(m, p1) { return p1 in obj ? obj[p1] : m })
};





var obj = { foo : 'Jack', bar : 'sandwich' };

console.log(format('Hello {foo} - make me a {bar}', obj))
console.log(format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', {  bar : 'sandwich {foo}',  foo : 'Jack' }))