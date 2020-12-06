/*
FOR OF LOOPS
*/

//of requires that the 'thing' you're looping through be iterable--that means it needs to be numbered
//for of grabs the value of the thing, not the number (position, key)

let catArray = ['tabby', 'britsh shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}