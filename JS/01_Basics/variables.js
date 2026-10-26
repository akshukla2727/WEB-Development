const accountId = 456142
let accountEmail = "aditya@example.com"
var accountPassword = "1234"
accountCity = "New Delhi"
// use always let and const 
let accountState;

// accountId = 3 => this can't be done

console.log(accountId)

/* prefer not to use var because problem of scope */

console.table({accountId, accountEmail, accountPassword, accountCity, accountState})

