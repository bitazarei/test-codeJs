// Object properties
var myObject = {
    firstName : 'Jane',
    lastName : 'Green',
    age : 28,
    job : 'manager',
    fullName : function(){
       return this.firstName+ ' ' +this.lastName;
    },
    favoriteFruits : ['banana','apple','avocado']
    
}
//alert(myObject.firstName + ' is ' + myObject.age)
console.log(myObject.fullName());
myObject.lastName = 'smith';
myObject['job'] = 'driver';
console.log(myObject);

var x = 'lastName';
console.log(myObject[x]);

console.log(myObject.age);
console.log(myObject['job']);
console.log(myObject.favoriteFruits);


var F = new Object();
F.color = 'red';
F.food = 'pasta';
F['movie'] = 'silent of the lambs';
console.log(F);