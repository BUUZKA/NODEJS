exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };

const square = require('./square'); // Here we require() the name of the file without the (optional) .js file extension
console.log('The area of a square with a width of 4 is ' + square.area(4));