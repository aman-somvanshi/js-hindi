// Array specific loops

// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, "Aman"];

for (const num of arr) {
  // console.log(num); // gives the value at each index of the array
}

const greetings = "Hello World";

for (const greet of greetings) {
  if (greet == ` `) {
    // console.log(`Empty space detected`);
    // break;
    continue;
  }
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  // console.log(key,":-", value);
}

const myObj = {
  Game1: "NFS",
  Game2: "Spiderman",
};

// for (const [key, value] of myObj) {
//     console.log(key , ":-", value); //myObj is not iterable
// }

// So, for of loop doesn't work in the case of objects.
