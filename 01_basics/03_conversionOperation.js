let score = "33abc";

console.log(typeof score); //Output-string
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//Output - number
console.log(valueInNumber); //Output- NaN

// let score1=Number(null)
// console.log(score1);  //Output - 0
let score1 = null;
console.log(score1); null

//let score2=undefined
let score2 = Number(undefined);
console.log(typeof score2); //output-number
console.log(score2); //output- NaN

// let score4=true
let score4 = true;
let valueInNumber1 = Number(score4);
console.log(typeof valueInNumber1); // OUTPUT-NUMBER
console.log(valueInNumber1);// OUTPUT - 1

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "abc";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // output - true


// 1=> true
// 0 => false
// "" => false
// "aman" => true
let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber); //output- 33
console.log(typeof stringNumber); //output - string
