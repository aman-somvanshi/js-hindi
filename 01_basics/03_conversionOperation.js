let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let  valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1=null
//let score1=Number(null)
console.log(score1);

//let score2=undefined
let score2=Number(undefined)
console.log(typeof score2);
console.log(score2);

// let score4=true
let score4=true
let valueInNumber1=Number(score4)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "abc"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1=> true
// 0 => false
// "" => false
// "aman" => true


let someNumber = 33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);