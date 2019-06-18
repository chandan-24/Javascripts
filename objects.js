/********* Objects and properties *********/

// object litral

var john = {
    firstName : 'Johnny',
    lastName : 'English',
    birthYear : 1968,
    job : 'detective',
    isMarried : false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'kicked out';
john['isMarried'] = true;
console.log(john);


// new object syntax

var jane = new Object();
jane.firstName = 'Mary';
jane['lastName'] = 'jane';
jane.birthYear = 1984;
console.log(jane);



/********* Objects and Methods *********/

var john = {
    firstName : 'Johnny',
    lastName : 'English',
    birthYear : 1968,
    job : 'detective',
    isMarried : false,

    calcAge : function(){                   // use of this keyword
        return 2019 - this.birthYear;
    },
    calcAge1 : function(birthYear){         // function with parameter
        return 2019 - birthYear;
    },
    calcAge2 : function(){                  // use of this keyword
        this.age = 2019 - this.birthYear;
    }
};

console.log(john.calcAge1(1989));
john.age = john.calcAge();
console.log(john.age);
john.age = 34;
console.log(john.age);
john.calcAge2();
console.log(john.age);
