// JavaScript DataTypes

// When working with variables, understanding the DataTypes of the variables is important.

console.log(16 + "Cats"); // result = "16Cats"
console.log("Cats" + 16); // result = "Cats16"

// JS treats a number as a string if added in a sequence with a string

console.log(10 + 4 + "Cats"); // result = "14Cats"
console.log("Cats" + 10 + 4); // result = "Cats104"

// JS reads left to right and processes numbers with strings differently depending
// on the location of both the numbers and the strings.
// In the first example, JS treats 10 and 4 as numbers until it hits its first string.
// Once JS hits a string, all numbers are treated as strings thereafter.
// This is why 10 + 4 = 14 before Cats, but = 104 after cats.

// JS DataTypes are dynamic. We can use typeof to check the data type of a variable.

var x; // undefined
console.log(typeof x);
x = 5; // var is a number
console.log(typeof x);
x = "John"; // var is a string
console.log(typeof x);

// Strings

// Strings can be in single quotes '', double quotes "", or ``.
// `` is recommended since it allows you to use both single and double quotes unimpeded.
// `` also has special properties the other quotation marks do not.
// "John said, "Hello"." will throw an error.
// "John said, " is one string, and "." is a second string. Hello is undefined and out of place.

// Numbers

// Numbers can have decimals or no decimals.

console.log(34);
console.log(34.01);

// Can use exponentials as well.

console.log(34e5);

// JS uses a 64 bit integer system, which has weird limitations and quirks.
// There is a max and min to how far JS can count. Some integer values will return
// a different and unrelated integer value. These issues typically are not common.

// Booleans

// Booleans are true or false. They are used to check conditions.

var x = 5;
var y = 6;
var z = 5;
console.log(x == y); // false
console.log(x == z); // true

// Arrays

// Arrays hold an assortment of data. Arrays are defined with brackets [].

var array = [];
console.log(array); // []
array = [1, 2, 3];
console.log(array); // (3) [1, 2, 3]

// Arrays start with an index of 0 and increment by 1. Index 0 has the value 1.
// Arrays can hold any other data type (strings, objects, etc).

// Objects

// Objects can also hold an assortment of data. Objects are defined with braces {}.
// Objects can do a lot more than just hold data, but will be discussed in the Objects section.

var person = {firstName: "John", lastName: "Doe", age: 50};

console.log(person);
console.log(person.firstName);

// Objects can hold all data types.

// Primitive Data is considered strings, numbers, booleans, and undefined.
// Complex Data is considered functions and objects. Arrays are considered objects.

console.log(typeof array); // object
console.log(typeof person); // object 
