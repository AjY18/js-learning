// data type
// 1).primitive  2).non-primitive
/*
primitive :- 1. String
2.number,
3. boolean,
4. null,
5 undefined,
6. symbol
7. BigInt
*/ 
 //Example :-
const name="Ajay" 
console.log(typeof name); //string

const num=34;
console.log(typeof num); // number

const bool = false;
console.log(typeof bool); //boolean

const temp = null;
console.log(typeof temp); //object

const useremail = undefined;
console.log(typeof useremail); //undefined

const id = Symbol('234')
const anotherId = Symbol('234')
console.log(id===anotherId) //false

const bigNum= 543386875432n;
console.log(typeof bigNum); //bigint
/*


non-primitive(Refrence):- 1. arrya
2. object
3.function.
*/
//Example:-
//array:
 const heros =["iron man","spiderman","Thor"]
 console.log(typeof heros); //object array

 //object:
let myinfo = {
name :"jay",
age: 42,
}
console.log(typeof myinfo); // object

//function:
const fun= function(){
console.log("hellow");
}
console.log(typeof fun); //function object

