const thesaurus=require('./thesaurus.js');

thesaurus(process.argv[2],function(obj){
    //Manipulate the obj javascript object
    return true;
});