const input = document.querySelector('input');
const p = document.querySelector('p');
const lable = document.querySelector('lable');

input.addEventListener('keydown', ()=>{
  p.innerHTML += `</br> keydown` ;
})

input.addEventListener('keyup', ()=>{
  p.innerHTML += `</br> keyup` ;
})
input.addEventListener('keypress', ()=>{
  p.innerHTML += `</br> keypress` ;
})

lable.addEventListener('tabindex', ()=>{
  lable.innerHTML += `</br> keydown` ;
})