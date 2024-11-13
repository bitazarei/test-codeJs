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

var fullname = 'Bita zarei';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(fullname + ' is married ');
}else{
    console.log(fullname + ' is so single');
}