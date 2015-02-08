var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2],function(err,files){
    if(err){
        console.log("Error:" + err);
    } else {
        files.forEach(function(file){
            //console.log(file);
            if (path.extname(file) === '.' + process.argv[3]){
                console.log(file);
            }
        });
    }
});