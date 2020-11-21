/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY

    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/

// ELSE IF (check the strictest conditional FIRST!)

let FB = 30;

// if (FB % 15 === 0){             //or if (FB%3==0 && FB%5==0)
//     console.log('Fizz Buzz');
// } else if (FB % 3 == 0){
//     console.log('Fizz');
// } else if (FB % 5 == 0){
//     console.log('Buzz')
// } else {
//     console.log('Not divisible by 3 or 5')
// }

//SWITCH

let isDivisibleBy5and#3 = FB % 3 == 0 && FB % 5 == 0;
let isDivisibleBy3 = FB % 3 == 0;
let isDivisibleBy5 = FB % 5 == 0;

switch (true) {
    case FB % 3 == 0 && FB % 5 == 0:
        console.log("fizz buzz");
        break;
    case FB % 3 == 0:
        console.log("Fizz"); 
        break;
    case FB % 5 == 0:
        console.log("Buzz");
        break;
    default:
        console.log("Not Fizz or Buzz");
}

//TERNARY

//let FB = 30;

//(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : console.log(FB)