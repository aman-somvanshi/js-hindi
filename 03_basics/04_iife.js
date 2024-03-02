// Immmediately Invoked Function Expressions (IIFE)--global scope ke pollution se problem hoti hai kai baar, toh uske pollution ko htane ya usse bchne ke liye IIFE ka use kiya jata h



// Named IIFE
(function chai() {
  console.log(`DB Connected`);
})();           // The semi colon at the end is very important
// ()()      //First parentheses is for declaration, and the second parenthesis is for execution


//Unnamed IIFE
((name) => {
    console.log(`DB Connected to ${name}`);
  }
)(`Aman`);
