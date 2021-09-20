console.log("functions.js");

// 1. Create a function named greeting that prints the "Hello World" to the console.

function greeting() {
    console.log("Hello World")
}
greeting()



// 2. Create a function named countingCharacters that takes a string as a parameter.

// If the length of the string is less than 10, print the strings length to the console
// If the string length is more than 10, print a message that the string is too long and include the string in the message.

let words = "fuckfunctions"

function countingCharacters(words) {
    if (words.length < 10) {
        console.log(words.length)
    }

    else {
        console.log(words, "is too long")
    }
}

countingCharacters(words)



// 3.Create a function named difference that accepts two numbers as parameters.

// If either of the parameters provided is not a number, the function should return the following error: "Input(s) must be a number!".
// It should return the difference if both parameters are numbers.
// Call the function within a console.log() statement to print the information returned from the function.This is different than having the function print to the console directly.
// /*
//     Examples: 
//     difference("hello", 3) // "Input(s) must be a number!"
//     difference(3, 5) // 2
//     difference(5, 1) // 4
//  */



function difference(number1, number2) {

    if (isNaN(number1, number2)) {
        return "Inputs(s) must be a number!";
    }
    return number1 - number2
}
console.log(difference(8, 5))
console.log(difference("Bob", 8))




// 4. Using the function expression syntax, create a new function named advancedGreeting.

// It should accept hour as a parameter
// If the hour is less than 12, return a "Good morning" greeting
// If the hour is between 12 and 18, return a "Good afternoon" greeting
// If the hour is between 18 and 24, return a "Good night" greeting
// All other values should return "Invalid hour input".




function advancedGreeting(hour) {
    if (hour < 12) {
        return "Good Morning"
    }
    else if (hour >= 12 && hour <= 18) {
        return "Good afternoon";
    }
    else if (hour >= 18 && hour <= 24) {
        return "Good Night";
    }
    return "Invalid hour input";
}

console.log(advancedGreeting(11))
console.log(advancedGreeting(15))
console.log(advancedGreeting(20))
console.log(advancedGreeting(50))








// 5.Can we access variables created inside the scope of a function outside of that function?Can a function access variables created in a parent scope ?

// No you can't. Anything created in the global scope can be used in the function scope as long as its created above the function.