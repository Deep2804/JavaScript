const user = {
    username : "deepak",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`user: ${this.username}`);
        console.log(this);
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

// const promise1 = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    //return this
}

const userOne = new User("deepak",10,true)
const userTwo =  new User("singh",5,false)

console.log(userOne.constructor);
//console.log(userTwo);