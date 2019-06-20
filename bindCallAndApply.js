/*************************************************
    Bind, Call and Apply
*/

//Call

var john = {
    name: 'John',
    age: 23,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + '. I\'m a ' + this.age + ' and I\'m ' + this.year + ' years old.');
        }
        else if( style === 'friendly'){
            console.log('Hey! whats up? I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

john.presentation('formal', 'morning');

var raju = {
    name: 'Raju',
    job: 'Driver',
    age: '28'
}
// here 'raju' object does not have any method and if it want to use method from another object we have to use 'call' method.
// the first argument of the 'call' method sets the 'this' variable. 

john.presentation.call(raju, 'friendly', 'afternoon');

// 'this' of john is assigned as raju and now 'this' as access of the variables of raju-object.

// it is borrowing method from one object to another.
/******************************************************************************************************************/

// Apply method
// accepts arguments as an array. has only 2 argument, 1st: 'this' keyword, 2nd: Array-having all the other argument.
/******************************************************************************************************************/


// Bind Method
// similar to call method, also allows us to set 'this' explictly. However the difference is the bind does not immediately calls the function 
// but instead it generate a copy of it, which can be stored somewhere.
// bind allows us to preset arguments.

var johnFriendly = john.presentation.bind(john, 'friendly');
// bind presets the fisrt argument of the presentation function and create a new copy of the function.

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(raju, 'formal')
// 'this' has assigned with emily and the 1st argument of presentation is preset with formal.

emilyFormal('afternoon');
