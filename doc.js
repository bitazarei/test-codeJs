//Play dice game
  //Dice1
let totalSum = 0;

function dice1() {
  var Dice = Math.floor(Math.random() * 6) + 1;
  return Dice ; 
}

function dicePlay1() {
  const roll = dice1(); // Roll the dice
  totalSum += roll;
  document.getElementById('dice').innerHTML = roll;
  checkPoints();
}

function sumDice1() {
  document.getElementById('sumDice').innerHTML = totalSum;
}

  // Dice 2
let TotalSum = 0;

function dice2() {
  var Dice = Math.floor(Math.random() * 6) + 1;
  return Dice ; 
}

function dicePlay2() {
  const roll = dice2(); // Roll the dice
  TotalSum += roll;
  document.getElementById('dice2').innerHTML = roll;
  checkPoints();
} 

function sumDice2() {
  document.getElementById('sumDice2').innerHTML = TotalSum;
}

function checkPoints() {
  if (totalSum >= 50){
    document.getElementById('textW').innerHTML = 'Player 1 won';
    document.getElementById('gameOver').innerHTML = 'Game over';
    document.getElementById('gemeAgane').innerHTML = 'Game agane ?';
    var on = document.getElementById('gemeAgane');
    on.onclick = function onC() {
      location.reload();
    }
   }
  else if (TotalSum >= 50){
    document.getElementById('textW').innerHTML = 'Player 2 won';
    document.getElementById('gameOver').innerHTML = 'Game over';
    document.getElementById('gemeAgane').innerHTML = 'Game agane ?';
    var on = document.getElementById('gemeAgane');
    on.onclick = function onC() {
      location.reload();
    }
  }
}
//////////////////////////
//////////////////////////////

// Rock Paper Scissors Game


var words = [ 'rock' , 'paper' , 'scissors'];
function randomWord(arr) {
  var random = Math.floor(Math.random() * arr.length);
  return random
}
console.log(randomWord(words));
 
const R = document.querySelector('.Rock');
const P = document.querySelector('.Paper');
const S = document.querySelector('.Scissors');
//const status =document.querySelector('.status')

R.addEventListener('click' , function () {
  R.classList.toggle("active");
  const func = randomWord(words);
  if (func === 0) {
    document.querySelector('.status').innerHTML = 'equal';
    document.querySelector('.computerSta').innerHTML = 'Rock';
  }else if ( func === 1) {
    document.querySelector('.status').innerHTML = 'you losing';
    document.querySelector('.computerSta').innerHTML = 'paper'
  }else{
    document.querySelector('.status').innerHTML = 'you won !';
    document.querySelector('.computerSta').innerHTML = 'scissors';
  }
})

P.addEventListener('click' , function () {
  P.classList.toggle("active");
  const func = randomWord(words);
  if (func === 0) {
    document.querySelector('.status').innerHTML = 'you won !';
    document.querySelector('.computerSta').innerHTML = 'Rock';
  }else if ( func === 1) {
    document.querySelector('.status').innerHTML = 'equal';
    document.querySelector('.computerSta').innerHTML = 'paper'
  }else{
    document.querySelector('.status').innerHTML = 'you losing';
    document.querySelector('.computerSta').innerHTML = 'scissors';
  }
})

S.addEventListener('click' , function () {
  S.classList.toggle("active");
  const func = randomWord(words);
  if (func === 0) {
    document.querySelector('.status').innerHTML = 'you losing';
    document.querySelector('.computerSta').innerHTML = 'Rock';
  }else if ( func === 1) {
    document.querySelector('.status').innerHTML = 'you won !';
    document.querySelector('.computerSta').innerHTML = 'paper'
  }else{
    document.querySelector('.status').innerHTML = 'equal';
    document.querySelector('.computerSta').innerHTML = 'scissors';
  }
})