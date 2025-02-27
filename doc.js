var doc = document;
console.log(doc);

// getElementByTd
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


// change innerHTML

  function changeT() {
    document.getElementById('demo').className = 'changedDemo';
}

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
