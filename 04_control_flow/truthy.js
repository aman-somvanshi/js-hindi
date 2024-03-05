// const userEmail=`h@aman.com` //truthy value --this is assumed true if a value is assigned to the variable...if empty string, then it is assumed as false

const userEmail=[]

if (userEmail) {
    console.log(`Got user email`);
} else{
    console.log(`Don't have user email`);
}

//+++++++++++++Falsy values++++++++++++++++++
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Except the above, rest are 
// truthy values e.g,
// true, "0", 'false', " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log(`Array is Empty`);
}

const emptyObj={}
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is Empty`);
}


//+++++++++ Nullish Coalescing Operator (??) : null defined ++++++++++
// to deal with null or undefined values
let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10  //Output -10

// val1 = undefined ?? 15 // Output - 15
val1 = null ?? 10 ?? 20 // Output - 10 ---- first value is assigned


// console.log(val1);


// +++++++++++++++++Ternary Operator +++++++++++++++++++++++++
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log(`Greater than 80`):console.log(`less than 80`);


