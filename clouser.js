/*************  Clouser **************/
/*
    An inner function has always access to the variales and parameters of its outer function,
    even after the outer function has returned. It is clouser.

*/


function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age + a));
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIndia = retirement(60);

retirementUS(1998);
retirementGermany(1998);
retirementIndia(1998);

/*
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
}*/

// above fnction is rewritten using clouser below.

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ',can you please explain what UX design is?');
        }
        else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }
        else{
            console.log('hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');