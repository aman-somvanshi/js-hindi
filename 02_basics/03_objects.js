// Singleton -- when declared using constructor
// Object.create()//This is the constructor method
// when declared using literal -- singleton is not formed

//object literals

const mySym = Symbol("key1")

const JsUser ={
    name:"Aman",
    "full name":"Aman Somvanshi",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"aman@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]

}

//There are two ways to acces the values in an object - (i) using dot (ii)using square brackets
console.log(JsUser.email);//aman@google.com
console.log(JsUser[mySym]);//mykey1
console.log(JsUser["full name"]);//Aman Somvanshi
console.log(JsUser["email"]);//aman@google.com

JsUser.email="aman@chatgpt.com"
// Object.freeze(JsUser); //makes sure that no further changes occur in the object
JsUser.email="aman@apple.com"
console.log(JsUser)/* {
    name: 'Aman',
    'full name': 'Aman Somvanshi',
    age: 18,
    location: 'Jaipur',
    email: 'aman@apple.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
  } */

JsUser.greeting = function() {
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());/*Hello JS User
undefined */
console.log(JsUser.greetingTwo());/*Hello JS User, Aman
undefined */

