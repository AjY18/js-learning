let age  = "21ab";
console.log(typeof (age));

let valueInNumber =Number(age)
console.log(typeof valueInNumber);
console.log(valueInNumber);
 
// "21" => its easily convert
// "21abc" => NaN
// true => 1, false => 0;
//undefined => NaN

let hey = 0;
let booleanIsLoggedIn =Boolean(hey);
console.log(booleanIsLoggedIn);

//1 => true
//0=> false
//" " => false
// and we add somthing like any stirng or number it's => true;

let num = 33;
let stringNumber = String (num);
console.log( stringNumber);
console.log(typeof stringNumber);