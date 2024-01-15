// const score =100;
// console.log(score);

// const one = new Number(4894)
// console.log(one);
// console.log(score.toString);
// console.log(score.toString().length);

// console.log(score.toFixed(2));  // a fixed help we can take a two extra zero after point:- 3.00 

// const num =536.48993
// console.log(num.toPrecision(5));
// // it's output is 536.49 precision give a priority after decimal point and  then its change the values

// const two =3000000
// console.log(two.toLocaleString('en-IN'));// output :- 30,00,000
//its help we can calculate a zeros in indian style using 'en-IN' 


//+++++++++++++++ MATH  +++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-32)); // output :- 32 remove minus form the value

// console.log(Math.round(23.49)); //output:- output is 23 it's take a round value which is before decimal point 

// console.log(Math.ceil(4.3));// output:- 5   ceil method help output always 5 if decimal value is present

// console.log(Math.floor(4.9));// output:- 4   floor method help output always 4 if decimal value is present

// console.log(Math.min(3,8,4,1,8,7)); //1
// console.log(Math.max(3,8,4,1,8,7)); //8

//console.log(Math.random());
//Math.random is always give a output between 1 and 0 

console.log(Math.random()*10);
// in *10 help we can shift value mean 
// Math.random give us a value in 0 to 1 and we have value is 0.64565,0.6432 random number which is under 0 to 1 but when we do *10 in random value so value are range in 0 to 9  

console.log(Math.random()*10 +1);
 // some times random*10 give us a value in 0.543534 random number which is 0.somthing so avoid this situation we add a 1. it's help our values are always in 1 to 9 range.

 const max=10
 const min=34
console.log(Math.floor(Math.random()* (max-min +1))+min)
