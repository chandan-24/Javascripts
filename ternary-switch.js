var age = 14;

var drink;

if(age < 18){
    drink = 'milk';
}
else{
    drink = 'juice';
}

console.log("the boy aged " + age + " drinks " + drink);

age = 20;
//   tarnary operator (condition)?(statement1):(statement2)

drink = age >= 18 ? 'bear' : 'juice';
console.log("the boy aged " + age + " drinks " + drink);


// switch statement
var name = 'adam';
var job = 'teacher'
switch(job){
    case 'teacher':
        console.log(name + ' teaches in school.');
        break;
    case 'driver':
        console.log(name + ' drives an uber.');
        break;
    case 'designer':
        console.log(name + ' is a costume designer.');
        break;
    default:
            console.log(name + ' does something else.');
}