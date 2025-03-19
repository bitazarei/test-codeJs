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
  }
}
// function gameA() {
//             document.getElementById('gemeAgane').innerHTML = location.reload();

//      }
// document.getElementById('textW').style = '.textWinner';