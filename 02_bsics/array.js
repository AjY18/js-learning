// +++++++++++++++++ array ++++++++++++++++ 

const myArr = [0,1,2];// declaration of array
console.log(myArr[3]); //ajay


const myArr1 = new Array(2,"hitesh",true,4.2)
console.log(myArr1[3]);  //4.2

// Array methods

myArr.push(4); // push help we can add new value in array
myArr.push(19)
console.log(myArr);

myArr.pop() // a pop operation help we can delete a element of array a pop remove value from the last
console.log(myArr);

myArr.unshift(9) //unshift help a element add in the 0th index and we shift all the element in one step back 
console.log(myArr);

myArr.shift() // shift help we can remove 0th index velue
console.log(myArr);

const myArr3 = myArr.join()
console.log(typeof myArr3);// 0,1,2,4  type = string
console.log(typeof myArr); // type =object

//++++++++++ important +++++++++++++

//   slice and splice
console.log("A",myArr);  //[0,1,2,4]

const one= myArr.slice(1,3) //[1,2] slice show a 1 and 2 value 
console.log(one);

console.log("B",myArr); //[0,1,2,4] 
const two= myArr.splice(1,3) //[0] / / splice remove 1 to 3 values
console.log("C",myArr);
console.log(two);



//
const marval_hero =["spiderman","ironman","thor"];
const dc_hero =["batman","flash","superman"];
//marval_hero.push(dc_hero); //push help we can push a dc_hero array in marval_hero array this is not a good way to concatinate a two arryas

//const all_hero = marval_hero.concat(dc_hero)
//console.log(all_hero);


//spread is easy way to add two arrays

const all_hero =[...marval_hero,...dc_hero]
console.log(all_hero);
//isArray
console.log(Array.isArray("ajay"));
//from
console.log(Array.from("ajay"))// from help we can convert in array ['a','j','a','y']

//of
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3))