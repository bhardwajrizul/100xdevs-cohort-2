/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(a) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, a * 1000)
    })
}

function waitTwoSecond(b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, b * 1000)
    })
}

function waitThreeSecond(c) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, c * 1000)
    })
}

// We assume that we are going to wait 6 seconds 3 + 2 + 1
// But remember Promises are async so they all run seperately
// They dont need to wait for a previous function to finish
function calculateTime(a, b, c) {
    let start = Date.now();
    // Runs all the Promises together inside a new Promise
    return Promise.all([waitOneSecond(a), waitTwoSecond(b), waitThreeSecond(c)])
    .then(() => {
        let end = Date.now();
        // console.log('Time taken to run all three promises together')
        // console.log((end - start) / 1000, 'seconds')
        return (end - start)
    })
}

// Example
// calculateTime(1, 2, 3); // 3 Seconds



module.exports = calculateTime;