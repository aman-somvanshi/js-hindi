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

// console.log(JsUser.email);
// console.log(JsUser[mySym]);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);

JsUser.email="aman@chatgpt.com"
// Object.freeze(JsUser); //makes sure that no further changes occur in the object
JsUser.email="aman@apple.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

