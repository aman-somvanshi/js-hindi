function sayMyName() {
  console.log("a");
  console.log("m");
  console.log("a");
  console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {


//   let result = number1 + number2
// //   console.log("Aman");
//   return result
// //   console.log("Aman");  //unreachable code - as this line comes after the return statement

    return number1 + number2


}

const result = addTwoNumbers(2, 3);
// addTwoNumbers(2, "3");
// addTwoNumbers(2, "a");
// addTwoNumbers(2, null);

// console.log("Result : ",result);

// function loginUserMessage(username) {
//     // if(username===undefined){
//     //     console.log("Please enter a username");
//     //     return
//     // }
//     if(!username){                            //!username baically means true --- so if no value is passed to the function, then it is considered as "undefined" which itself is equivalent to false in javascript. !username is equal to !undefined which is equal to !false  

//         //  ! username ka matlab hota hai username ===undefined


//         // ""  --- empty string means false in javascript
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }



function loginUserMessage(username ="Sam") {
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){                            //!username baically means true --- so if no value is passed to the function, then it is considered as "undefined" which itself is equivalent to false in javascript. !username is equal to !undefined which is equal to !false  

        //  ! username ka matlab hota hai username ===undefined


        // ""  --- empty string means false in javascript
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aman"))





// console.log(loginUserMessage())





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function calculateCartPrice(...num1) { //Rest operator -- to pass multiple values in a function (array me include kr deta h values ko)--- rest operator has same syntax as spread operator
//     return num1
    
// }
function calculateCartPrice(val1, val2 , ...num1) { 
    return num1
    
}

console.log(calculateCartPrice(200, 300, 400, 2000)); //[ 400, 2000 ]

const user = {
    username: "Aman",
    prices : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username } and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));