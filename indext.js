var myObject = {
    firstName : 'Jane',
    lastName : 'Green',
    age : 28,
    job : 'manager',
    favoriteFruits : ['banana','apple','avocado']
}
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