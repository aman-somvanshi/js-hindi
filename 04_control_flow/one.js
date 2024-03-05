// if

const isUserLoggedIn = true;
const temperature = 41;
if (2 === "2") {
  console.log("executed");
}

// Comparison Operators -- <, >, <=, >=, ==, !=, === (Strict equal checks datatype and value both)
// The "!=="" operator in JavaScript is a strict inequality operator. It returns true if the operands are not equal and/or not of the same type
// 5 !== "5" // true, because the number 5 is not the same as the string "5"
// 5 !== 5 // false, because both are the number 5
// 2 !==6

// if(temperature === 40 ){
//     console.log("Temperature is less than 50");
// }
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("This line is Always executed")
// Assignment Operator -- =

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(`User power: ${power}`);

// }

// console.log(`User power: ${power}`);

// const balance = 1000
// if (balance > 500)
// console.log(`test`),   //not recommended
// console.log(`test2`);

// if (balance < 500) {
//     console.log(`less than 500`);
// } else if(balance < 750){
//     console.log(`less than 750`);
// } else if(balance < 900){
//     console.log(`less than 900`);
// } else {
//     console.log(`less than 1200`);
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard && 2 == 3) {
  console.log(`Allow to buy course`);
}
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log(`Allow to buy course`);
}
