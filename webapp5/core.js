var path = require('path');
var util = require('util');


console.log(path.basename(__filename));

var fileLocation1 = 'c:\\users\\marco\\file.js';
console.log(path.basename(fileLocation1));
console.log(path.win32.basename(fileLocation1));

util.log(path.basename(fileLocation1));
util.log(path.win32.basename(fileLocation1));

