//dates
let myDate =new Date()
console.log(myDate);
console.log(myDate.toString());// web jan 17 2024 India standard time
console.log(myDate.toISOString());//same like console.log(myDate);
console.log(myDate.toJSON()); //console.log(myDate);
console.log(myDate.toLocaleDateString()); //17/1/2024
console.log(myDate.toDateString()); //web jan 17 2024

console.log(typeof myDate); // date : type of Object


//+++++++++++++++ create specific date ++++++++++++++++++
let createDate = new Date(2024,1,15) // months are start from the  0 so here 1 is indicate Feb 
console.log(createDate.toDateString()); // Thu Feb 15 2024

let createDate1 = new Date(2024,1,15,2,49,12)
console.log(createDate1.toLocaleString()); //one way to print time or date


let createDate2 = new Date("01-15-2024") //we can also do  this ("2024-01-15")
console.log(createDate2.toLocaleString()); 


let createDate3 = Date.now()
console.log(createDate3); // we get output in miliseconds so it's so complicated to understand


//imporant interview question 
// convert milisecond value in seconds
console.log(Math.floor(Date.now()/1000));

console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // .get  help we can know about month date day time hours etc 


//+++++++ cutomize LocalString  +++++++++++++ Imp //
newDate.toLocaleString('default',{
    weekday: "long",
    
})
