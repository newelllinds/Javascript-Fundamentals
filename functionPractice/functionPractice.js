//Area of a Trapezoid
//Write a function that accepts the parameters b1, b2, h
//Your function should console.log the area of a Trapezoid
//1/2(b1 + b2)h


function areaCalculator (b1, b2, h) {
    let area = .5 * (b1 + b2) * h;
    return area;
}

let area1 = areaCalculator(5,2,4);
let area2 = areaCalculator(10,2,2);
console.log(area1);
console.log(area2)


//Counting Sum Challenge
//Write a function that adds together all the numbers between any two numbers.
//Your function will accept two parameters. One for the starting number and another for the ending number.
//console.log the final sum of the numbers

function sumAll(arr) {
    let sum = 0;

    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum = sum + i;
    }
    return sum;
}

console.log(sumAll([1, 100]));


/*
FIZZBUZZ (functions, conditionals, and loops)
************
-Create a function with the following logic:
    - a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/


function findSum(start,stop) {
	let sum = start;
	for (let i = start +1; i <= stop; i++){
	sum = sum+i;
	}
	return sum;
}
console.log(findSum(1,100));

function countToOneHundred(){
	for (let i = 0; i <=100, i++) {
		if (i % 15 ==0) {
			console.log('FizzBuzz’);
		} else if (i % 3 == 0) {
			console.log('Fizz');
		} else if (i % 5 == 0) {
			console.log('Buzz’);
		} else {
			console.log(i);
		}
	}
}