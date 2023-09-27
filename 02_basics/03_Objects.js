//singleton
//object.create

const mySym = Symbol("key1")

const Jsuser = {
    name : "Deepak",
    "full name" : "Deepak Singh",
    [mySym] : "mykey1",
    age : 20,
    location : "india",
    email : "deepak2804@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["monday","sunday"]

}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "deepak@google.com"
// Object.freeze(Jsuser)
Jsuser.email = "deepak@chatgpt.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

