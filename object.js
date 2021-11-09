console.log("object.js")

// 1. Create an object that represents a person

// the object should have a name, an age, and a favorite color.
// using console.log() outside of the object, access the properties of the object to print: "Hello, My name is name. I am age years old and my favorite color is favoriteColor".Replacing the italic words with the correct property from the object.

// let person = {
//     name: 'Patrick',
//     age: 30,
//     favoriteColor: 'green',
// }
// console.log("Hello, My name is " + person.name + ". " + "I am " +
//     person.age + " years old and my favorite color is " + person.favoriteColor)



// 2. Add a method called sayHello to the person object created above that returns the same message that the previous console.log() printed to the console.
//              Be sure to use the properties within the object to replace the italicized words.Below the object, call the new method within a console.log() statement.


let person = {
    name: 'Patrick',
    age: 30,
    favoriteColor: 'green',
    sayHello: function () {
        console.log("Hello, My name is " + this.name + ". " + "I am " +
            this.age + " years old and my favorite color is " + this.favoriteColor)

    }
}
person.sayHello()

// 3. Given the object below that represents a student, add a method averageGrade that returns the average grade for the student by averaging the students grades array.Make sure you test the method by printing the average grade to the console.

// Correct
// let studentBob = {
//     name: "bob",
//     age: 23,
//     major: "Psychology",
//     grades: [70, 92, 84, 75, 100],
//     averageGrade() {
//         let sum = 0
//         for (let i = 0; i < this.grades.length; i++) {
//             sum += this.grades[i]
//         }
//         return Math.round(sum / this.grades.length);

//     }
// }
// console.log(studentBob.averageGrade())



// let numbers = [1, 2, 3];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log(sum);






// let studentBob = {
//     name: "bob",
//     age: 23,
//     major: "Psychology",
//     grades: [70, 92, 84, 75, 100],
//     intro() {
//         return "Hello, my name is " + this.name

//     }
// }

// console.log(studentBob.intro())




// 4. Add a new method to the studentBob object called printDetails that prints: "Hello, My name is name and I am a student. I am age years old and my major is major. My current average grade is averageGrade.

let studentBob = {
    name: "bob",
    age: 23,
    major: "Psychology",
    grades: [70, 92, 84, 75, 100],
    averageGrade() {
        let sum = 0
        for (let i = 0; i < this.grades.length; i++) {
            sum += this.grades[i]
        }
        return Math.round(sum / this.grades.length)
    },
    printDetails() {
        return "Hello, My name is " + this.name + " and I am a student. I am " + this.age + " years old and my major is " + this.major + " . My current average grade is " + this.averageGrade() + "."

    }
}
console.log(studentBob.printDetails())
console.log(studentBob.averageGrade())



// 5. Loop through the following array of objects and print out the name property of each object to the console.As a bonus, see if you can find a string method that would make the names appear with all uppercase letters when printed.

// const charactersArray = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },


// ];

// charactersArray.forEach(character => console.log(character.name));

// or 

// for (let i = 0; i < charactersArray.length; i++) {

//     console.log(charactersArray[i])



// MY ATTEMPT AT THE BONUS
//    uppercaseNames(){
//         charactersArray.map(character=> character.toUpperCase());
//    }
// return uppercaseNames


// 6. Using the Array.filter() method on charactersArray, create a new array called filteredCharactersArray that only contains characters where the mass is greater than 80.
//  const filteredCharactersArray = charactersArray.filter(charactersArray => charactersArray.mass => 80)

const charactersArray = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
        favoriteCharacter: false
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
        favoriteCharacter: false
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
        favoriteCharacter: false
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
        favoriteCharacter: false
    },
    // 10/29/21 filteredCharactersArray = charactersArray.filter(charactersArray => charactersArray.mass > 80)

];

filteredCharactersArray = charactersArray.filter((character, index) => character.mass > 80)

console.log(filteredCharactersArray)

// 7. Using the Array.map() method on charactersArray, create a new array called characterNames that only contains names of each character as a string.
characterNames = charactersArray.map(function (character) {


    return character.name
})

console.log(characterNames)



// 8. Using the Array.some() method on charactersArray.Check to see if a character has blue eyes.If they do, print "Some characters have blue eyes" otherwise print "No characters have blue eyes" to the console.

let blueEyes = charactersArray.some((character) => {
    return character.eye_color === 'blue'
})

if (blueEyes === true) {
    console.log('"Some characters have blue eyes"')
} else {
    console.log("No characters have blue eyes")
}

// *******NOTES*********
// This only checking if its true of false!!!

// let hasBlueEyes = charactersArray.some(function (character) {
//     return character.eyeColor === "blue";

// and
// if(character.eyeColor === "blue"){
//   return true
// }else{
//   return false
// }
// }) IS THE SAME THING





// 9. Using the Array.every() method on charactersArray.Check to see if all characters are male.If they every character is male, print "All the characters are male" to the console.



const maleCharacters = charactersArray.every(function (men) {
    return men.gender === 'male'

})

if (maleCharacters === true) {
    console.log('All the characters are male')
} else {
    console.log('false')
}

// 10. Using a loop or Array.reduce() calculate the total mass of all the characters.Print the total mass to the console.

const totalMass = charactersArray.reduce((total, character) => {
    // ** charactersArray.reduce is being stored in "total". "total" is a built in parameter. "character" is what youre working with

    return total + parseInt(character.mass)
    // ** your asking the total to add all the character mass together. parseInt is just putting it into a number

}, 0)

// 0 is just your starting point

console.log(totalMass)

// **log out the totalMass variable



// 11. Create a function called tagFavorite that takes an array as one parameter and a string that represents your favorite character's name as another parameter. 
// This function does not need to return anything.


// function tagFavorite(array, favName) {

// }


// // / Create a loop inside the function that loops over the array passed in.


// Add a property to each object in the array called favoriteCharacter and default it to false


// // If the character name matches the character name passed in, set the favoriteCharacter property to true for that character's object

// console.log(tagFavorite())
// Test your function by passing in the charactersArray and your favorite character's name when running the function. Print the charactersArray after you run the function to ensure the objects updated properly.



// DMG
function tagFavorite(whateverArrayIPassIn, fav) {
    for (let i = 0; i < whateverArrayIPassIn.length; i++) {
        let currentFavorite = whateverArrayIPassIn[i];
        currentFavorite.favoriteCharacter = false;
        if (currentFavorite.name.toUpperCase() === fav.toUpperCase()) {
            currentFavorite.favoriteCharacter = true;
        }
    }
}
tagFavorite(charactersArray, 'Luke SkyWalker');
console.log(charactersArray);