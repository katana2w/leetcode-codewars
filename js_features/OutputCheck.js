/*
* The output would be 0. The delete operator is used to delete properties from an object.
* Here x is not an object but a local variable. delete operators don't affect local variables.
* */

var output = (function(x){
    delete x;
    return x;
})(0);

console.log(output); // 0

/*
* The output would be 1. The delete operator is used to delete the property of an object.
* Here x is not an object, but rather it's the global variable of type number.
* */

var x = 1;
var output = (function(){
    delete x;
    return x;
})();

console.log(output); // 1

/*
* The output would be undefined. The delete operator is used to delete the property of an object.
* Here, x is an object which has the property foo, and as it is a self-invoking function, we will
* delete the foo property from object x. After doing so, when we try to reference a deleted property
* foo, the result is undefined.
* */

var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
})();

console.log(output);

/*
*The output would be xyz. Here, emp1 object has company as its prototype property.
* The delete operator doesn't delete prototype property.

emp1 object doesn't have company as its own property. You can test it
* console.log(emp1.hasOwnProperty('company')); //output : false. However, we can delete
* the company property directly from theEmployee object using delete Employee.company. Or, we can
* also delete the emp1 object using the __proto__ property delete emp1.__proto__.company.
* */

var Employee = {
    company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);


// ------------------------------->

var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];

console.log(trees) // ["redwood", "bay", "cedar", empty, "maple"] and console.log(trees.length) === 5

/*
* Number + Number -> Addition
Boolean + Number -> Addition
Boolean + Number -> Addition
Number + String -> Concatenation
String + Boolean -> Concatenation
String + String -> Concatenation
* */

var bar = true;
console.log(bar + 0);           // 1
console.log(bar + "xyz");       // 'truexyz'
console.log(bar + true);        // 2
console.log(bar + false);       // 1

/*
* The output would be undefined. According to the associativity rule, operators with the same
* precedence are processed based on the associativity property of the operator. Here, the
* associativity of the assignment operator is Right to Left, so typeof y will evaluate first ,
* which is undefined. It will be assigned to z, and then y would be assigned the value of z and
* then z would be assigned the value 1.
* */

var z = 1, y = z = typeof y;
console.log(y); // undefined


// NFE (Named Function Expression
var foo = function bar(){ return 12; };
typeof bar(); // Reference Error

var foo = function bar(){
    // foo is visible here
    // bar is visible here
    console.log(typeof bar()); // Work here :)
};
// foo is visible here
// bar is undefined here


// -------------------->

var salary = "1000$";

(function () {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
})();

/*
* The output would be undefined, 5000$. Newbies often get tricked by JavaScript's hoisting concept.
* In the code above, you might be expecting salary to retain its value from the outer scope until
* the point that salary gets re-declared in the inner scope. However, due to hoisting, the salary value
* was undefined instead. To understand this better, have a look of the code below:
*
* */

var salary = "1000$";

(function () {
    var salary = undefined;
    console.log("Original salary was " + salary);

    salary = "5000$";

    console.log("My New Salary " + salary);
})();

