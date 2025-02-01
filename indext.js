// Array
// initialize new array
var Sara = ['Green',28,'hiar cut'];


console.log(Sara);
console.log(Sara[2]);
console.log(Sara.length);

// mutate array data
Sara[0] = 'Smith';
    //Sara[5] = 'single';
Sara[Sara.length] ='single';
Sara.push('blue');
Sara.unshift('berger');
Sara.shift();
Sara.pop();

console.log(Sara);
console.log(Sara.indexOf(28));
console.log(Sara.indexOf('nh'));

var shebb = Sara.indexOf(45) === -1 ? '45 years olld' : 'not';
console.log(shebb);
// array in a different way
var ExBoyfreands = new Array(ben , jack);