#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

``` java script
const buttons = document.querySelectorAll(".button");
const  body = document.querySelector("body");

buttons.forEach((button)=>{
console.log(button);
button.addEventListener('click', (Eve)=>{
  console.log(Eve);
  console.log(Eve.target)
  if(Eve.target.id === 'grey'){
    body.style.backgroundColor =Eve.target.id;
  }
  else if(Eve.target.id === 'white'){
    body.style.backgroundColor =Eve.target.id;
  }
  else if(Eve.target.id === 'blue'){
    body.style.backgroundColor =Eve.target.id;
  }
  else if(Eve.target.id === 'yellow'){
    body.style.backgroundColor =Eve.target.id;
  }
  else if(Eve.target.id ==='purple'){
    body.style.backgroundColor = Eve.target.id;
  }
});
})
```
