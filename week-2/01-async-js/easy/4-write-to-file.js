// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


// FS -> File System, NodeJS library allows us to work with files
// Automatically installed with Node.js
const fs = require('fs'); 

let data = 'Khao Maa Kasam!'
// Write  data to a file
fs.writeFile(`${__dirname}/out.txt`, data, (err, data) => {
    if (err) {
        console.log(err);
        console.log('There was an error writing to the file!');
    } else {
        console.log('Data written to file sucessfully!');
    }
});