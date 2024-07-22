const promiseOne = new Promise(function(resolve,reject){
// do any async task
// database calls , cryptography, network
setTimeout(function(){
    console.log("Async task is complete");
    resolve();
},1000)
})
promiseOne.then(function(){
    console.log("promise conusmed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },2000)
}).then(function(){
    console.log("concumend promise 2");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve({username:"ajay", email:"ajpatwal@gmail.com"});
    },1000)
}).then(function(eve){
console.log(eve);
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
    if(!error){
        resolve({username:"jay", password:"123"})
    }
    else{
        reject('ERROR: something went wrong')
    }
    },1000)
})
.then((eve)=>{
    console.log(eve);
    return eve.username;
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolve or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
    if(!error){
        resolve({username:"varun", password:"123"})
    }
    else{
        reject('ERROR: js went wrong')
    }
    },1000)
})

async function comsumePromiseFive(){
try{
    const consume = await promiseFive
console.log(consume);
}
catch(error)
{
    console.log(error);
}
}
comsumePromiseFive()


// async function getAllUsers(){
//   try{
//     const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
//   const data = await response.json()
//   console.log(data);
//   }
//   catch(error){
//     console.log("Error :",error);
//   }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary').then((eve)=>{
return eve.json;
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{console.log("error");})
.finally(()=>{
    console.log("run .then or .catch");
})