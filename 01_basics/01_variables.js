const accountId= 144553
let accountEmail = "deepak@gmail.com" 
var accountPassword = "12345@"
accountCity = "Delhi"
let accountState;

// accountId = 2
accountEmail = "ds@ds.com"
accountPassword = "1234"
accountCity = "Noida"
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])