// Object properties
var myObject = {
    firstName : 'Jane',
    lastName : 'Green',
    age : 28,
    job : 'manager',
    fullName : function(){
       return (this.firstName+ '  ' +this.lastName).toUpperCase();
    },
    favoriteFruits : ['banana','apple','avocado'],
    janeSis : {
        firstName : 'alisha',
        lastName : 'goldman',
        age : 21
    }
    
}
console.log(myObject.janeSis.firstName);
//alert(myObject.firstName + '  ' + myObject.age + ' ' + myObject.fullName());
console.log(myObject.fullName());
myObject.lastName = 'smith';
myObject['job'] = 'driver';
console.log(myObject);

var x = 'lastName';
console.log(myObject[x]);


var F = new Object();
F.color = 'red';
F.food = 'pasta';
F['movie'] = 'silent of the lambs';
console.log(F);
delete F.color;
//alert(F.color + ' That color is red')