// var c = 300
let a = 300;
if (true) {
  // if ke andar jo bhi likha jata hai , use block scope mana jata h
  let a = 10;
  const b = 20;
  // var c = 30    // This has global scope so thuis can be printed beyond this scope
  // c = 30
  // console.log("Inner a :" , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Aman";
  function two() {
    const website = "YT";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one()

if (true) {
  const username = "Aman";
  if (username === "Aman") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++

console.log(addone(5)); // This can be executed before it is even declared
function addone(num) {
  return num + 1;
}

addTwo(5); //This function will not execute because it's a different type of declaration where it cannot be executed beefore the function is declared
const addTwo = function (num) {
  return num + 2;
};
