/*
LITERALS
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//                  0         1            2           3          4
console.log(weekDays.toString()); //toString is a "Method"
console.log(weekDays[3]);

let soup = {
    a:'chicken noodle', //a is the 'key', the 'value' is chicken noodle
    b: 'tomato',        //b is the 'key', the 'value' is tomato
    c: 'beef and barley'//c is the 'key', the 'value' is beef and barley
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex' types (arrays, objects, functions)
let complexArrLiteral = [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];
           //We have a Number, boolean, string, array, object, function all inside of this array 
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: true, string: 'Academy', arr: [1,2,3], obj: {key: 'test'}, func: function(){return 'yes'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr); //the array has a 'key' of arr
