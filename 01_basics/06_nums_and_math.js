const score = 400;
// console.log(score);//400

const balance = new Number(100);
console.log(balance);//[Number: 100]

// console.log(balance.toString().length); //3

/*
.toFixed() function Returns a string representing a number in fixed-point notation.

parameter to be passed : fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
*/
console.log(balance.toFixed(2));//100.00

const otherNumber = 123.8966;
/*
.toPrecision() Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

parameter to be passed: precision — Number of significant digits. Must be in the range 1 - 21, inclusive.
*/
console.log(otherNumber.toPrecision(4));//123.9
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//10,00,000
//.toLocaleString() returns a number as a string, using local language format.  Notice the position of commas in the above output

//////////// ====== MATHS=======================///////////////////

console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.pow(2,4));//16
console.log(Math.min(4,5,1,3,0));//0
console.log(Math.max(4,5,1,3,0));//5

console.log(Math.random());// generates any random number between 0-1 e.g, 0.38482911504795325
console.log(Math.random() * 10 + 1);//multiplied by 10 to ensure that the range of value increases beyond 0-1  Output - 3.5607082832564676
console.log(Math.floor(Math.random() * 10 + 1)); //10

//generating a number between two given values(here named as min & max)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);//16
