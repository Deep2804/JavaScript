class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }

    static createID(){
        return `123`
    }
}

const deepak = new User("deepak")
//console.log(deepak.createID())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iPhone","iPhone@gmail.com")
console.log(iphone.createID());