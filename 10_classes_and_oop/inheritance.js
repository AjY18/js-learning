class user{
    constructor(username){
        this.username= username;
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends user {
    constructor(username,email,password){
            super(username);
            this.email=email;
            this.password=password;
    }
    addCourse(){
        console.log((`A new course was addded by ${this.username}`));
    }
}

const chai = new Teacher ('Rahul','rahul@gmail.com',432134)
chai.addCourse();
chai.logMe();

const masalaChai = new user("Ajay")
 masalaChai.logMe();

//  console.log(chai instanceof user);
//  console.log(chai === Teacher);
