#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode-qngy2r?file=index.html)

# solution code

## project 3

```java script
let randomNumber = parseInt(Math.random()*10+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
submit.addEventListener('click', function(eve){
  eve.preventDefault();
 const guess = parseInt(userInput.value);
 console.log(guess);
 validteGuess(guess);
});
}

function validteGuess(guess){
if(isNaN(guess)){
alert('please enter a valid number');
}
else if(guess<1){
  alert('please enter a more than 1');
}
else if(guess>10){
alert('please enter a less than 10');
}
else{
  prevGuess.push(guess)
  if(numGuess === 3){
    displayGuess(guess)
    displayMessage(`Game over! Rondom numbers was ${randomNumber}`)
    endGame();
  }else{
displayGuess(guess);
checkGuess(guess)
  }
}
}

function checkGuess(guess){
if(guess === randomNumber){
displayMessage('You guessed it right')
}
else if(guess<randomNumber){
  displayMessage('number is low')
}
else if(guess>randomNumber){
  displayMessage('number is high')
}
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML =`${4 - numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', (eve)=>{
    randomNumber= parseInt(Math.random()*10+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML= `${4-numGuess}`;;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame =true;
  })
}

function endGame(){
  userInput.value= '';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML =`<h2  id="newGame"> Start new game</h2>`;
  playGame=false;
  startOver.appendChild(p);
  newGame();
}



```