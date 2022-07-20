const prompt=require("prompt-sync")({sigint:true});
//Power of two
const number = prompt("Enter a range to get power of 2 : ");

for (i = 0; i <= number; i++) {
    console.log(Math.pow(2, i));
}

//Harmonic no.

const number4 = prompt("Enter the value of n : ");
let sum = 0;

for (i = 1; i <= number4; i++) {
    sum += 1 / i;
}
console.log("Harmonic value for the entered value is : " + sum);

//Prime number
const number3 = prompt("Enter a number to check whether it is prime or not: ")
let isPrime = true

if (number3 == 1) {
    console.log("1 is neither prime nor a composite number ")
}

for (i = 2; i <= number3 / 2; i++) {
    if (number3 % i == 0) {
        isPrime = false
    }
}
if (isPrime) {
    console.log("Its' a prime number")
}
else {
    console.log("Its' not a prime number")
}

//Factorial 
const number2 = prompt('Enter a number: ');
let fact = 1;

for (i = 2; i <= number2; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number2 + " is " + fact);

//Prime factor
const number1 = prompt('Enter any number to print its prime factors: ')

let isPrime1 = 0;

for (i = 2; i <= number1; i++) {
    if (number1 % i == 0) {
        isPrime1 = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime1 = 0;
            }
        }
        if (isPrime1 == 1) {
            console.log(i);
        }
    }
}