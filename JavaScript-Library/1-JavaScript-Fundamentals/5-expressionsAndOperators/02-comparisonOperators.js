/*
COMPARISON OPERATORS
*/

//equality comparison operator
console.log('3' == 3);
console.log(4 == 4);
console.log(3 == '4');

//strict equality comparison operator
console.log(3 === 3);
console.log('3' === 3);

//not equal comparison operator
console.log('3' != 4);
console.log('3' != 3);

//strict not equal comparison operator
console.log('3' !== 3);
console.log(3 !== 3);

//greater than
console.log(3 > 2);
console.log(3 < 2);

//greater than or equal to
console.log(3 >= 2);
console.log(3 >= 3);

//less than or equal to
console.log(2 <= 3);
console.log(3 <= 2);

//And (both expressions on either side of the operator must be true for 'And' to return true)
console.log(1<2 && 3>0);
console.log(2<1 && 3>0);

//Or (either expression on one side of the operator must be true for 'Or' to return true)
console.log(1<2 || 3<0); //true
console.log(2<1 || 3<0); //false

//the objects below look the same but they're not the same, they are duplicates
let obj = {key: 'test'};
console.log(obj == {key: 'test'}); //false

//the objects below are the same so they will return true
console.log(obj == obj); //true

//below is another example of what is above
let arr = [1,2,3,4];

console.log(arr == [1,2,3,4]); //false
console.log(arr == arr); //true

