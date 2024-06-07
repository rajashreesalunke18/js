const  accountId=22510
let accountEmail="abc@google.com"
var accountPassword="xyz"
accountCity="Jaipur"
let accountState;//undefined
//accountId=3 //not allowed

accountEmail="pqr@.com"
accountPassword="12345"
accountCity="Rajasthan"
console.log(accountId);
/*Prefer not to use var because of issue in block scope and functional scope */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

