#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 2

```java script
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (eve) {
  eve.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  
  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
              results.innerHTML= `<span> under weight ${bmi}</span>`;
          }
          else if(bmi>=18.6 && bmi<=24.9){
            results.innerHTML= `<span>normal range ${bmi}</span>`;
        }
        else{
          results.innerHTML= `<span>Overweight ${bmi}</span>`;
      }
  }
});


```
