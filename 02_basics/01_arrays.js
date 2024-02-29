// ARRAY

const myArr = [0, 1, 2, 3, 4, 5]; // can contain different datatypes as well
// console.log(myArr[0]);

const myHeroes = ["Shaktimaan", "Naagraaj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]);

//Array methods

// myArr.push(6); //adds element at the end
// myArr.push(7);
// myArr.pop(); //removes last element

// myArr.unshift(10)  //This is a very time consuming operation - it adds element at start
// myArr.shift() //removes element from start


// console.log(myArr.includes(9));  //gives a boolean output
// console.log(myArr.indexOf(3));  
// console.log(myArr.indexOf(19));  

const newArr = myArr.join() // converts the array into a string

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A ", myArr);
const myn1=myArr.slice(1,3) // This does not causes any change in the original array
console.log(myn1);

console.log("B ", myArr);

const myn2=myArr.splice(1,3) // This removes elements from the original array from index 1 to 3
console.log(myn2);
console.log("C ", myArr);

