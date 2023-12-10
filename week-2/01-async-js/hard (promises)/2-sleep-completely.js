/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let startSleep = Date.now();
    // Check if the current time is more than the specified time 
    while(Date.now() < startSleep + seconds) {
        // BUSY WAIT
    }
    return new Promise((resolve) => {
        resolve() // <- Resolve immediately after blocking for 'x' seconds
    })
}

// Example
// console.log(1)
// console.log(2)
// sleep(5000)
// console.log(3)
// console.log(4)
module.exports = sleep; // <- Required for tests to run


