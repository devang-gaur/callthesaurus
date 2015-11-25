# callthesaurus
A js package aimed at exploring the thesaurus of a word.
Why the name "callthesaurus" ? Well, it call by giving a word string as first argument and then exposes a
callback function as the second argument with the response object as argument.

#Example

var thesaurus=require('./thesaurus.js');

thesaurus("cold",function(obj){
    console.log(obj);
});

Output:

{
    found : true,
    type : "noun",
    synonyms : ["stale","frigid",.......],
    antonyms : ["hot","hotness"]
};
