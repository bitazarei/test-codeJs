/*const menu = document.getElementById('menu');
const sidBar = document.getElementById('SB');

menu.addEventListener('click' , function () {
  sidBar.classList.toggle("sideBar");
})
sidBar.addEventListener('click', function(){
  this.classList.toggle('sideBar'); // Toggle the active class on sideBar
});* */

const con = document.querySelector('.container');
const chl = document.querySelector('.child');

con.addEventListener('mouseenter' , function(){
  con.style.backgroundColor = 'red';
  console.log('moause enter : container');
})
con.addEventListener('mousemove' , function(){
  con.style.backgroundColor = 'gray';
  console.log('moause move : container');
})
chl.addEventListener('mouseenter' , function(){
  console.log('moause enter : child');
  chl.style.backgroundColor = 'blue';
})
con.addEventListener('mouseleave' , function(){
  console.log('moause leave : container');
  con.style.backgroundColor = 'lightgreen';
})
chl.addEventListener('mouseleave' , function(){
  console.log('moause leave : childe');
  chl.style.backgroundColor = 'lightyellow';
})

const con2 = document.querySelector('.con2');
const chl2 = document.querySelector('.child2');
const eChl = document.querySelector('.eatherChild');

eChl.addEventListener('mouseover' , function(){
  eChl.style.backgroundColor = 'black';
  console.log('moause over : eather child');
})
con2.addEventListener('mouseout' , function(){
  con2.style.backgroundColor = 'teal';
  console.log('moause out : container2');
})
chl2.addEventListener('mouseout' , function(){
  console.log('moause out : child2');
  chl2.style.backgroundColor = 'salmon';
})
con2.addEventListener('mousemove' , function(){
  console.log('moause move : container2');
  con2.style.backgroundColor = 'lightgreen';
})
chl2.addEventListener('mousemove' , function(){
  console.log('moause move : childe');
  chl2.style.backgroundColor = 'lightyellow';
})