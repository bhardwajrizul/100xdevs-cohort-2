// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs'); 

// READ DATA FROM THE FILE
fs.readFile(`${__dirname}/mess.txt`, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        console.log('There was an error reading the file!');
        return;
    } 
    // CONVERT DATA TO ARRAY USING SPLIT AND FILTER WORDS
    let cleanArray = data.split(' ').filter((word) => word.length > 0);
    // console.log(cleanArray)
    // CREATE A STRING FROM cleanArray
    let out = cleanArray.join(' ');

    // WRITE DATA BACK TO THE FILE
    fs.writeFile(`${__dirname}/clean.txt`, out, (err, data) => {
        if (err) {
            console.log(err)
            console.log('error writing to file')
            return;
        }
        console.log(`${out} ::::: written to file successfully!`)
    })
});