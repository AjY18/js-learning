//Immediately Invoked Function Expressions (IIFE)
//++++++++++++++++  Imp   +++++++++++++++++
//=> which function execute immediatly called IIFE function  and sometime we get a problem by a global scope so for remove the variable and declaration  use IIFE function 

(function fun(){
    //named IIFE
    console.log('DB Connected');
})();    //immediate invoked function 


//print help of arrow function

((name)=>{
    //unnamed IIFE
    console.log(`connected ${name}`);
})('ajay');