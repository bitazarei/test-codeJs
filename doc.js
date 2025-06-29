const menu = document.getElementById('menu');
const sidBar = document.getElementById('SB');

menu.addEventListener('click' , function () {
  sidBar.classList.toggle("sideBar");
})
sidBar.addEventListener('click', function(){
  this.classList.toggle('sideBar'); // Toggle the active class on sideBar
});
//sideBar.style.display === 'none';
//  const sbb = document.querySelector('sideBar') ;

//  sbb.addEventListener('click', function(){
//     sbb.style.display === 'none';
//  })