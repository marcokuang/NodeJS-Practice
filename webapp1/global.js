/**
 * Understand the global scope and its properties and methods.
 */

var path = require('path');

/*
console.log("Hello NodeJS");
var helloString = "Hello World from nodejs";
var slicedString = helloString.slice(17);

// use template string to construct a new string
console.log(`I love ${slicedString}`);
// output absolute path to existing directory using __dirname
console.log(__dirname);
// absolute path to the file
console.log(__filename);
*/
console.log(`Hello world from file ${path.basename(__filename)}`);
