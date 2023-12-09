/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })
}

function calculateTime() {
    let start = Date.now();
    // Runs all the Promises together
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(() => {
        let end = Date.now();
        console.log('Time taken to run all three promises together')
        console.log((end - start) / 1000, 'seconds')
    })
}

calculateTime(); // 3 Seconds

   // We assume that we are going to wait 6 seconds 3 + 2 + 1
    // But remember Promises are async so they all run seperately
    // They dont need to wait for a previous function to finish