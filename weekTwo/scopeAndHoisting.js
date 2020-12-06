/*
HOISTING

- hoisting was thought up as a general way of thinking about how our code is compiled and executed.
    - there are two general phases that happen when we run our code:
    - execution phase: values are assigned to the variables and functions that were stored to memory during the create phase

    (what's on the left side of the = is what's stored to member during the creation phase) ---> let hoisted = true <--- (the value, or the right side of the =, is what gets assigned during the execution phase - before finally then running our code.)

- Conceptually, pretend that all variable and function declarations are physically moved to the top of your code, and stored away in memory.

- when our code is read, the file is read top to bottom, line by line, in sequential order.

- "Let" and "Const" are the best practice keywords for creating functions
*/

goodBye();
var hello = "hello";

console.log(hello);

function goodBye(){
    console.log("goodbye");
}

// functions and variables get hoisted, let does not get hoisted

console.log(name);
let name = "Rob";  //this will come back with an error "cannot access 'name' before initialization"


let name2 = "rob";
console.log(name2); //this will work and come back as "rob"

/*
************
  SCOPE
************

    - scope is the hierarchy of variscoables in our code - also commonly referred to as global scope and local scope, or parent scope and child scope. 
        - local scopes have access to global scopes, but not vice versa.

        overall JS document ---> [

                                    let coffeeType = 'dark roast'; <--- parent scope, or global scope. Can be accessed in local scopes
                                    
                                    function exampleFunction() {
                                        let x = 'declared inside function'; <--- x can only be used in exampleFunction. x's scope is local 
                                                                                 to exampleFunction 
                                    }

                                    console.log(x); // error, cannot access x outside of it's scope

                                ]
    

    MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope
*/

//Example 1

var coffeeType = "dark roast";

function exampleFunction(){
    var coffeeType = "vanilla roast";
    console.log(coffeeType)
}

exampleFunction(); //you have to call the function like this or the function won't do anything

console.log("Outside the function", coffeeType);

//Example 2

var x = "Lindsay"

function scope(){
    var x = "world"
    if(true == true){
        var x = "Hello";
        console.log("From if statement", x);
    }
    console.log("From function", x);
}
scope();

console.log("Outside the function", x);

//var scope goes to the nearest FUNCTION block (or curly bois)

//let scope just goes to the nearest block
