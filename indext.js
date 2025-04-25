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