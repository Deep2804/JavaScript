//if

// if(true){

// }
// const isUserLoggedIn = true
// if(isUserLoggedIn){

// }
// const temperature = 41

// if(temperature === 41){
//     console.log("Less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");



//< , >, <=, >=, ==, !=, ===

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log(` User Power: ${power}`);
// }

// console.log(` User Power: ${power}`);

const balance = 1000

// if(balance >500) console.log("test"),
// console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance <900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if( UserLoggedIn && debitCard){
    console.log("Allow to buy Courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User LoggedIn");
}