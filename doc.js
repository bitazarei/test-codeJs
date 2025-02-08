/// peroject and practice

/*const fruits = ["Banana", "Orange", "Apple"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits[fruits.length] = "Lemon";
  document.getElementById("demo").innerHTML = fruits;
};*/

//practice 1

/*
function ageCheck(x) {
    if (x < 18){ 
        console.log("You can't vote.");
    }else{
        console.log("You can vote.");
    }
}
ageCheck(19);

//practice 2
var nums = [45 , 62 ,79 , 85 , 98];

function score(num) {
    let mark;
    if(num < 60){
        mark = 'F';
       
    }else if ( 60 <= num  && num < 70) {
        mark = 'D';
        
    }else if (70 <= num && num < 80) {
        mark = 'C';
        
    }else if (80 <= num && num < 90) {
        mark = 'B';
        
    }else{
        mark = 'A';
    }; 
    return mark;
};
var res = [ score(nums[0]),
            score(nums[1]),
            score(nums[2]),
            score(nums[3]),
            score(nums[4]),

];
console.log(res);
*/

//practice 3

/** 
var y = [123 ,55] ;
function password(d) {
    let x;
    if (d === 123) {
         x = true;
        console.log("Password is correct");
    }else{
        x = false;
        console.log("Password is not correct");
    }return x;
};
var oup =[password(y[0]),
          password(y[1])
        ];
console.log(y[0] + " = "+ oup + " = " + y[1]);
*/


// practice 4
/*
const temp = [-1];
document.getElementById("demo").innerHTML = temp;

function temperature(x){
    if(x < 0){
        document.getElementById("demo").innerHTML = temp;
        temp[temp.length]="Wear a heavy coat."
        console.log('Wear a heavy coat.');
    }else if(0 <= x && x < 15){
        document.getElementById("demo").innerHTML = temp;
        console.log('Wear a light jacket.');
    }else{
        document.getElementById("demo").innerHTML = temp;
        console.log('A t-shirt is fine.');
    }; return x
};
var call = [ temperature(temp[0]),
             //temperature(temp[1])
];
console.log(call);

// challeng _ lecture 23

// hight john = 1.72 & weight john = 80
// hight mark = 1.52 & weight mark = 65
*/
/*
var BMI = {
    hightJohn : 1.42 ,
    weightJohn : 45,
    hightMark : 1.52,
    weightMark : 65,

    BIMJohn: function() {
        return this.weightJohn / (this.hightJohn * this.hightJohn);

       },

    BIMMark: function() {
        return this.weightMark / (this.hightMark * this.hightMark);

       }

}
console.log(BMI.BIMJohn() , BMI.BIMMark());

if (BMI.BIMJohn() > BMI.BIMMark()) {

    console.log('John BMI more Mark BMI' + ' John BMI = ' + BMI.BIMJohn());

}else if (BMI.BIMMark() > BMI.BIMJohn()){

    console.log('Mark BMI more John BMI, ' + ' Mark BMI = ' + BMI.BIMMark());
}else{

    console.log('each equal,  BMI = ' + BMI.BIMJohn());
}
    
*/
