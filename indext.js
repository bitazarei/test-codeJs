 //loops and iteration

for( let i = 0; i < 10; i++){

     console.log(i);
}
// var x = 0;   
// while (x < person.length){
//      console.log(x);
//      x++
//  }

var person = [
 'jane','smith', 28 , 'manager'
];
for (var i = 0; i < person.length; i++) {
    if (typeof person[i] !== 'string')continue ;
        
        console.log(person[i]);
}
for (var i = 0; i < person.length; i++) {
    if (typeof person[i] !== 'string')break ;
        
        console.log(person[i]);
}
// for(var i = person.length -1; i >= 0; i--){
//     console.log(person[i]);
//    }

var fruits = {
    fruit1 : 'banana',
    fruit2 : 'apple',
    fruit3 : 'orange'
}
var txt = '';
for(let i in fruits){
    
   txt += console.log(fruits[i]);
};

