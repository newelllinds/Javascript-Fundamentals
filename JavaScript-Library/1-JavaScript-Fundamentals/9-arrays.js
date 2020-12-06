/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:    0         1          2      3     4    5      6
// console.log(typeof students); //typeof doesn't tell me my variable is an array - we get object back because arrays are built on the back of an object
// console.log(students instanceof Array); // instanceof tells me my array is an array
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[6]);

// let name = students[6];
// console.log(name); //[ 'Ryan', 'Iesha' ]

let name = students[6][1];
console.log(name); //Iesha
//making a sentence 
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop -> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//for (f of food){  //f represents the actual values - can name f whatever you want
//    console.log(f);
//}
//using string interpolation to make a sentence
// for (f of food){
//     console.log(f + ' is amazing!');
// }

// //array methods - methods are built in functions to JS that we can use as long as we have the appropriate type
// food.push('Pizza'); //push appends new elements to an array
// console.log(food);

// food.splice(1, 1, 'Bananas'); //Splice takes 3 elements - 1.where do we do our insertion 2.how many things to remove 3.what are we replacing it with?
// console.log(food);

// food.splice(2, 0, 'Sweet Potato Pie');
// console.log(food);

// food.pop(); //pop removes the last element of an array
// console.log(food);

// food = food.slice(2,4); //the first number is the first element to slice from the array, while the 
// //second number is the stop position which is not to be included
// console.log(food); //[ 'Sweet Potato Pie', 'Quesadilla' ]

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

//food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies); //Adds The Force Awakens
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log (movies); //Replaces The Watchman

movies.forEach(movie => console.log(movie));
console.log(movies.length); //.length is a dot notation tells you how long an array is

//let's do the following with an array:
//we will check if we are working with an array
//flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}


