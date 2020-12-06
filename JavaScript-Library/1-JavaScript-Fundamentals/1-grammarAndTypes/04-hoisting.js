/*
HOISTING - something you should know about, but NOT take advantage of. You should set your code in a manner that is easy to read.
*/

//example 1:
console.log(scissors);
var scissors = 'blue';

//example 1 breakdown:
//you can define a variable after you use a variable in javascript
var scissors;
console.log(scissors);
scissors = 'blue';

//example 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//example 2 breakdown:
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}

hoistTest();