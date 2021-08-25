console.log("strings.js");

// 1. Create 5 variables. All variables should be assigned a string value.
// Assign 1 variable a verb
// Assign 1 variable a noun
// Assign 1 variable an adjective
// Assign 1 variable a color
// Assign 1 variable a name

let verb = "run";
let noun = "frog";
let adjective = "angry";
let color = "red";
let name = "asshole";

// 2. Create a variable called madlib and assign it a string value.

// Use all the variables created in step one to construct a Madlib.
// Use the + operator for concatenation when building your Madlib.
// Use the appropriate escape characters to make sure each sentence in the Madlib appears on a new line.
// Print the Madlib to the console

let madlib = verb + " Daniel!" + "\nTheres a " + noun + "!" + "\nHe looks very " + adjective + "\nLook at those " + color + " eyes!" + "\nwhat a total " + name + "!"
console.log(madlib)

// 3. Create a variable called madlibLiteral. Refactor your Madlib using template literals and interpolation. 
// Print the new variable to the console.



let madlibLiteral = `${madlib}`
console.log(madlibLiteral)

// 4. Why would we want to convert a string to a number in JavaScript and what is one way to accomplish this?

// to be able to perform mathematical operations on a string
let string = '123'
console.log(string + 2)