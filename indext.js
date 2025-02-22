// adoptNode()
/*
const iframe = document.getElementById('myIframe');

// body
function myFunction() {

  let p = document.createElement('p');
  let txt = document.createTextNode ('my name is Bita');

  p.appendChild(txt);
  document.body.appendChild(p);
}

// characterSet
  //The characterSet property returns the character encoding for a document.

let encoding = document.characterSet;
document.getElementById("docT").innerHTML = encoding;


function clo() {
  let myClo = window.open();
  myClo.document.open();
  myClo.document.write('<h1>BITA  ZAREI</h1>')
  myClo.document.close();
}
* 
let allcooki = document.cookie;
document.getElementById('h1').innerHTML = allcooki;
*/

//creat attribute
function myFunction() {
  const attr = document.createAttribute("href");
  attr.value = "https://www.w3schools.com";
  
  document.getElementById("myAnchor").setAttributeNode(attr);
  }

  // Creat comments
  var comments = document.createComment('my comment');
  document.body.appendChild(comments);
  document.getElementById('demo').innerHTML = 'comments are invisible';

  document.getElementById('wF').innerHTML = 'Hi , how are you';

  // Creat document

  var fruits = ['banana', 'apple' , 'mango'];

  var dfrage = document.createDocumentFragment();

  for (let i in fruits) {
    var li = document.createElement('li');
    li.textContent = fruits[i];
    dfrage.appendChild(li);
  }
document.getElementById('myList').appendChild(dfrage)