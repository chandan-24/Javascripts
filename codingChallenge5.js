/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
    1. Create an object with an array for the bill values
    2. Add a method to calculate the tip
    3. This method should include a loop to iterate over all the paid bills and do the tip calculations
    4. As an output, create 1) a new array containing all tips, and 2) an array containing final
       paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

    5. Create a function (not a method) to calculate the average of a given array of tips. 
    
*/


var bills = {
    billValue : [124, 48, 268, 180, 42],

    calTip : function(){
        this.tips = new Array();
        this.finalAmount = new Array();
        for( var i=0; i<this.billValue.length; i++){
            var tip;
            if(this.billValue[i] < 50){
                tip = 0.2*this.billValue[i];
            }
            else if(this.billValue[i] >=50 && this.billValue[i]<200){
                tip = 0.15*this.billValue[i];
            }
            else{
                tip = 0.1*this.billValue[i];
            }
            this.tips.push(tip);
            this.finalAmount.push(this.billValue[i]+this.tips[i]);
        }
        console.log(this.tips, this.finalAmount);
    },
    calcAvg : function(){
        var sum=0;
        for(i=0; i<this.billValue.length; i++){
            sum+=this.billValue[i];
        }
        this.avg = sum/this.billValue.length;
        console.log(this.avg);
    }
}

bills.calTip()
bills.calcAvg()