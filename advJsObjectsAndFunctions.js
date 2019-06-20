//  function Constructor 

var john = {
    name : 'John',
    yearOfBirth : 1998,
    job : 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';



// Instanciation od Person object, using new keyword

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1998, 'designer');
var mark = new Person('Mark', 1987, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john);
console.log(mark.lastName);
console.log(jane.lastName);

//  Object.create method to create object
//  We first define an object that will act as a prototype and then creare a new object based on that prototype

var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var ram = Object.create(personProto);
ram.name = ' Ram';
ram.yearOfBirth = '1987';

var sam = Object.create(personProto,
    {
        name : {value: 'Sam'},
        yearOfBirth : {value: 1997},
        job : { value : 'student'}
    });


/******************************************************************************************
Object.create builts an object that inherits directly from the first argument that we have passed;

function contructor, the new created objects inherit from the contructor prototye properties

*/

// First class function - function accepting function

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
        return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }
    else{
        return -1;
    }
}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);




// function returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name + ',can you please explain what UX design is?');
        }
    }
    else if(job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else{
        return function(name) {
            console.log('hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Mark');

interviewQuestion('driver')('Joseph');


//  IIFE: Immediately Invoked Function Expression

function game(){
    var score = Math.round() * 10;
    console.log(score >= 5);
}

// ( '_______' ) => anything written inside parantheses cannot be statement and JS treat this as expression, not as declaration.
// also the function inside as paranthese is not attached to any variables so it is not usable again and is invoked once.

( function () {
    var score = Math.random() * 10;
    console.log(score <= 5); 
}) ();

// We are creating a new scope which is hidden from outside scope.

// we can longer access the 'score' variable from outside and here we created data privacy.
// we can also pass argument in the IIFE.

( function (goodLuck) {
    var score = Math.random()*10 - goodLuck;
    
    console.log(score <= 5); 
}) (5);     // passing argument in IIFE


