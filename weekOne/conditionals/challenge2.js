let myString = "this is a string"
// can use ' or " quotes or backticks for a string
let myNumber = 10;
let myBoolean = false;
let myArray = [10, "string", ["another string"]]
//you can have an array within an array ie []
// let myObject = {firstKey: "a string"}
let myUndefined = undefined;
//undefined is an unintentional empty value
let myNull = null;
//null is intentionally empty

console.log(typeof myBoolean);
// typeof can tell you what type of conditional you're working with

/* CHALLENGE TWO

Types Challenge

BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

var myCar = {
    make        : "Honda",
    model       : "Odyssey",
    year        : 2013,
    isMinivan   : true,
};
console.log(typeof myCar.year);

let myObject = {
    string: "String",
    number: 15,
    boolean: true,
    object: {},
    undefined: undefined,
}

console.log(typeof myObject.number)

/* SILVER

Write a conditional that checks the type of one of the values stored in the object and console log the data type. 
If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let value = typeof myObject.string;

if (value === "string") {
    console.log(`The value is a ${value}`)
} else if (value === "number") {
    console.log("The value is a number");
} else if (value === "boolean") {
    console.log("The value is a boolean");
} else if (value === "object") {
    console.log("The value is an object");
} else {
    console.log("What are you?!")
}



