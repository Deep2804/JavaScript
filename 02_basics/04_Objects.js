//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Deepak"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "deepak@hotmail.com",
    fullname : {
        userfullname:{
            firstname : "deepak",
            lastname : "singh"
        }
   }
}

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4);

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email : "d@gmail.com"
    },
    {
        id: 1,
        email : "d@gmail.com"
    },
    {
        id: 1,
        email : "d@gmail.com"
    },  
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}
//course.courseInstructor
const {courseInstructor: Intructor} = course

//console.log(courseInstructor);
console.log(Intructor);

//Object Destructure in React
// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")

// {
//     "name" : "deepak",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }
[
    {},
    {},
    {}
]
