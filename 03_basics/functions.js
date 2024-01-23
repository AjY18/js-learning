function addition(num1,num2)//perameters
 {
    let result=num1+num2;
    return result;
}
let result = addition(6,4);//arguments
console.log("result is:",result);

//++++++++++++++++++++++++++++++++++++++++++

function addition(num1,num2){ 
return num1+num2;
}
const num3=addition(2,3);
console.log(num3);

//++++++++++++++++++++++++++++++++++++++++

function writtenName(username){
return `${username} jsut logged in `
}
console.log(writtenName("ajay"));

//+++++++++++++++++++++++++++++++++++++++++++++++

function  addNumberInCart(...num)//rest (...)help we can add multiple values in array
 {
return num;
}
console.log(addNumberInCart(200,100,300,150));


function  addNumberInCart(val1,...num)
 {
return val1,num;
}
console.log(addNumberInCart(200,100,300,150));

//++++++++++++++++++++++++++++++
const game={
    name:"ajay",
    course:"mca"
}

function one(alluser){
    console.log(`name ${alluser.name} which course is ${alluser.course}`);
}
one(game)

//we can pass object like this also
one({
    name:"karan",
    course:"btech"
})


//++++++++++++++++++++++++++++++++++++++++
const myArray=[100,200,12,42]
function accessArray(getArrayElement){
return getArrayElement[2]
}
console.log(accessArray(myArray));

console.log(accessArray([100,200,19,17]));