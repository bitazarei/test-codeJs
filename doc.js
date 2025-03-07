var doc = document;
console.log(doc);

// getElementById
var element = document.getElementById('myList');
console.log(element);
console.log(typeof element);

// getElementByTagName
var TN = document.getElementsByTagName('p');
console.log(TN);
console.log(TN[3]);

// getElementByClassName
let CN = document.getElementsByClassName('p1');
console.log(CN);

// querySelector
var QS = document.querySelector('p')
console.log(QS);

// querySelectorAll
var QSA = document.querySelectorAll('.p1')
console.log(QSA);

var showL = document.querySelector('.myList')
console.log(
    typeof showL ,
    showL.parentNode.nodeName , 
    showL.firstElementChild ,
    showL.lastElementChild ,
    showL.childElementCount
    );

console.log(showL.innerHTML);

// attribute add , remove , call 

  // call
var callP = document.getElementById('myp1');
console.log(callP.id);

var callP2 = document.getElementById('myp1');
console.log(callP2.className);

var callP2 = document.getElementById('myp1');
console.log(callP2.title);

  // getAttribute | call another
var callAnother = document.getElementById('myp1');
console.log(callAnother.getAttribute('id'));

  // setAttribute | add
var add = document.getElementById('myp1');
//console.log(add.setAttribute('class','show')); //correct
add.className = 'myClass';    //correct

  // removeAttribute | remove
var remove = document.getElementById('myp1');
console.log(remove.removeAttribute('title'));


// Floor method
console.log(Math.floor(1.2));
console.log(Math.floor(-3.2));

// Random method
//var RM = Math.random()*11
//console.log(RM);

// Bach tick
var firstName = 'Bita';
console.log(`my name is ${firstName}`);

// Random Color
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randColor() {
  return `rgb(${randNum(20 , 120)}, ${randNum(20 , 130)} , ${randNum(20 , 130)})`;
}

function changeColor() {
document.getElementById("demo").style.backgroundColor = randColor();
}