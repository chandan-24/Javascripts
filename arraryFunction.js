//**************    Array   ***************//


// initializing new array
var names = ['john','jane','mark'];
var years = new Array(23, 34, 24);

console.log(names);
console.log(names.length);
console.log(names[1]);

// mutate array
names[1] = 'ben';
names[names.length] = 'marry';
console.log(names);

// different data types in a single array

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');  // add at the end
john.unshift('Mr.'); // add at the front
console.log(john);

john.pop()      // delete from the end
john.pop()
john.shift()    // delete from the front
console.log(john);


console.log(john.indexOf(123));
console.log(john.indexOf('teacher'));


//**************    Function   ***************//

function calculateAge(birthYear){
    return 2019-birthYear;
}

var ageJohn = calculateAge(1998);
var ageRam = calculateAge(1987);
var ageTom = calculateAge(1996);
console.log(ageJohn, ageRam, ageTom); 

function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
    else{
        console.log(firstName + ' is already retired.');
    }
}

yearUntilRetirement(1990, 'Ramu');
yearUntilRetirement(1989, 'Teja');
yearUntilRetirement(1944, 'Gandhi');


/****************************************
 * Function Statements and Expressions
 */

// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids';
        case 'driver':
            return firstName + ' drives uber';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does nothing';
    }
}

console.log(whatDoYouDo('teacher', 'Rajesh'));
console.log(whatDoYouDo('driver', 'Rajesh'));
console.log(whatDoYouDo('retired', 'Rajesh'));


//  javascript expressions are a piece of code that always produce a value.
//  whatDoYouDo('teacher', 'Rajesh') is a expression

// statements, eg: if-else, while loop, coercion etc.

// if( console.log(23) ); ==> here the returned value of if will be undefined in the terminal.