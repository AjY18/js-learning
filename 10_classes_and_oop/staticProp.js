class User {
    constructor(userName){
this.userName=userName;
    }

    logMe(){
        console.log(`Username :${this.userName}`);
    }
    //  static createId(){
    //     return`123`;
    // }
}

// const ajay = new User("ajay")
// console.log(ajay.createId());

class Teacher extends User{
constructor(userName,email){
    super(userName);
    this.email=email;
}
print (){
    console.log(`username:${this.userName}`)
    console.log(`email:${this.email}`)

}
}

const iphone = new Teacher("iphone",'iphone@gmail.com')
iphone.logMe();
iphone.print();