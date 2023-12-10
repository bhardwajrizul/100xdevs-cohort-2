// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


// Press ESC Key or CTRL + C to exit
let timer = 0;

function createNewSetTimeout() { // Create a timeout for 1s 
    setTimeout(() => {
        timer++;
        console.log(timer);
        createNewSetTimeout();  // Create a new setTimeout inside previous setTimeout 
    }, 1000)
}

createNewSetTimeout(); // calls setTimeout which iteself calls setTimeout
// setTimeout() -> setTimeout() ->  setTimeout() -> setTimeout() -> .......
//      ⬆️             ⬆️              ⬆️             ⬆️       ........
//   timer = 0      timer = 1         timer=1        timer=2    ........




































































// (Hint: setTimeout)