// Functions

function calculateAge(year , firstName){
    var age = 2025 - year;
    console.log(age);
    var retired = 65 - age;
    console.log(firstName + ' will retire in ' + retired + ' years')
}
calculateAge(2006 , 'Mall');