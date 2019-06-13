var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will marry soon!');
}

var isMarried = true;
if(isMarried)
{
    console.log(firstName + ' is married!');
}
else{
    console.log(firstName + ' will marry soon!');
}


var weightJohn, weightMark, heightMark, heightJohn, bmiJohn, bmiMark;
weightJohn = 56;
weightMark = 53;
heightJohn = 1.80;
heightMark = 1.79;

bmiJohn = weightJohn / (heightJohn*heightJohn);
bmiMark = weightMark / (heightMark*heightMark);

if(bmiJohn>bmiMark)
{
    console.log("John's BMI is higher.");
}
else{
    console.log("Mark's BMI is higher.");
}



/************************
*   Boolean logic
*/

var name = 'Ram';
var age = 16;

if(age < 13 ){
    console.log(name + ' is a boy.');
}
else if(age >= 13 && age < 20){
    console.log(name + ' is a teenager.');
}
else if(age >= 20 && age < 30){
    console.log(name + ' is a young man.');
}
else{
    console.log(name + ' is a man.');
}