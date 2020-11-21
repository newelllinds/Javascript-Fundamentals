/*
ARROW FUNCTIONS
*/

//normal function declaration
function coffee(){
    return 'coffee is good';
}

//normal function expression
let tea = function(){ //there's no name for this function - to call the unnamed function you can call the name of variable which is 'tea' in this example
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are *always* anonymous
//(arrow functions do not get hoisted)
//arrow function expression
let hotChocolate = () => {
    return 'hot chocolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3, 2))
console.log(animals(0,0));

//concise vs. block body
//concise body
let apples = x => `There are ${x} apples`;
console.log(apples(10));

//block body
let bananas = x => {
    return `There are ${x} bananas`;
}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function (you have to use the return keyword)

let func = () => 'hi';

console.log(func());

let secondFunc = () => 'hi';

console.log(secondFunc());