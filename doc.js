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