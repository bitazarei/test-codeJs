// input.addEventListener('keyup', ()=>{
//   p.innerHTML += `</br> keyup` ;
// })
// input.addEventListener('keypress', ()=>{
//   p.innerHTML += `</br> keypress` ;
// })

// lable.addEventListener('tabindex', ()=>{
//   lable.innerHTML += `</br> keydown` ;
// })
/*const input = document.querySelector('input');
const p = document.querySelector('p');
const lable = document.querySelector('lable');

 input.addEventListener('keypress', ()=>{
  let value = input.value;
  // Check if the last character is a number
  if (/\d$/.test(value)) {
      // Append an underscore
      input.value =  value + '_';
  }else if (/[a-zA-Z]$/.test(value)) {
    p.innerHTML += `</br> please just enter numbe`;
    input.value = value.slice(0,-1); //Remove the last character
  }
})* */


//const Qlist = document.querySelector('.qList');

document.body.onload = expend;

function expend() {
  const add = document.querySelector('.add');

  const newDiv = document.createElement("div");
  newDiv.className = 'box';
  const p = document.createTextNode('this is a p');
  newDiv.appendChild(p);

  
  add.replaceWith(newDiv);
  //add.appendChild(newDiv) //for create new childe
  //document.body.insertBefore(newDiv , add.parentNode); //for create add child
}
function cInputs() {
  
  const input = document.createElement('input');
  const divs = document.querySelector('.qList');

  const valueArray = Array.from(divs).map ( div => div.innerText);

  console.log(valueArray);

   for (let i = 0; i < Qlist.length; i++) {
    const element = Qlist[i];
    input.append();
   }
}