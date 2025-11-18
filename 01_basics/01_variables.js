const accountId = 144553
let accountEmail = "sajal@google.com"
var accountPassword = "12345"
accountCity = "MungerHardCore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abs@gsc.com"
accountPassword = "234565"
accountCity = "MungerAlwaysHardCore"

console.log(accountId);

/* 
Prefer not to user var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
