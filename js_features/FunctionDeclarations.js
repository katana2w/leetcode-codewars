var foo = function(){
    // Some code
};

function bar(){
    // Some code
};

/*
* The main difference is the function foo is defined at run-time whereas function bar is defined at parse time.
* To understand this in better way, let's take a look at the code below:
*
* */

// Run-Time function declaration
// <script>
// foo(); // Calling foo function here will give an Error
// var foo = function(){
//     console.log("Hi I am inside Foo");
// };
// </script>

// <script>
// Parse-Time function declaration
// bar(); // Calling foo function will not give an Error
// function bar(){
//     console.log("Hi I am inside Foo");
// };
// </script>

/*
Another advantage of this first-one way of declaration is that you can declare functions
based on certain conditions. For example:
 */


if(testCondition) {// If testCondition is true then
    var foo = function(){
        console.log("inside Foo with testCondition True value");
    };
}else{
    var foo = function(){
        console.log("inside Foo with testCondition false value");
    };
}

// However, if you try to run similar code using the format below, you'd get an error:
if(testCondition) {// If testCondition is true then
    function foo(){
        console.log("inside Foo with testCondition True value");
    };
}else{
    function foo(){
        console.log("inside Foo with testCondition false value");
    };
}