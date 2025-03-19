// Computer syule , video 118
let container = document.getElementById('container');
let cStyle = getComputedStyle(container);
console.log(cStyle.background);

// Change css value
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
