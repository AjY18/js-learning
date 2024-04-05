#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 2

```java script
const form =document.querySelector("form");
//this will you give empty value
  //const height = parseInt(document.querySelector("height").value)
form.addEventListener('submit',(eve)=>{
  eve.preventDefault();

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  if(height==='' || height<0 || isNaN(height)){
results.innerHTML = `please give a valid height ${height}`;
  }

 else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
      }
      else{
const bmi = (weight/((height*height)/10000).toFixed(2));

//show the result
results.innerHTML =`<span>${bmi}</span>`
      }
})
```