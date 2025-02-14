// SECION 4
// DOM , w3schools

//let url0 = window.document.URL;
let url1 = document.URL;
//document.getElementById('Doc.window').innerHTML = url0;
document.getElementById('Doc.window').innerHTML = url1;

// HTML DOC Documet activeElement
function myFunction() {
    const element = document.activeElement.tagName;
    document.getElementById("demo").innerHTML = element;
  }
