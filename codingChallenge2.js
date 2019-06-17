/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and 
       print the winner to the console. Also include the average score in the output.
    3. Then change the scores to show different winners. Don't forget to take into account
       there might be a draw (the same average score)
    4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
       Like before, log the average winner to the console. 
       HINT: you will need the && operator to take the decision. keeping in mind there might be draws.
*/


var johnScore = [89, 120, 103];
var mikeScore = [116, 94, 123];

var avgJohn = (johnScore[0]+johnScore[1]+johnScore[2])/3;
var avgMike = (mikeScore[0]+mikeScore[1]+mikeScore[2])/3;

if(avgJohn > avgMike){
   console.log("john's team win. " + avgJohn)
}
else if (avgJohn < avgMike){
   console.log("mike's team win. " + avgMike)
}
else{
   console.log("there is a tie");
}
var marryScore = [97, 134, 105];
var avgMarry = (marryScore[0]+marryScore[1]+marryScore[2])/3;

if(avgJohn > avgMarry && avgJohn > avgMike){
   console.log("john's team win. " + avgJohn);
}
else if(avgJohn < avgMarry && avgMarry > avgMike){
   console.log("marry's team win. " + avgMarry);
}
else if(avgJohn < avgMike && avgMarry < avgMike){
   console.log("mike's team win. " + avgMike)
}
else{
   console.log("there may be a tie");
}