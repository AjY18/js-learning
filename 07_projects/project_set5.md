#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode-qngy2r?file=index.html)

# solution code

## project 3

```java script

//random color

const randomColor = function () {
  let hx = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color+ hx[Math.floor(Math.random() * 10)];
  }
  return color;
};


let flo;

const startColor = function () {
  if(flo==null){
    flo = setInterval(changeColor, 1000);
  }
  function changeColor(){
    document.body.style.backgroundColor = randomColor();
    
  }

 
};

const stopColor = function () {
clearInterval(flo);
flo= null;

};

document.querySelector('#start').addEventListener('click', startColor);

document.querySelector('#stop').addEventListener('click', stopColor);



```