class User{
    constructor(email,password){
        this.email = email;
        this.password = password

    }
    get email(){
       return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}deepak`
    }

    set password(value){
        this._password = value
    }
}
const deepak = new User("deep123@gmail.com","deep123");
console.log(deepak.email);
console.log(deepak.password);