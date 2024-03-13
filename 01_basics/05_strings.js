const myName = "Aman";
const repoCount = 50;

// console.log(myName + repoCount+"Value");   not used anymore

/*
Use the below syntax from now on always which involves using backticks(``) and $ sign 
*/

console.log(
  `Hello my name is ${myName.toUpperCase()} and my repo Count is ${repoCount}` // for toUpperCase , just type tuc in vscode
);//Hello my name is AMAN and my repo Count is 50

const gameName = new String("Aman-S");

// console.log(gameName[0]); //A
// console.log(gameName.__proto__); //{}

// console.log(gameName.length); //6
// console.log(gameName.toUpperCase()); //AMAN-S
// console.log(gameName.charAt(2)); // a
// console.log(gameName.indexOf('n')); // 3

const newString = gameName.substring(0, 4); 
// console.log(newString); //Aman

const anotherString = gameName.slice(-3, 4);
console.log(anotherString); //n

const newStringOne = " Aman ";
// console.log(newStringOne); // Aman     the string is presented along with the spaces on both side
// console.log(newStringOne.trim()); //Aman    the string is printed without the spaces on both sides

const url = "https://aman.com/aman%20som";

console.log(url.replace("%20", "-")); //https://aman.com/aman-som
console.log(url.includes("aman"));//true

const newStringTwo = "Aman-Som-123";
console.log(newStringTwo.split("-"));//[ 'Aman', 'Som', '123' ]
