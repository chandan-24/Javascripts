/*****************************************************************************************************
*   Mark and john are trying to compare thrir BMI, which is calculated using the formula BMI = mass / height^2.
*   (mass is kg and height in m)
*   1. store Mark's and john's height and mass in variables.
*   2. Calculate thier BMIs.
*   3. create a boolean variables containing informaton about whether Mark has a higher BMI than John.
*   4. Print a string to the console containing the variable from step 3.
*      (something like "Is Mark's BMI higher than John's? true")
*/

// solution

var weightJohn, weightMark, heightMark, heightJohn, bmiJohn, bmiMark;
weightJohn = 56;
weightMark = 59;
heightJohn = 1.80;
heightMark = 1.79;

bmiJohn = weightJohn / (heightJohn*heightJohn);
bmiMark = weightMark / (heightMark*heightMark);

var isMark = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's? " + isMark);