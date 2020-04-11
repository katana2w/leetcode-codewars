const str = "abc";
str.myNewProperty = "some value";

alert(str.myNewProperty); // undefined


// ----->

const str = new String("abc");
str.myNewProperty = "some value";

alert(str.myNewProperty); // some value

str.myNewProperty = "a new value";

alert(str.myNewProperty); // a new value

// ----->

var str1 = ‘abc’;
var str2 = str1;
str1 === str2 // true


var str1 = ‘abc’;
var str2 = ‘abc’;
str1 === str2 // true
var n1 = 1;
var n2 = 1;
n1 === n2 // also true

// ----->

var str1 =  new String(‘abc’);
var str2 = new String(‘abc’);
str1 === str2 // false
var arr1 = [];
var arr2 = [];
arr1 === arr2 // false

// -----> If you’re working with String objects, you can use the methods valueOf or trim that return a String value

var str1 =  new String(‘abc’);
var str2 = new String(‘abc’);
str1.valueOf() === str2.valueOf() // true
str1.trim() === str2.trim() // true