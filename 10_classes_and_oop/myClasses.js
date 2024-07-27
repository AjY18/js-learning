// class User {
// constructor(username, email, password){
//     this.username= username;
//     this.email = email;
//     this.password= password;
// }
// encryptPassword(){
// return  `${this.password}`
// }
// userName(){
//     return  `${this.username.toUpperCase()}`
// }

// }

// const chai = new User('chai','chai@gmail.com', 123)
// console.log(chai.encryptPassword());
// console.log(chai.userName());

// behind the scene

function user (username,email,password){
this.username=username;
this.email=email;
this.password=password;
}

user.prototype.encryptPassword=function (){
return` ${ this.password}`
}

user.prototype.userName =function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user('tea', 'tea@gmail.com',423)
console.log(tea.encryptPassword());
console.log(tea.userName());