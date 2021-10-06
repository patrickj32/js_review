console.log("arrays.js")

// 1.What are two ways you can create an array in JavaScript ?
//  Array literals and array constructors

// Literal syntax...const carMakes = ["Honda", "Toyota", "Mazda"];

// Constructor syntax...let models = new Array('Honda', 'Ford', 'Toyota')

// new Array () and Array.of() are DIFFeREnt


// *The syntax for literals are the square brackets "[]"* E "let names = []"
// *the syntax for object literals is curly braces "{}"*
// *The object constructor syntax uses the word "new" keyword. example: "const names = new Array*""


// 2. How can we tell if a variable is holding an array ?

// Ex let someList = []

// Array.isArray(someList)

// this will log out "true" because "somelist" is an Array

// 3. What data type is returned from an array with the typeof?

// Object

// 4.What is an index in the context of an array ?
// The index is the location of an item in an Array.

// 5. Given the following array, const carMakes = ["Honda", "Toyota", "Mazda"]

// On a separate line use a built -in array method to add "Mercedes" to the end of the array
// On a separate line use a built -in array method to add "BMW" to the beginning of the array
// Print "Toyota" to the console accessing it by it's index

const carMakes = ["Honda", "Toyota", "Mazda"];
carMakes.push("Mercedes");
carMakes.unshift("BMW")
console.log(carMakes[2]);


// 6. Using a built -in array method, create a new array from the first 3 values in the carMakes array and store it in a new variable.
// Your new array should contain the values["BMW", "Honda", "Toyota"]

const newMakes = carMakes.slice(0, 3)
console.log(newMakes)

// *"CONST" does not mean constructor*


// Using built -in Array Methods and working with this array: const ericInfo = ["Eric", "Senior Instructor", "Florida"];
const ericInfo = ["Eric", "Senior Instructor", "Florida"];



// Remove "Eric" from the ericInfo array

ericInfo.splice(0, 1);
console.log(ericInfo);

// Splice DOES affect the array


// 7. Update "Florida" to "South Carolina"
// Add "Schwartz" to the end of the array
// The final array should look like this: ["Senior Instructor", "South Carolina", "Schwartz"]
// Please feel free to look up array methods that you can use to accomplish the transformation above.

ericInfo.splice(1, 1, 'South Carolina')
ericInfo.push("Schwartz")
console.log(ericInfo);

// 8.Print "apple" from each of the arrays below to the console

const fruits1 = ["apple", "pear", "strawberry", "grape"];
const fruits2 = [
    ["strawberry", "grape"],
    ["rambutan", "durian"],
    ["orange", "apple"]
];
const fruits3 = [
    ["strawberry", ["pineapple"]],
    ["grape", ["pear", ["apple"], "kiwi"]]
];

console.log(fruits1[0])
console.log(fruits2[2][1])
console.log(fruits3[1][1][1][0])




// 9.Loop through the following array with a for () or while () loop printing each name to the console.

const studentsArray = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nicole", "Todd"]
for (let i = 0; i < studentsArray.length; i++) {

    console.log(studentsArray[i])
}




// 10.Loop through the following array with the forEach() Array method printing each name and the names index to the console.
// /*
// Example Output:

// 0: Ashley
// 1: Craig
// ...

// */
const studentsArray1 = ["Annmarie", "Craig", "Ashley", "Joyce", "Deb", "Gabriel", "Kimmy", "Matt", "James", "Nico"]
studentsArray1.forEach(function (item, index) {

    console.log(index + ': ' + item)
})


// 11. Using the the map Array method square every number in the following array and save the results to a new array called numbersSquaredArray.
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquaredarray = numbersArray.map(x => x ** 2)
console.log(numbersSquaredarray)




// 12,Using a looping method of your choice, loop over and sum all the values the new numbersSqauredArray storing the sum in a variable named arraySum.
// Print arraySum to the console.


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquaredarray = numbersArray.map(x => x ** 2)
console.log(numbersSquaredarray)

let arraySum = 0;
for (let i = 0; i < numbersSquaredarray.length; i++) {
    arraySum += numbersSquaredarray[i];

}
console.log(arraySum)

// *need to figure out how to store the sum in arraySum*

// 13. Given the following array, use a built -in array method to check if the array contains "Luke Skywalker" and if it does, print its index to the console.

const starWarsCharactersArray = ["Yoda", 'Darth Vader', 'Leia Organa', 'Luke Skywalker', 'Anakin Skywalker'];


if (starWarsCharactersArray.includes('Luke Skywalker')) {
    console.log(starWarsCharactersArray.indexOf('Luke Skywalker'))
}

