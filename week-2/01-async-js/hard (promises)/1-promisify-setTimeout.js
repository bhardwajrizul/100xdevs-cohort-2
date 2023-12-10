/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, n * 1000)
    })
}

// Example
// let out = wait(5) // Wait for 5 seconds

// console.log(out) // <- Wait is PENDING for 5 seconds

// out.then(() => {   // <- Resolve after 5 sec 
//     console.log(out)
// })

module.exports = wait; // Required to run tests