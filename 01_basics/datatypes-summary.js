//  Primitive -- call by value --- a copy of the value is allotted to the user for use

// 7 types : String, Number, Boolean, null, undefined, Symbol(used in Advanced js to make something unique), BigInt

//JS is dynamically typed. This means that variables in JS can hold values of any type without specifying what type it will hold ahead of time.

const score = 100; // note we didn't define datatype fpr this variable
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // null is not 0
let userEmail; // the value of this variable is undefined
const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 345678687436648754879n;

// Reference Type(Non-Primitive) -- call by reference -- in memory, user is allotted the permit to use reference of such datatypes

//Array, Objects, Functions

const heros = ["Shaktimaan", "Naagraj", "Doga"]; //Array
let myObj = {
  name: "Aman",
  age: 18,
};

const myFunction = function () {
  console.log("Hello World");
};


// console.log(typeof outsideTemp); //note that null gives object as datatype
// console.log(typeof NaN);   // note that NaN returns number as datatype

console.log(typeof myFunction);
