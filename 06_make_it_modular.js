var fileFilter = require('./06_filefilter_module.js');
fileFilter(process.argv[2],process.argv[3],function(err,data){
    if (err){
        console.log("Error:" + err);
    } else {
        console.log(data);
    }
});