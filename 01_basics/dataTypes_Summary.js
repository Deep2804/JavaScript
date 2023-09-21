// Primitive
// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);

const bigNumber = 23474622232n


// Reference(Non-Primitive)
//Array, Objects, Functions

const heros = ['shaktiman','naagraj','doga'];
let myObj = {
    name: "Deepak",
    age: 22,
} 

const myfunction = function(){
    console.log("Hello World!");
}
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myfunction);


//************************************
//Stack(Primitive), Heap(Non-Primitive)
let myYoutubename = "deepaksinghdotcom"
let anothername = myYoutubename
anothername = "singhstatuscreation"
// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "www.google.com",
    upi: "www.amazon.com",
    
}
let userTwo = userOne

userTwo.email = "amazon.com"

console.log(userOne.email);
console.log(userTwo.email);