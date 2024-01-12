//  console.log(2<1);
//  console.log(2>=1);
//  console.log(2>1);
//  console.log(2==1);
//  console.log(2!=1);

// console.log("2">1);
// console.log("1">1);

console.log(null>0); //false
console.log(null<0);  //false
console.log(null==0); //false
console.log(null>=0); //true
console.log(null<=0); //true

/*The reason is that an equality check == and comparisons > <> = <= work differently.
Comparisons convert null to a number, threating it as 0, That's why (13) null >=0 is ture and (11) null >0 is false.
*/

console.log(undefined>0); //false
console.log(undefined<0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false
console.log(undefined<=0); //false

// null and undefined conversions comparisons sometimes put in the confusion

// ===
console.log("54" === 2); //false
//  === is also compare a data type