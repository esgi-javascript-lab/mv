"use strict";

const VERSION = "0.1.0";
const fs = require("fs");
const path = require("path");
const options = process.argv.slice(2);
const files = [];

if (options.length < 2) {
    console.error("Not enough arguments");

    process.exit(1);
}

for (let index = 0; index < options.length; index++) {
    switch(options[index]) {
        case "-v":
        case "--version":
            console.log(VERSION);
            process.exit(0);
            break;

        default:
            files.push(options[index]);
            break;
    }
}

if (files.length !== 2) {
    console.error("Bad files count.");

    process.exit(1);
}

fs.rename(files[0], files[1], function(error) {
    if (error) {
        console.error(error.message);

        process.exit(1);
    }

    console.log(`Moved ${path.resolve(files[0])} to ${path.resolve(files[1])}`);
});
