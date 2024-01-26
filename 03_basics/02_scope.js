
// {
//     //scope
// }

var c=80;//global scope
if(true)
{//block scope
    let a=3;
    const b=10;
    var c=40;
}


// console.log(a);  //not defined 
// console.log(b);  //not define
console.log(c); //40

//++++++++++++++++++++++++++++++++++++++++

let a= 400;
if(true)
{//block scope
    let a=3;
    const b=10;
    console.log("block scope value:",a); //3
}
console.log("global scope value:",a);  //400

//+++++++++++++++++++++++++++++++++++++++++++
function one(){
    const username = "ajay"; 
    function two(){
        const website ="google";
        console.log(username); // so here child is access parent 
    }

    //but parent not access child function
    //console.log(website);
two()
}
one()