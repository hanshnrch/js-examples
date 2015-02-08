/**
 * Created by hans-heinrich on 08.02.15.
 */
var fs = require('fs');
var path = require('path');
module.exports = function fileFilter(pathname,extention,callback){
    fs.readdir(pathname,function(err,files){
    if(err){
        callback(err);
    } else {
        files.forEach(function(file){
            //console.log(file);
            if (path.extname(file) === '.' + process.argv[3]){
                callback(null,file);
            }
        });
    }
});
}