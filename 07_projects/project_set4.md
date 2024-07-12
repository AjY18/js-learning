#project related to dom 

##project link
[click here]
(https://stackblitz.com/edit/dom-project-chaiaurcode-qngy2r?file=index.html)

# solution code

## project 4

```java script
//keyboard check
const insert  = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML =`
  <div clas="color">
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
   <tr>
    <td>${e.key === " "?"space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`

})


```
