// Computer style , video 118
let container = document.getElementById('container');
let cStyle = getComputedStyle(container);
console.log(cStyle.background);

// Change css attribute
console.log(container.id);
console.log(container.className);
console.log(container.classList);

container.classList.add('unicourn');
container.classList.remove('explor1');
container.classList.toggle('c');container.classList.toggle('explor3');
container.classList.replace('explor2','explor88');
console.log(container.classList.contains('B'));

//innerHTML VS outerHTML 
var div = document.getElementById('explain');
console.log(div.innerHTML);
console.log(div.outerHTML);

div.outerHTML = `<div class="B" id="explain">
<h1>Dice game</h1>
<p>Until one of you reaches 50 points, the winner will be declared.</p>
</div>`

//Event
var clickButton = document.getElementById('changeColor');
//let clickButton = document.querySelector('button');
clickButton.onclick = function () {
    document.body.style.backgroundColor = 'black';
}

var changeBlue =document.getElementById('changeBlue');
    //double click
/*changeBlue.addEventListener('dblclick' , function(){
document.body.style.backgroundColor = 'blue';
console.log("double click");
} );* */
    //mouse down
changeBlue.addEventListener('mousedown' , function(){
    console.log('mouse down');
    document.body.style.backgroundColor = 'blue';
});
changeBlue.addEventListener('click' , function(){
    console.log('click');
});
    //mouse up
changeBlue.addEventListener('mouseup' , function(){
    console.log('mouse up');
    document.body.style.backgroundColor = 'pink';
});
    //context menu
changeBlue.addEventListener('contextmenu' , function(){
    console.log('context menu');
});    
    //mini peroject 1

const currentNum = document.getElementById('zero');
const add = document.getElementById('addCounter');
const mines = document.getElementById('lessCounter');
const reset = document.getElementById('reset');

let newNum;

add.addEventListener('click', function() {
    newNum = Number(currentNum.innerHTML) + 1 ;
    currentNum.innerHTML = newNum;
    document.getElementById('zero').style.color = 'green'
});

mines.addEventListener('click', function () {
    newNum = Number(currentNum.innerHTML) - 1;
    currentNum.innerHTML =newNum;
    document.getElementById('zero').style.color = 'red'
})

reset.addEventListener('click', function () {
    currentNum.innerHTML = 0
    document.getElementById('zero').style.color = 'white'
})

    //mini peroject 2
/*
   const element1 = document.getElementById('book');
   var x = element1.scrollHeight;
   var y = element1.scrollWidth;

   const element2 = document.getElementById('article');
   var x = element2.scrollHeight;
   var y = element2.scrollWidth;

   const element3 = document.getElementById('scince');
   var x = element3.scrollHeight;
   var y = element3.scrollWidth;* */

   const book = document.getElementById('book');
   const article = document.getElementById('article');
   const scince = document.getElementById('scince');

   const clickScroll1 = document.getElementById('ScrollH1');
   const clickScroll2 = document.getElementById('ScrollH2');
   const clickScroll3 = document.getElementById('ScrollH3');

   

   clickScroll1.addEventListener('click', function () {
    clickScroll1.classList.toggle("action");
    if (book.style.maxHeight) {
      //  book.style.display = "block";book.style.display === 'none'
      book.style.maxHeight = null
        
    }else{
       // book.style.display = "none";
        book.style.maxHeight = book.scrollHeight + 'px'
    }
   })

   clickScroll1.addEventListener('click', function () {
    if (bi.style.display === 'none') {
        bi.style.display = 'block';
        this.classList.add('ci')
    } else {
        bi.style.display = 'none';
    }
   })
  /* bi.addEventListener('click', function () {
    if (book.style.display === 'none') {
        book.style.display = "block";
        this.classList.add('bi');
    }else{
        book.style.display = "none";
        this.classList.add('bi');
    }    
    })* */

   clickScroll2.addEventListener('click', function () {
    if (article.style.display === 'none') {
        article.style.display = "block";
    }else{
        article.style.display = "none";
    }
   })

   clickScroll3.addEventListener('click', function () {
    if (scince.style.display === 'none') {
        scince.style.display = "block";
    }else{
        scince.style.display = "none";
    }
   })