fs = require('fs');
var file = process.argv[2];
var fileReadCallback = function(err,data){
  if(err){
      console.log("Error: " + err);
  } else {
      console.log(data.toString().split('\n').length-1);
  }
}
fs.readFile(file,fileReadCallback);
//console.log('hi');