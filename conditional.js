console.log("conditional.js");

// 1. Create 2 variables, x and y, and assign them a number value.

let x = 2
let y = 4

// 2. Using an if statement, print "Hello World" to the console if x is greater than y;
// 3. Update the if statement to print "Goodbye World" to the console if x is not greater than y without modifying the existing condition.

if (x > y) {
    console.log("Hello World")
} else {
    console.log("Goodbye World")
}

// 4. What are some examples of falsy values in JavaScript ?
// false, 0 , undefined, NaN

// 5. What will the following code output to the console and why ?

let number1 = 8;
let number2 = "9";

if ("0" === 0) {
    console.log("condition 1 is true")
} else if (number1 > number2) {
    console.log("condition 2 is true")
} else if (typeof number2 === "number") {
    console.log("condition 3 is true")
} else if (typeof number2 !== "number" && number1 > number2) {
    console.log("condition 4 is true")
} else if ("0" == 0) {
    console.log("condition 5 is true")
} else {
    console.log("no condition was true")
}

// Answer: condition 5 is true. the "==" is converting the type making "0" equal to 0


// 6. What is the difference between the == and === operator ? What is the best practice to use and why ?

// The double equals performs type coercion so its not as strict as the triple equals. 
// Its best practice to use the triple equals since it checks that the type and value are the same.


//     7. Refactor the conditional statement inside the function to use a ternary operator:

// let addButter = true;
// let popcorn = "The popcorn is ready!";

// if (addButter) {
//     popcorn = "The popcorn is delicious!";
// } else {
//     popcorn = "The popcorn is good but could use some butter :("
// }
// console.log(popcorn)

let addButter = true
let popcorn = "The popcorn is ready!";
popcorn = (addButter) ? "The popcorn is delicious!" : "The popcorn is good but could use some butter :("
console.log(popcorn)





// 8. What will the code below output and why ?
let soldOut = true;
let onSale = true

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);
// It will output "I got !tickets!" because the bang character "!"
// is causing the soldout variable to output false which makes the whole statment true. 

// 9. After the last console.log(), refactor the code from the previous question to use an if statement to set the message variable.

// let soldOut = true;
// let onSale = true

if (!soldOut && onSale) {

    message = "I got tickets!";
} else {
    message = "I did not get tickets";
}
console.log(message)

