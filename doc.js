


// input.addEventListener('keyup', ()=>{
//   p.innerHTML += `</br> keyup` ;
// })
// input.addEventListener('keypress', ()=>{
//   p.innerHTML += `</br> keypress` ;
// })

// lable.addEventListener('tabindex', ()=>{
//   lable.innerHTML += `</br> keydown` ;
// })

const input = document.querySelector('input');
const p = document.querySelector('p');
const lable = document.querySelector('lable');
//const myInput = document.getElementById('.myinput');

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
 });

