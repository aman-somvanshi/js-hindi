//  Primitive -- call by value --- a copy of the value is allotted to the user for use

// 7 types : String, Number, Boolean, null, undefined, Symbol(used in Advanced js to make something unique), BigInt

//JS is dynamically typed. This means that variables in JS can hold values of any type without specifying what type it will hold ahead of time.

const score = 100; // note we didn't define datatype for this variable
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null; // null is not 0
let userEmail; // the value of this variable is undefined
const id = Symbol("123");
console.log(id);//Symbol(123)
const anotherId = Symbol("123");

console.log(id === anotherId);//false

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


console.log(typeof outsideTemp); //note that null gives object as datatype
console.log(typeof NaN);   // note that NaN returns number as datatype
console.log(typeof undefined);//note that undefined returns undefined as datatype

console.log(typeof myFunction);//function



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Memories

// Stack is used in Primitive datatypes---always gives a copy of the defined variable

// Heap is used in non-Primitive datatypes--- gives a reference of the Original value

let myName="Aman"

let anotherName=myName
anotherName="C3PO"
console.log(anotherName);//C3PO
console.log(myName);//Aman

// In above cases copies of the original value that is, of the variable myName is being given to the variable anotherName

//UserOne is stored in Heap as it is an object
let userOne={
    email:"ab@google.com",
    upi:"user@ybl"
}

let userTwo = userOne  // Here both the variables are being referenced to the same location

userTwo.email="aman@google.com"
console.log(userOne);//{ email: 'aman@google.com', upi: 'user@ybl' }
console.log(userTwo);//{ email: 'aman@google.com', upi: 'user@ybl' }

//notice that on changing the value of email key of userTwo object, the value of email key of userOne also changes as both the objects were pointing to the same location in the heap
// above signifies that the value is changed in both the objects