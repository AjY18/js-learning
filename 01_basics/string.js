let name ="ajay"
let my_class = "mca"
console.log(`my name is ${name} and me persuing a degree ${my_class}`);

const gameName = new String('football')
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt([6]));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5)
console.log(newString);


const anotherString = gameName.slice(2, -3)
console.log(anotherString);

const newStringOne ="   ajay"
console.log(newStringOne);
console.log(newStringOne.trim()); // trim use for remove wide spaces

const url = "http://ajay.com/ajayy%20karma"
console.log(url.replace('%20','--')) //use for replace
 console.log(url.includes('ajay')); //just use for  check it's word available or not in the string

 const gameName1 = new String('football.23.com')
 console.log(gameName1.split('.'));

 const gameName2 = new String('football-23-com')
 console.log(gameName2.split('-')); // a split help we can convert string into array
 console.log(gameName.search('football'));

 const gameName3 = new String('\u0041\u004A\u0041\u0059 \u0050\u0041\u0054\u0057\u0041\u004c')
 console.log(gameName3);
