console.log("loops.js");


// 1. Write a for loop that counts from 0 to 100, printing each number to the console.
for (let i = 0; i <= 100; i++) {
    console.log(i)
}


// 2. Write a for loop that counts from 0 to 100 in increments of 2, printing each number to the console.

for (let i = 0; i <= 100; i += 2) {
    console.log(i)
}

// 3. Write a for loop that counts down from 100 to 0, printing each number to the console.
for (let i = 100; i >= 0; i--) {
    console.log(i)
}

// 4. Write a for loop that counts from 0 to 50 but only prints the odd numbers that are multiples of 5 to the console.
for (let i = 0; i <= 50; i++) {
    if (i % 2 && i % 5 === 0) {
        console.log(i)
    }

}


// 5. Keeping track of a total with a loop.

// - Create a variable called total and assign it a value of 0(make sure total is defined outside of your loop).
// - Create a loop that counts from 1 to 10, incrementing by 1.
// - On each iteration of the loop, add 3 to the "total" variable in step 1.
// - After your loop, print the value of total to the console.

let total = 0
for (let i = 1; i <= 10; i++) {
    total = total + 3

}
console.log(total)


// 6. Refactor the last questions loop to use the while () loop syntax

// let total2 = 0
// let i = 1

// while (i <= 10) {
//     total2 = total2 + 3
//     i++
// }
// console.log(total2)


// 7. What do the continue and break statements do in JavaScript in the context of a loop ?

// continue causes the next iteration of the loop to run immediately, 
// break terminates the loop and causes execution to resume after the loop.

//     Fizz Buzz Interview Question

// 8. Write a loop that prints all numbers from 1 - 100.
// - If a number is divisible by 3 log "Fizz" instead of the number.
// - If a number is divisible by 5 log "Buzz" instead of the number.
// - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

let i = 0

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    } else console.log(i)
}




// 9. What is the difference between the do...while () and the while () or for () loop ?

// The for loop do have all its declaration at the top of the body of the loop.

// A while loops initialization and condition is at the top of the body of loop and iteration 
// may be written anywhere in the body of the loop.

// The do while loop executes the content of the loop once before checking the condition of the while.

// The take away is...do-while loop will always run at least once. Theres a chance that the for and while loops wont run at all.

