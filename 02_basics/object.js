//object 
//1. singleton object 2.non singleton object
//1.singleton object ---> const ref = new object()
//2. non-singleton object --> const ref ={  }


const symb =Symbol("key");

const obj={
    name :"ajay",
    age :12,
    result:"pass",
    address:"almora",
    [symb]: "key"
}
//console.log(obj);
//console.log(obj.name);

//right way to print object
console.log(obj["result"]); //if we type 'obj[result]' so it thorw error object take it like a string so use " " then we get result
console.log( obj[symb]);

//change value in object
obj.address="nainital"
console.log(obj);

//freeze a object mean we can fix value in object help freeze funtion

//Object.freeze(obj)

//we can create a funtion in a object
obj.game=function(){
    console.log("hello user ");
}
console.log(obj.game());

obj.game1=function(){
    console.log(`hello user,${this.name} `);
}
console.log(obj.game1());


//========== part2  object ============>
const insta= {
    userEmail :"rahul21@gmail.com",
    password :"12avb",
    userName:{
        fullname:{
            firstname:"Rahul",
            lastname:"joshi"
        }
    }
}
console.log(insta.userName.fullname); //access object in object values
console.log(Object.keys(insta));//.keys give a output datatype and   in array form ====> ['userEmail','password', 'userName' ] and it's help we can apply loops in this
console.log(Object.values(insta));

//adding two objects
const obj4={
    1:"c",2:"d"
}
const obj2={
    4:"a",3:"b"
}
//const obj3 = Object.assign({}, obj4, obj2)

//spread
const obj3={...obj2,...obj4}// it's easy way to add 
console.log(obj3);

//+++++++++++++++++++++++++++++++++++++++++++++++ 
//structing
const course ={
    course_name:"java script",
    price :"200rs",
    instructor:"ajay"
}
console.log(course.instructor);

// destructure method
const {instructor:instr}=course
console.log(instr); //de-structure help we can also pritn object value and change name also




//-------------------------------------------------
//++++++++++  json api -------------------------

//json structure
//json is javascript object notation 
// {
// "name": "ajay";
// "course":"mca";
// "age":"19"
// }

//we can user this array structure also 

// [
//      {},
//      {},
//      {}
// ]