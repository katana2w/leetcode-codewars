/*
 *Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
 *
 * */

//MY SOLUTION
String.prototype.camelCase=function(){
    return this.split(' ').map((word,index) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

//BEST SOLUTION

String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}

// Test.describe("Basic tests",_=>{
//     Test.assertEquals("test case".camelCase(), "TestCase");
//     Test.assertEquals("camel case method".camelCase(), "CamelCaseMethod");
//     Test.assertEquals("say hello ".camelCase(), "SayHello");
//     Test.assertEquals(" camel case word".camelCase(), "CamelCaseWord");
//     Test.assertEquals("".camelCase(), "");
// })