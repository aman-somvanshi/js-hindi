// Javascript Execution Context(EC)   -- how js runs the file

// Javascript is single threaded

// JS Code -> 1. global EC (which is put in the this variable)
//            2. Function EC
//            3. Eval EC  --- property of the global object

// Two phases of running a JS code :
// 1. Memory Creation Phase or Creation Phase  -- variables are allotted memory
// 2. Execution Phase  -- functions, operations are executed here

// Example

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// **Step 1** - Global Execution or Global Environment --> allocated in this

// **Step 2.1 - Memory Phase**
// val1 -> undefined
// val2 -> undefined
// addNum -> definition
// result1 -> undefined
// result2 -> undefined

// **Step 2.2 - Execution Phase**
// val1 <- 10
// val2 <- 5
// addNum -> makes a diiferent and its own EC(visualise a box)--contains a new variable environment + execution Thread

// *Step 2.2.1 - Memory Phase for addNum*
// val1->undefined
// val2->undefined
// total -> undefined

// *Step 2.2.2 - Execution Phase for addNum*
// num1 <- 10
// num2 <- 5
// total <- 15
// Now The value of total is returned to the global EC
// The EC formed for the function is deleted once all the work is done

// ***Step 2.2 Continued*** 
// result1 <- 15
// result2 <- addNum -> makes a diiferent and its own EC(visualise a box)--contains a new variable environment + execution Thread

// *Step 2.2.1 - Memory Phase for addNum*
// val1->undefined
// val2->undefined
// total -> undefined

// *Step 2.2.2 - Execution Phase for addNum*
// num1 <- 10
// num2 <- 2
// total <- 12
// Now The value of total is returned to the global EC
// The EC formed for the function is deleted once all the work is done

// ***Step 2.2 Continued again***
// result2 <- 12




// ++++++++++++++++++++++++++++++++ Call Stack +++++++++++++++++++++++++
// Visualise a Stack
// at the bottommost the Global Environment is placed
// when a function is called, then that function is placed in that stack above the Global Environment 
// and after its execution, the function is removed from the stack

// Now , arises the case when a function is called within another another function, then in that case (let's take an example)
// Suppose one() is called --> it is placed in the stack
// within one() , two() is called --> two() is placed above one() in the stack

// In such case , LIFO (Last IN First out ) is followed -- Firstly two() is removed from the stack as it was the last to enter the stack
// Then only one() is removed from the stack.
