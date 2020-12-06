/*
FUNCTIONS:
-Javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-Function declarations are hoisted in our code, and run ONLY when we call them(invoke them).
So any function in our code sits and waits to be ran until we call it by name. Think of it as a student with his or her hand up, 
waiting to ask a question. That student does not ask the question until the teacher calls upon them.

-Function expressions are not hoisted and are generally stored in variables.

-Functions without names are known as anonymous functions.
*/

//Function Declaration

function nameOfFunction() {
    console.log("Hi");
}

nameOfFunction(); //calling (or invoking) function here - We get the output "Hi"

//Function Expression

let greetings = function () {
    console.log("Hello");
}

greetings(); //calling upon the variable of greetings which is storing the function. The parantheses invoke the function. We get "Hello" on the output here

/*
Parameters

- Think of parameters as a newly declared variable that we have not given a value to yet.
    - The value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter.
    - General naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. 
    If we're passing in an integer, we may name our parameter num or number.
*/

function myDog(husky) { //husky is the parameter-our placeholder variable to be used within the {} of our function
    console.log(`My dog's name is ${husky}`);
}

myDog("Princess"); //My dog's name is Princess - "princess" is the arguemtn while husky is the parameter
myDog("Luna"); //My dog's name is Luna 

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`)
}

allMyDogs("Mira", "Luna", "Charlie");

/*
Return

-functions can also manipulate the data sent to them, and return a new value

-Code below the return does not get executed
*/

function calculator(one, two, three) {
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return `The average weight is ${average}`;
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*
Arrow Functions

-Arrow Functions (or fat arrow functions "=>") were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
    -This means that arrow functions do NOT get hoisted.

-There are two types of arrow functions: concise body and block body.
    -The return happens automatically with a concise body arrow function
    -The return does not happen automatically with a block body arrow function
*/

//Concise body
let speak = (name) => console.log(`${name} goes woof!`);
speak("Luna"); //invoking the function, supplying an argument

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("Donovan", "Triplett"); //nameJoiner calls the function and the parantheses invoke it
console.log(fullName); 

//Block Body
let speak = (name) => {
    console.log(`${name} goes woof!`)
}

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}

let fullName = nameJoiner("Donovan", "Triplett");
console.log(fullName)

// PRACTICE I
// Write a function that takes two paramters (length and width) that returns the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// Console log the variables
// Example: 4 by 8 rectangle will give 32;

function areaCalculator(length, width) {
    let area = length * width;
    return area;
}

let area1 = areaCalculator(5,2);
let area2 = areaCalculator(10,2);
console.log(area1);
console.log(area2);

//Practice II

// Write a function that will convert dog years to human years
// Formula for conversion - Human Age = (Dog Age -2) x 4 + 21

function thisIsAFunctionThatConvertsDogYearsToHumanYears(dogAge){
    let humanAge = (dogAge - 2) * 4 + 21
    return humanAge; 
}

console.log(thisIsAFunctionThatConvertsDogYearsToHumanYears(33));

// OR can be done this was as well
// function thisIsAFunctionThatConvertsDogYearsToHumanYears(dogAge){
// return (dogAge - 2) * 4 + 21
// }
