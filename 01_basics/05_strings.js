const myName = "Aman";
const repoCount = 50;

// console.log(myName + repoCount+"Value");   not used anymore

/*
Use the below syntax from now on always which involves uding backticks and $ sign 
*/

console.log(
  `Hello my name is ${myName.toUpperCase()} and my repo Count is ${repoCount}`
);

const gameName = new String("Aman-S");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-3, 4);
// console.log(anotherString);

const newStringOne = " Aman ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://aman.com/aman%20som";

console.log(url.replace("%20", "-"));
console.log(url.includes("aman"));

const newStringTwo = "Aman-Som-123";
console.log(newStringTwo.split("-"));
