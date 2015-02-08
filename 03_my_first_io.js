var fs = require('fs');
var fileName = process.argv.slice(2)[0];
//console.log(fileName);
var contentBuffer = fs.readFileSync(fileName);
console.log(contentBuffer.toString().split('\n').length -1);