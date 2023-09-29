const user={
    username : "Deepak",
    price : "999",

    WelcomeMessage : function(){
        // console.log(`${this.username}, welcome to our website`);
        // console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "singh"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "deepak"
//      console.log(this.username);
// }
// chai()
// const chai = function(){
//     let username = "deepak"
//     console.log(this.username);

// }
// const chai = () => {
//     let username = "deepak"
//     console.log(this);

// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "deepak"})

console.log(addTwo(3,4));

const myArray = [2,3,4,5,6]
// myArray.forEach(() => ()) 
