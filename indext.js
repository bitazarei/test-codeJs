// Array
// initialize new array

var Sara = ['Green',28,'hiar cut'];

console.log(Sara);
console.log(Sara[2]);
console.log(Sara.length);
/* 
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

*/
//challenge 3

// less $50 ==> 20% bill
// between $50 and $200 ==> 15%
// more  $200 ==> 10%

var calculator = [124 , 48 , 268];
var amount = [0.15, 0.2 , 0.1];
console.log(calculator);

console.log('bill : '+ (calculator[0]+ calculator[0]*amount[0]));
console.log('bill : '+ (calculator[1]+ calculator[1]*amount[1]));
console.log('bill : '+ (calculator[2]+ calculator[2]*amount[2]));

//console.log('bill : '+ (calculator[0]+ calculator[0]*0.15));
//console.log('bill : '+ (calculator[1]*0.2 + calculator[1]));
//console.log('bill : '+ (calculator[2]*0.1 + calculator[2]));



function cal(bill) {
    var percent;
    if(bill<50){
        percent = 0.2;
    }else if (bill >= 50 && bill < 200){
        percent = 0.15;
    }else{
        percent = 0.1;
    }
    return percent * bill ;
}
var bills = [124 , 48 , 268];
var resultt = [ cal(bills[0]) + bills[0],
                cal(bills[1]) + bills[1],
                cal(bills[2]) + bills[2],
            
];
console.log(resultt);


// exercise

function expenses(monny){
    var tax;

    var tip;

    if(monny < 30){
        tax = 0.05;
        tip = 0.1;
    }else if (30 <= monny && monny < 60 ){
        tax = 0.08;
        tip = 0.12;
    }else{
        tax = 0.1;
        tip = 0.15;
    }
    return tip * monny + tax * monny;
    
};

var dulers = [22, 45 , 78];
var cal = [ expenses(dulers[0]) + dulers[0],
            expenses(dulers[1]) + dulers[1],
            expenses(dulers[2])+ dulers[2]

];
console.log(cal);
