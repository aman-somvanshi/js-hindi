//This means current context

const user = {
  username: "Aman",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website `);
    console.log(this); /*//here the current context is shown which is {
                                username: 'Aman',
                                price: 999,
                                welcomeMessage: [Function: welcomeMessage]
                                }
      */
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this); // Output - {}          --- empty object
// here {} is the current context because line 22 is running in the node environment
// when just the line 22 is executed simply in a browser console it will give the following output ---
//    Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
// this happens because in a browser , the most gobal object is the Window object & this is exactly the same reason why we can  all the events of the window like clicks, etc.

// function chai(){
//     let username="Aman"
//     console.log(this.username);  //Functions ke andar this lgakr variable ko aise access nhi kr skte, agar aise access krna hai toh wo sirf object bnakr ho skta h
// }
// chai()

// const chai = function () {
//   let username = "Aman";
//   console.log(this.username);
// };
// chai(); // gives undefined as output

////////////////////// Arrow Function ///////////////////////
const chai = () => {
  let username = "Aman";
  console.log(this); //Output - {}
  console.log(this.username); //Output - undefined
};

// chai(); // gives undefined as output

// const addTwo= (num1,num2) => {
//     return num1+num2
// }
// const addTwo= (num1,num2) => num1+num2  // -- IMPLICIT DECLARATION of arrow function

// const addTwo= (num1,num2) => {return num1+num2}
// Agr curly braces {} use hue toh return statement likhna hi hoga for implicit declaration of arroew function

// const addTwo= (num1,num2) => (num1+num2)
// agr parenthesis () use kiya toh return lgane ki zarurat ni pdti

// const addTwo= (num1,num2) => {username:"Aman"} // output - undefined
const addTwo = (num1, num2) => ({ username: "Aman" }); // output - { username: 'Aman' }
// const addTwo= (num1,num2) => {return {username:"Aman"}} // output - { username: 'Aman' }

console.log(addTwo(3, 4));

const myArray = [2, 3, 4, 5, 6];

// myArray.forEach(function () {})  //Even this is correct syntax
// myArray.forEach( () => {}) // Also correct
// myArray.forEach( () => ()) // Also correct
