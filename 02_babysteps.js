/**
 * Created by hans-heinrich on 08.02.15.
 */
var commandLineArguments = process.argv.slice(2);
//console.log(commandLineArguments);
var summe = 0;

/*var summiere = function(x,idx,theArray){
    summe += Number(x);
    //console.log("Das " + (idx +1) + ". Element von " + theArray + " ergibt: " + summe);
    return summe;
}*/
commandLineArguments.forEach(function(x){summe += Number(x)});
console.log(summe);
