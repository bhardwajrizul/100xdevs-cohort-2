/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

function calculateTime(a, b, c) {
    let start = Date.now();
    // run a promise waitOneSecond and wait for it to resolve using .then() 
    // after it has been resolved return a new promise waitTwoSecond and 
    // wait for it to resolve using .then() and call waitThreeSeconds  
    // wait for waitThreeSecond to resolve and then calculate the time taken
    return waitOneSecond(a) 
            .then(() => {return waitTwoSecond(b)})
            .then(() => {return waitThreeSecond(c)})
            .then(() => {
                let end = Date.now();
                // console.log('Time taken to run in a series : ',(end-start) / 1000, ' s')
                return end - start;
            })
}

// Example
// calculateTime(1, 2, 3); // 6 Seconds

module.exports = calculateTime;