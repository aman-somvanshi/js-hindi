const accountId=144553
let accountEmail="aman@google.co"
var accountPassword="12345"
accountCity="Jaipur" /*
When you declare a variable without any keyword, 
it becomes a global variable and is added to the global scope. 
This can lead to potential issues, such as variable name conflicts and
 unintended modifications of global variables.
 */

let accountState
//accountId=2 // not allowed
accountEmail="am@am.com"
accountPassword="24545"
accountCity="Mumbai"

/*

Prefer not to use var because
of issue in block scope and functional scope

let is used the most these days
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
