// let myName = "deepak    "
// let myChannel = "Singh   "

// console.log(myName.trueLength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spiderPower is ${this.spiderman}`);
    }
}

Object.prototype.deepak = function(){
    console.log(`deepak is present in all objects`);
}

Array.prototype.heyDeepak = function(){
    console.log(`Deepak says Hello!`);
}
//heroPower.deepak()
// myHeroes.deepak()
// myHeroes.heyDeepak()
//heroPower.heyDeepak()

//Inheritance

const user = {
    name : "chai",
    email : "chai@gmail.com"

}
const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : `JS Assignment`,
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "chaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);

}

anotherUserName.trueLength()
"deepak".trueLength()
"icetea".trueLength()



