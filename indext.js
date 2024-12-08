// Challenge

var massM , heightM , massJ , heightJ ;

massM = 85;
heightM = 1.85;

massJ = 71;
heightJ = 1.79;

var BMIMark = massM / ( heightM ** 2 ) ;
console.log(BMIMark);

var BMIJohn = massJ / (heightJ ** 2);
console.log(BMIJohn);
if (BMIJohn > BMIMark){
    console.log('john higher');
}else {
    console.log('mark higher');
}
// if/else statements
var fullname = 'Bita zarei';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(fullname + ' is married ');
}else{
    console.log(fullname + ' is so single');
}
// Boolean logic
var itIsRaining = false;
var itIsCloudy = true;
var itIsCold = true;
if (itIsRaining === true && itIsCloudy === false){
    console.log('it is not cold');
}
else if(itIsRaining === true && itIsCloudy === true){
    console.log('it is cold');
}
else{
    console.log('it is sunny');
}
console.log( 'it is cloudy ? ' + ! itIsCloudy + '  ,  it is cold ? ' + ! itIsCold);

if (itIsCold === false || itIsCloudy === true){
    console.log(! true);
    //console.log( ' it is cloudy ? ' + ! itIsCloudy + ' it is cold ? ' +  ' ' + ! itIsCold);
}else{
    console.log('it is sunny :)');
}

// Ternary operator

itIsRaining === true ? console.log(itIsCloudy + ' ' + itIsCold)
: console.log(! itIsCloudy + ' ' + ! itIsCold);

// Switch Statements

switch(itIsRaining , itIsCloudy , itIsCold){
    case itIsRaining === true && itIsCloudy === false :
        console.log('it is XD not cold');
    break;
    case itIsRaining === true && itIsCloudy === true :
        console.log('it is cold'); 
    break;
    case itIsRaining === false && itIsCloudy === true :
        console.log('it is sunny');         
    default:
        console.log('the weather is just like that , you know...');
}

// Truthy and falsy values

var BG = '';
if (BG) {
    console.log('that is truthy values');
} else {
    console.log('that is falsy values');
} 