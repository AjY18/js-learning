const user ={
    username:"ajay",
    price:300,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this); //show context
    }
}
user.welcomeMessage() //ajay welcome to website
user.username="rohan"
user.welcomeMessage()// rohan welcome to website
console.log(this);

//in browser global object is window

//+++++++++++++++++++++++++++++++++++++++++++
function milk(){
    const username="abhay";
    console.log(this.username);
}
milk()

const random =function(){
    let user="karan";
    console.log(this.user); // undefined
}
random()


//++++++++++++ Arrow function +++++++++++++++
//arrow function we can not use this function

const one =  () => {    //arrow function
let naam ="ajay";
console.log(this.naam);  //undefined
}
one()

// arrow function
// const one = (num1,num2) => {
// return num1+num2;    // explicit return when we use return 
// }
// console.log(one(2,8))  //10

//+++++++++++++++++++++++++++++++
// const one =(num1,num2) =>  num1+num2
// console.log(one(2,4))  //6

const two =(num1,num2) =>  (num1+num2)
console.log(two(3,4))  //
