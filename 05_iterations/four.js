// For in loop

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "Swift by apple",
};

for (const key in myObject) {
  // console.log(key);  // gives the keys as output
  // console.log(myObject[key]); //gives the values as output
  // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "py", "java", "cpp"];
for (const key in programming) {
  console.log(key); //gives the index of the array as output
  console.log(programming[key]); //gives the elements of the array as output
}

// Notice that for-in loop gives the index on printing the key, whereas the for-of loop would have printed the elements at each index
