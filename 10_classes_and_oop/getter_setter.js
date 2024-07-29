class User{
    constructor(email,password){
        this.email= email;
        this.password= password
    }
    get email(){
        return this._email;
    }
    set email(value){
console.log(`Email :${this._email = value}`); 
    }
    get password(){
        return this._password
    }
    set password(value){
        console.log(`Password is:${this._password = value}`); 
    }
}

const details = new  User("ajaypatwal@gmail.com","kjdfhkjasdh")
// console.log(details.password);
// console.log(details.email);