// ******* Relational Operators ******

// Greater Than: >
// Less Than: <
// Less Than or Equal <=
// Greater Than or Equal >=

// ****** Logical Operators ******

// And: &&
// Or: ||

// ****** Logical Operators ******

// Equal: ==
// Not Equal: !=

// **** Strict ****
// Equal: ===
// Not Equal: !==

let age = 15;

if (age>=21){
    console.log("Yes can purchase");
} else {
    console.log("Cannot purchase");
}

/*
CHALLENGE 1
Who's name is longer?

BRONZE

Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

// const myName = "Lindsay";
// console.log(myName.length);

// const friendName = "Matt"
// console.log(friendName.length);

/*
SILVER

Expand on what you have already done and write a conditional to see who has the longer name.
Using string interpolation console log whose name is longer.
Example result: My name is longer than Adam's.
*/

// const myName = "Lindsay";
// const friendName = "Matt";
// let sentence;

//if (myName.length > friendName.length){
//    sentence = "My name is longer than " + friendName;
//    console.log(sentence);
//}   else {
//    sentence = `${friendName} is longer than ${myName}`;
//   console.log(sentence);
//}

/*
GOLD

In the console log include how many letters difference there are between the names. 
Example result: Adam's name is shorter than mine by 4 letters. There is also one additional case that should be handled that has not been mentioned so far.
See if you can add that to your conditional!
*/

const myName = "Lindsay";
const friendName = "Matt";
let sentence;

if (myName.length > friendName.length){
    sentence = "My name is longer than " + friendName;
    console.log(sentence);
}   else if(myName.length == friendName.length){
        const differenceInLetters = myName.length - friendName.length;
    sentence = `${friendName}'s is equal to ${myName}. ${differenceInLetters} letters are different`;
    console.log(sentence);
} else {   
    const differenceInLetters = myName.length - friendName.length;
    sentence = `${friendName}'s is longer than ${myName} by ${differenceInLetters} letters`;
    console.log(sentence);
}
