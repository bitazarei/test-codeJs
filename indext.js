var x = (89+ 120+ 103)/3;
var y = (120+ 94+ 123)/3
var z = (97+ 134+ 105)/3;
console.log(x,y,z);

if(x > y && x > z){
    console.log('x is winner with ' + x + ' point');
 }
 else if (y > x && y > z ){
    console.log('y is winner with ' + y + ' point');
 }
else if (z > x && z > y) {
    console.log('z is winner with ' +  z + ' point');
}else if (x === z ){
    console.log('x equal z');
}else if (y === z){
    console.log('y equal z');
}else if (y === x){
    console.log('y equal x');
}