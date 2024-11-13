var massM , heightM , massJ , heightJ ;

massM = 85;
heightM = 1.85;

massJ = 71;
heightJ = 1.79;

var BMIMark = massM / ( heightM ** 2 ) ;
console.log(BMIMark);

var BMIJohn = massJ / (heightJ ** 2);
console.log(BMIJohn);

// var BIMolder = BMIJohn > BMIMark;
// console.log(BIMolder);

if (BMIJohn > BMIMark){
    console.log('john older');
}else {
    console.log('mark olderrrr');
}

// var BIMolderr = BMIMark;

// if (BIMolderr = 'BMIMark'){
//     console.log('john sooooooo older');
// } else {
//     console.log('nooo not isn\'t');
// }