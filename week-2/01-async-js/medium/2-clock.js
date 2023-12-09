// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



// Function to display the current time in HH:MM:SS format
function displayTime() {
    const now = new Date().toTimeString();
    console.log('(HH:MM:SS):', now.substring(0, 9));
}

// Function to display the current time in HH:MM:SS AM/PM format
function displayTimeAMPM() {
    const now = new Date().toLocaleTimeString();
    console.log('(HH:MM:SS AM/PM):', now);
}

// UPDATE EVERY SECOND
setInterval(() => {
    // CLEAR CONSOLE
    console.clear();

    // HH:MM:SS format
    displayTime();

    // HH:MM:SS AM/PM format
    displayTimeAMPM();
}, 1000);
