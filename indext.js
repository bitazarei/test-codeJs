// Functions
/*
function calculateAge(year , firstName){
    var age = 2025 - year;
    console.log(age);
    var retired = 65 - age;
    console.log(firstName + ' will retire in ' + retired + ' years')
}
calculateAge(2006 , 'Mall');
*/ 
// Functions statement and expressions

var age = function(yearbirth , name){
    switch(yearbirth) {
        case '19':
        return name + ' years old';
        
        case '23':
        return name + ' years old';

        case '32':
        return name + ' years old';

        case '91':
        return name + ' years old';
            
    }
}

console.log(age('19','Sara' ));
console.log(age('23','Zara' ));